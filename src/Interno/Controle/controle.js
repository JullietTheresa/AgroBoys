import React, { useState, useRef, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./stylecontrole.css";

const TaskComponent = ({ description, details }) => {
  return (
    <div className="tasks">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">{description}</div>
        </div>
        <div className="overlap-3">
          <div className="rectangle-10">
            <div className="text-wrapper-33">{details}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: 
    (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label" style={{ top: `60%`}}>
            <span className="span">Detalhes:</span>
            <span className="text-wrapper-4">
              Label Label
              <br />
            </span>
          </p>
      </>
    ),
   },
    "task-2": { id: "task-2", content: (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label" style={{ top: `60%`}}>
            <span className="span">Detalhes:</span>
            <span className="text-wrapper-4">
              Label Label
              <br />
            </span>
          </p>
      </>
    ),
  },
    "task-3": { id: "task-3", content: (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label" style={{ top: `60%`}}>
            <span className="span">Detalhes:</span>
            <span className="text-wrapper-4">
              Label Label
              <br />
            </span>
          </p>
      </>
    ),
  },
    "task-4": { id: "task-4", content: (
      <>
        <div className="text-wrapper-2">Label</div>
        <div className="text-wrapper-3">Label Label</div>
          <p className="label-label-label" style={{ top: `60%`}}>
            <span className="span">Detalhes:</span>
            <span className="text-wrapper-4">
              Label Label
              <br />
            </span>
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
  const [details1, setDetails] = useState("");
  const [details2, setDetails2] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDetails1, setEditDetails] = useState("");
  const [editDetails2, setEditDetails2] = useState("");
  const [selectedBoxId, setSelectedBoxId] = useState(null); // Novo estado para armazenar o ID da box selecionada para edição
  const [editTask, setEditTask] = useState({
    taskId: null,
    title: "",
    content: "",
  });
  const descriptionRef = useRef(null);
  const [descriptionHeight, setDescriptionHeight] = useState(0);

  useEffect(() => {
    const descriptionElement = document.querySelector('.text-wrapper');
    if (descriptionElement) {
      const height = descriptionElement.getBoundingClientRect().height;
      setDescriptionHeight(height);
    }
  }, [description]);

  const handleCreateTask = () => {
    const newTaskId = `task-${Object.keys(state.tasks).length + 1}`;
    const newTaskContent = (
      <>
        <div className="text-wrapper-2">{title}</div>
        <div className="text-wrapper-3">{description}</div>
        <br />
        {details1 && (
          <p className="label-label-label" style={{ top: `${descriptionHeight+60}%` }}>
            <span className="span">Detalhes:</span> <span>{details1}</span>
          </p>
        )}
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
  
    // Limpa os estados de texto após a criação da tarefa
    setTitle("");
    setDescription("");
    setDetails("");
    setShowModal(false);
  };

  const handleAddControlClick = () => {
    setShowModal(true);
  };

  const handleEditTask = (taskId, content) => {
    setEditTask({
      taskId,
      title: content, // Inicializa o estado do título com o conteúdo da tarefa
      content, // Inicializa o estado do conteúdo da tarefa com o conteúdo da tarefa
    });
    setSelectedTaskId(taskId);
    const taskContent = state.tasks[taskId].content;
  
    // Verifica se a tarefa possui conteúdo
    if (taskContent) {
      const children = taskContent.props.children;
  
      // Verifica se a tarefa possui filhos e se o primeiro filho é um array
      if (children && Array.isArray(children)) {
        // Define o título como o conteúdo do primeiro filho
        setEditTitle(children[0]?.props?.children || '');
        // Verifica se o segundo filho existe e se é um array
        if (children[1] && Array.isArray(children[1]?.props?.children)) {
          // Define a descrição como o conteúdo do segundo filho
          setEditDescription(children[1].props.children);
        } else {
          setEditDescription('');
        }
        // Verifica se o terceiro filho existe e se é um array
        if (children[2] && Array.isArray(children[2]?.props?.children)) {
          const detailsChildren = children[2].props.children;
  
          // Verifica se o terceiro filho tem mais de um filho e se o segundo filho é um array
          if (detailsChildren.length > 1 && Array.isArray(detailsChildren[1]?.props?.children)) {
            // Define os detalhes 1 como o conteúdo do segundo filho do terceiro filho
            setEditDetails(detailsChildren[1].props.children);
          } else {
            setEditDetails('');
          }
          // Verifica se o terceiro filho tem mais de dois filhos e se o terceiro filho é um array
          if (detailsChildren.length > 2 && Array.isArray(detailsChildren[2]?.props?.children)) {
            // Define os detalhes 2 como o conteúdo do terceiro filho do terceiro filho
            setEditDetails2(detailsChildren[2].props.children);
          } else {
            setEditDetails2('');
          }
        } else {
          setEditDetails('');
          setEditDetails2('');
        }
      }
    }
  
    setShowEditModal(true);
  };  

  const handleUpdateTask = () => {
    const updatedTasks = {
      ...state.tasks,
      [editTask.taskId]: {
        ...state.tasks[editTask.taskId],
        content: (
          <>
            <div className="text-wrapper-2">{editTask.title}</div>
            <div className="text-wrapper-3">{editTask.content}</div>
            {editTask.details && (
              <p className="label-label-label" style={{ top: `${descriptionHeight+60}%` }}>
                <span className="span">Detalhes:</span> <span>{editTask.details}</span>
              </p>
            )}
          </>
        ),
      },
    };

    const updatedData = {
      ...state,
      tasks: updatedTasks,
    };

    setState(updatedData);
    setEditTask({
      taskId: null,
      title: "",
      content: "",
      details: "",
    });
    setShowEditModal(false);
  };

  const handleDeleteTask = () => {
    if (!selectedTaskId) return; // Verifica se há uma tarefa selecionada para exclusão
  
    // Criando uma cópia dos objetos de estado
    const updatedTasks = { ...state.tasks };
    const updatedColumns = { ...state.columns };
  
    // Removendo a tarefa da lista de tarefas
    delete updatedTasks[selectedTaskId];
  
    // Iterando sobre as colunas para remover o ID da tarefa excluída
    for (const columnId in updatedColumns) {
      updatedColumns[columnId].taskIds = updatedColumns[columnId].taskIds.filter((id) => id !== selectedTaskId);
    }
  
    // Atualizando o estado com os objetos atualizados
    setState({
      ...state,
      tasks: updatedTasks,
      columns: updatedColumns,
    });
  
    // Resetando o estado de seleção da tarefa após a exclusão
    setSelectedTaskId(null);
    setShowEditModal(false);
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
                        style={{
                          overflowY: "auto",
                        }}
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
                                    <p className="title">
                                      <div ref={descriptionRef}>
                                        {task.content}
                                      </div>
                                    </p>
                                  ) : (
                                    <>{task.content}</>
                                  )}
                                </div>
                                <div className="label-label-label" style={{ top: `${descriptionHeight+60}%` }}>
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
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Detalhes"
                value={details1}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <br />
            <div className="button-container">
              <a className="overlap-12" href="#" onClick={handleCreateTask}>
                <div className="rectangle-8">
                  <div className="button-text2">Criar Tarefa</div> 
                </div>
              </a>
              <a className="overlap-12" href="#" onClick={() => setShowModal(false)}>
                <div className="rectangle-8">
                  <div className="button-text2">Cancelar</div> 
                </div>
              </a>
            </div>
          </div>
        )}
        {showEditModal && (
          <div className="modal">
            <h2 className="text-wrapper-31">Editar Tarefa</h2>
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Título"
                value={editTask.title}
                onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Descrição"
                value={editTask.content}
                onChange={(e) => setEditTask({ ...editTask, content: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Detalhes"
                value={editTask.details}
                onChange={(e) => setEditTask({ ...editTask, details: e.target.value })}
              />
            </div>
            <br />
            <div className="button-container2">
              <a className="overlap-12" href="#" onClick={handleUpdateTask}>
                <div className="rectangle-9">
                  <div className="button-text">Atualizar Tarefa</div>
                </div>
              </a>
              <a className="overlap-12" href="#" onClick={() => handleDeleteTask(selectedTaskId)}>
                <div className="rectangle-9">
                  <div className="button-text">Excluir Tarefa</div>
                </div>
              </a>
              <a className="overlap-12" href="#" onClick={() => setShowEditModal(false)}>
                <div className="rectangle-9">
                  <div className="button-text">Cancelar</div>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
