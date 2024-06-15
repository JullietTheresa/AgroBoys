import React, { useState, useRef, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./stylecontrole.css";
import perfilImagem from "../../components/Images/Interno/TerraTechIcon.png"

const initialData = {
  tasks: {},
  columns: {
    "column-1": {
      id: "column-1",
      title: "A FAZER",
      taskIds: [],
    },
    "column-2": {
      id: "column-2",
      title: "EM ANDAMENTO",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "FINALIZADO",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

async function checkAuthentication() {
  try {
    const response = await fetch('http://localhost:3000/api/VerificaFormulario', {
      method: 'GET',
    });
    if (!response.ok) {
      window.location.href = '/solo/formulario';
    } else {
      window.location.href = '/solo';
    }
  } catch (error) {
    console.error("Erro:", error);
    setTimeout(() => setBackendError(''), 4000); // Clear error message after 4 seconds
  }
}

const Tasks = () => {
  const [usuario, setUsuario] = useState(null);
  const [state, setState] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details1, setDetails] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDetails1, setEditDetails] = useState("");
  const descriptionRef = useRef(null);
  const [descriptionHeight, setDescriptionHeight] = useState(0);

  useEffect(() => {
    const pegaUsuario = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/enviaUsuario");
        if (!response.ok) {
          throw new Error("Erro ao buscar usuário");
        }
        const data = await response.json(); // Extrai os dados da resposta
        setUsuario(data[0].nomeUsuario); // Define o estado com os dados obtidos
      } catch (error) {
        console.error("Erro ao buscar usuário: ", error);
      }
    };
  
    pegaUsuario();
  }, []);

  useEffect(() => {
    // Função para carregar tarefas do backend ao iniciar a aplicação
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/controleGet');
        if (!response.ok) {
          throw new Error('Erro ao carregar tarefas do backend');
        }
        const data = await response.json();
        const loadedTasks = {};
        const loadedColumns = {
          'column-1': { ...state.columns['column-1'], taskIds: [] },
          'column-2': { ...state.columns['column-2'], taskIds: [] },
          'column-3': { ...state.columns['column-3'], taskIds: [] },
        };

        data.forEach((task) => {
          const taskId = `task-${Object.keys(loadedTasks).length + 1}`;
          loadedTasks[taskId] = { id: taskId, content: renderTaskContent(task) };
          loadedColumns['column-1'].taskIds.push(taskId);
        });

        setState({
          ...state,
          tasks: loadedTasks,
          columns: loadedColumns,
        });
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    fetchTasks();
  }, []);

  const renderTaskContent = (task) => {
    return (
      <>
        <div className="text-wrapper-2">{task.titulo}</div>
        <div className="text-wrapper-3">{task.descricao}</div>
        <br />
        {task.detalhes && (
          <p className="label-label-label" style={{ top: `${descriptionHeight + 60}%` }}>
            <span className="span">Detalhes:</span> <span>{task.detalhes}</span>
          </p>
        )}
      </>
    );
  };

  const handleCreateTask = async () => {
    const newTaskId = `task-${Object.keys(state.tasks).length + 1}`;
    
    const newTaskContent = (
      <>
        <div className="text-wrapper-2">{title}</div>
        <div className="text-wrapper-3">{description}</div>
        <br />
        {details1 && (
          <p className="label-label-label" style={{ top: `${descriptionHeight + 60}%` }}>
            <span className="span">Detalhes:</span> <span>{details1}</span>
          </p>
        )}
      </>
    );

    const newTasks = {
      ...state.tasks,
      [newTaskId]: { id: newTaskId, content: newTaskContent },
    };

    let titulo, descricao, detalhes;
    if (newTasks[newTaskId]) {
      titulo = newTasks[newTaskId].content.props.children[0].props.children;
      descricao = newTasks[newTaskId].content.props.children[1].props.children;
      detalhes = newTasks[newTaskId].content.props.children[3]?.props.children[2]?.props.children;
    } else {
      console.error("Erro: newTaskId não encontrado em newTasks");
    }

    const newColumn = {
      ...state.columns["column-1"],
      taskIds: [...state.columns["column-1"].taskIds, newTaskId],
    };

    setState({
      ...state,
      tasks: newTasks,
      columns: { ...state.columns, ["column-1"]: newColumn },
    });

    try {
      const response = await fetch('http://localhost:3000/api/controle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newTaskId, titulo, descricao, detalhes }),
      });
      if (!response.ok) {
        console.error('Erro ao salvar a nova tarefa no backend');
        const { [newTaskId]: _, ...remainingTasks } = newTasks;
        setState({ ...state, tasks: remainingTasks });
      } else {
        const result = await response.json();
        console.log('Tarefa salva com sucesso', result);
      }
    } catch (error) {
      console.error('Erro ao se comunicar com o backend:', error);
      const { [newTaskId]: _, ...remainingTasks } = newTasks;
      setState({ ...state, tasks: remainingTasks });
    }

    setTitle("");
    setDescription("");
    setDetails("");
    setShowModal(false);
  };

  const handleAddControlClick = () => {
    setShowModal(true);
  };

  const handleEditTask = (taskId) => {
    const taskContent = state.tasks[taskId].content;
    if (taskContent) {
      const children = taskContent.props.children;
      setEditTitle(children[0]?.props?.children || '');
      setEditDescription(children[1]?.props?.children || '');
      setEditDetails(children[3]?.props?.children[1]?.props?.children || ''); // Ajuste para pegar o detalhe correto
    }
  
    setSelectedTaskId(taskId);
    setShowEditModal(true);
  };  

  const handleUpdateTask = async () => {
    const updatedTask = {
      taskId: selectedTaskId,
      titulo: editTitle,
      descricao: editDescription,
      detalhes: editDetails1,
    };

    console.log('Updating Task:', updatedTask);

    try {
      const response = await fetch('http://localhost:3000/api/controle', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        console.error('Erro ao atualizar a tarefa no backend');
        return;
      }

      const data = await response.json();
      console.log('Task updated:', data);

      const updatedTasks = {
        ...state.tasks,
        [selectedTaskId]: {
          ...state.tasks[selectedTaskId],
          content: (
            <>
              <div className="text-wrapper-2">{editTitle}</div>
              <div className="text-wrapper-3">{editDescription}</div>
              {editDetails1 && (
                <p className="label-label-label" style={{ top: `${descriptionHeight + 60}%` }}>
                  <span className="span">Detalhes:</span> <span>{editDetails1}</span>
                </p>
              )}
            </>
          ),
        },
      };

      setState({
        ...state,
        tasks: updatedTasks,
      });

      setSelectedTaskId(null);
      setShowEditModal(false);
    } catch (error) {
      console.error('Erro ao se comunicar com o backend:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    console.log('Deleting Task:', taskId);

    try {
      const response = await fetch(`http://localhost:3000/api/controle/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.error('Erro ao deletar a tarefa no backend');
        return;
      }

      const data = await response.json();
      console.log('Task deleted:', data);

      const updatedTasks = { ...state.tasks };
      const updatedColumns = { ...state.columns };

      delete updatedTasks[taskId];

      for (const columnId in updatedColumns) {
        updatedColumns[columnId].taskIds = updatedColumns[columnId].taskIds.filter(id => id !== taskId);
      }

      setState({
        ...state,
        tasks: updatedTasks,
        columns: updatedColumns,
      });

      setSelectedTaskId(null);
      setShowEditModal(false);
    } catch (error) {
      console.error('Erro ao se comunicar com o backend:', error);
    }
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

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

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

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
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
            <a class="text-wrapper-10" href="#" onClick={checkAuthentication}>Dados do Solo</a>
            <a className="text-wrapper-11" href="/">TerraTech</a>
            <div className="group-2">
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
            <div className="text-wrapper-21">www.TerraTech.com</div>
            <div className="text-wrapper-22">Sobre TerraTech</div>
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
              <span className="span">TerraTech</span>
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
              <img className="text-wrapper-28" alt="FotoPerfil" src={perfilImagem} />
            </div>
            <p className="usuario-gmail-com">
              <span className="text-wrapper-29">{usuario}</span>
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
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)} // Corrigido para setEditTitle
            />
            </div>
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Descrição"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="bigger-input" 
                placeholder="Detalhes"
                value={editDetails1}
                onChange={(e) => setEditDetails(e.target.value)}
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
