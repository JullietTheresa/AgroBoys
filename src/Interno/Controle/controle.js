import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./stylecontrole.css";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: 
    (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label">
            <span className="span">Label</span>
            <span className="text-wrapper-4">
              : Label Label
              <br />
            </span>
            <span className="span">Label</span>
            <span className="text-wrapper-4">: Label Label</span>
          </p>
      </>
    ),
   },
    "task-2": { id: "task-2", content: (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label">
            <span className="span">Label</span>
            <span className="text-wrapper-4">
              : Label Label
              <br />
            </span>
            <span className="span">Label</span>
            <span className="text-wrapper-4">: Label Label</span>
          </p>
      </>
    ),
  },
    "task-3": { id: "task-3", content: (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label">
            <span className="span">Label</span>
            <span className="text-wrapper-4">
              : Label Label
              <br />
            </span>
            <span className="span">Label</span>
            <span className="text-wrapper-4">: Label Label</span>
          </p>
      </>
    ),
  },
    "task-4": { id: "task-4", content: (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label">
            <span className="span">Label</span>
            <span className="text-wrapper-4">
              : Label Label
              <br />
            </span>
            <span className="span">Label</span>
            <span className="text-wrapper-4">: Label Label</span>
          </p>
      </>
    ),
  },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "A FAZER",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "EM ANDAMENTO",
      taskIds: ["task-3"],
    },
    "column-3": {
      id: "column-3",
      title: "FINALIZADO",
      taskIds: ["task-4"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

const Tasks = () => {
  const [state, setState] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDetails, setEditDetails] = useState("");

  const handleCreateTask = () => {
    const newTaskId = `task-${Object.keys(state.tasks).length + 1}`;
    const newTaskContent = (
      <>
        <div className="text-wrapper-2">{title}</div>
        <div className="text-wrapper-3">{description}</div>
        {details && (
          <p className="label-label-label">
            <span className="span">Label:</span> <span>{details}</span>
          </p>
        )}
        <br />
      </>
    );

    const newTasks = {
      ...state.tasks,
      [newTaskId]: { id: newTaskId, content: newTaskContent },
    };

    const newColumn = {
      ...state.columns["column-1"],
      taskIds: [...state.columns["column-1"].taskIds, newTaskId],
    };

    setState({
      ...state,
      tasks: newTasks,
      columns: { ...state.columns, ["column-1"]: newColumn },
    });

    setTitle("");
    setDescription("");
    setDetails("");
    setShowModal(false);
  };

  const handleAddControlClick = () => {
    setShowModal(true);
  };

  const handleEditTask = (taskId) => {
    setSelectedTaskId(taskId);
    setEditTitle(state.tasks[taskId].content.props.children[0].props.children);
    setEditDescription(state.tasks[taskId].content.props.children[1].props.children);
    setEditDetails(state.tasks[taskId].content.props.children[2].props.children[1].props.children);
    setShowEditModal(true);
  };

  const handleUpdateTask = () => {
    const updatedTaskContent = (
      <>
        <div className="text-wrapper-2">{editTitle}</div>
        <div className="text-wrapper-3">{editDescription}</div>
        {editDetails && (
          <p className="label-label-label">
            <span className="span">Label:</span> <span>{editDetails}</span>
          </p>
        )}
        <br />
      </>
    );

    const updatedTasks = {
      ...state.tasks,
      [selectedTaskId]: { ...state.tasks[selectedTaskId], content: updatedTaskContent },
    };

    setState({
      ...state,
      tasks: updatedTasks,
    });

    setShowEditModal(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = { ...state.tasks };
    delete updatedTasks[taskId];

    const updatedColumns = { ...state.columns };
    for (const columnId in updatedColumns) {
      updatedColumns[columnId].taskIds = updatedColumns[columnId].taskIds.filter((id) => id !== taskId);
    }

    setState({
      ...state,
      tasks: updatedTasks,
      columns: updatedColumns,
    });
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, result.draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setState({
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      });
    } else {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, result.draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      setState({
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      });
    }
  };

  return (
    <div className="modal-container">
      <div className="tasks">
        <div className="div">
        <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

              // Definindo a classe CSS com base no título da coluna
              const columnClass =
                column.title === "A FAZER"
                  ? "overlap"
                  : column.title === "EM ANDAMENTO"
                  ? "overlap-3"
                  : "overlap-5";
              return (
                <div key={column.id} className={columnClass}>
                  <div className={
                    column.title === "A FAZER"
                    ? "text-wrapper"
                    : column.title === "EM ANDAMENTO"
                    ? "text-wrapper-7"
                    : "text-wrapper-8"
                  }>
                    {column.title}
                    </div>
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <div
                        className="group"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {tasks.map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="overlap-group"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                onClick={() => handleEditTask(task.id)}
                              >
                                <div>
                                  {index === 0 ? (
                                    <p className="title">{task.content}</p>
                                  ) : (
                                    <>{task.content}</>
                                  )}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </DragDropContext>
          <div className="overlap-7">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <a className="text-wrapper-9" href="/suporte">Suporte</a>
            <img className="house" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
            <a className="text-wrapper-10" href="/dadossolo">Dados do Solo</a>
            <a className="text-wrapper-11" href="/">AgroBoys</a>
            <div className="group-2">
              <a className="text-wrapper-12" href="/pesticidas">Pragas e Agrotóxico</a>
              <img className="img" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
            </div>
            <img className="house-2" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
            <div className="rectangle-4" />
            <div className="group-3">
              <a className="text-wrapper-13" href="/regiao" >Região e Estação</a>
              <img className="img" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
            </div>

              <a className="text-wrapper-14" href="/plano">Plano Plantio</a>
              <a className="text-wrapper-15" href="/historico">Histórico Plantio</a>
              <img className="img-historico" alt="Calendar" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />

            <div className="div-wrapper">
              <div className="text-wrapper-16">Controle</div>
            </div>
            <a className="text-wrapper-17" href="/selcultura">Seleção Cultura</a>
            <img className="house-3" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
            <img className="house-4" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
          </div>
          <div className="overlap-8">
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="text-wrapper-18">Location, street, 1234</div>
            <div className="text-wrapper-19">Email@gmail.com</div>
            <div className="text-wrapper-20">+55 (61) 999123456</div>
            <div className="text-wrapper-21">www.AgroBoys.com</div>
            <div className="text-wrapper-22">Sobre AgroBoys</div>
            <div className="text-wrapper-23">Contacts</div>
            <p className="text-wrapper-24">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/YUkEWowS/img/envelope@2x.png" />
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/YUkEWowS/img/hand-with-smartphone@2x.png"
            />
            <img className="internet" alt="Internet" src="https://c.animaapp.com/YUkEWowS/img/internet@2x.png" />
            <img className="copyright" alt="Copyright" src="https://c.animaapp.com/YUkEWowS/img/copyright@2x.png" />
            <p className="copyright-2">
              <span className="text-wrapper-25">copyright 2024 </span>
              <span className="span">AgroBoys</span>
            </p>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/YUkEWowS/img/place-marker@2x.png"
            />
          </div>
          <a className="overlap-9" href="#" onClick={handleAddControlClick}>
            <div className="rectangle-7" />
            <div className="text-wrapper-26">Add Controle</div>
          </a>
          <div className="text-wrapper-27">Controle</div>
          <div className="overlap-10">
            <div className="overlap-11">
              <div className="ellipse" />
              <div className="text-wrapper-28">S</div>
            </div>
            <p className="usuario-gmail-com">
              <span className="text-wrapper-29">usuario</span>
              <a href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-29">@gmail.com</span>
              </a>
            </p>
            <div className="text-wrapper-30">admin</div>
          </div>
        </div>
        {/* Modal para criar nova tarefa */}
        {showModal && (
          <div className="modal">
            <h2 className="text-wrapper-31">Nova Tarefa</h2>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Detalhes"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <input
              type="text"
              placeholder="Detalhes"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <div className="button-container">
              <a className="overlap-12" href="#" onClick={handleCreateTask}>
                <div className="rectangle-8" />
                <div className="text-wrapper-32">Criar Tarefa</div>
              </a>
              <a className="overlap-12" href="#" onClick={() => setShowModal(false)}>
                <div className="rectangle-8" />
                <div className="text-wrapper-33">Cancelar</div>
              </a>
            </div>
          </div>
        )}
        {showEditModal && (
          <div className="modal">
            <h2 className="text-wrapper-31">Editar Tarefa</h2>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Detalhes"
              value={details}
              onChange={(e) => setEditDetails(e.target.value)}
            />
            <input
              type="text"
              placeholder="Detalhes"
              value={details}
              onChange={(e) => setEditDetails(e.target.value)}
            />
            <button onClick={handleUpdateTask}>Atualizar Tarefa</button>
            <button onClick={handleDeleteTask}>Excluir Tarefa</button>
            <button onClick={() => setShowEditModal(false)}>Cancelar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
