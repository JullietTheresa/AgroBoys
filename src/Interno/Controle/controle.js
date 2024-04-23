import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./stylecontrole.css";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: 
    <><div className="text-wrapper-2">Label</div>
    <div className="text-wrapper-3">Label Label</div>
      <p className="label-label-label">
        <span className="span">Label</span>
        <span className="text-wrapper-4">
          : Label Label
          <br />
        </span>
        <span className="span">Label</span>
        <span className="text-wrapper-4">: Label Label</span>
      </p></>
   },
    "task-2": { id: "task-2", content: <><div className="text-wrapper-2">Label</div>
    <div className="text-wrapper-3">Label Label</div>
      <p className="label-label-label">
        <span className="span">Label</span>
        <span className="text-wrapper-4">
          : Label Label
          <br />
        </span>
        <span className="span">Label</span>
        <span className="text-wrapper-4">: Label Label</span>
      </p></> },
    "task-3": { id: "task-3", content: <><div className="text-wrapper-2">Label</div>
    <div className="text-wrapper-3">Label Label</div>
      <p className="label-label-label">
        <span className="span">Label</span>
        <span className="text-wrapper-4">
          : Label Label
          <br />
        </span>
        <span className="span">Label</span>
        <span className="text-wrapper-4">: Label Label</span>
      </p></> },
    "task-4": { id: "task-4", content: <><div className="text-wrapper-2">Label</div>
    <div className="text-wrapper-3">Label Label</div>
      <p className="label-label-label">
        <span className="span">Label</span>
        <span className="text-wrapper-4">
          : Label Label
          <br />
        </span>
        <span className="span">Label</span>
        <span className="text-wrapper-4">: Label Label</span>
      </p></> },
    "task-5": { id: "task-5", content: <><div className="text-wrapper-2">Label</div>
    <div className="text-wrapper-3">Label Label</div>
      <p className="label-label-label">
        <span className="span">Label</span>
        <span className="text-wrapper-4">
          : Label Label
          <br />
        </span>
        <span className="span">Label</span>
        <span className="text-wrapper-4">: Label Label</span>
      </p></> },
    "task-6": { id: "task-6", content: <><div className="text-wrapper-2">Label</div>
    <div className="text-wrapper-3">Label Label</div>
      <p className="label-label-label">
        <span className="span">Label</span>
        <span className="text-wrapper-4">
          : Label Label
          <br />
        </span>
        <span className="span">Label</span>
        <span className="text-wrapper-4">: Label Label</span>
      </p></> },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "A FAZER",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "EM ANDAMENTO",
      taskIds: ["task-4", "task-5"],
    },
    "column-3": {
      id: "column-3",
      title: "FINALIZADO",
      taskIds: ["task-6"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export const Tasks = () => {
  const [state, setState] = useState(initialData);

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
                <div className="text-wrapper">{column.title}</div>
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
                            >
                              <div className="text-wrapper-3">
                                {task.content}
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
          <div className="text-wrapper-9">Suporte</div>
          <img className="house" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
          <div className="text-wrapper-10">Dados do Solo</div>
          <a className="text-wrapper-11" href="/">AgroBoys</a>
          <div className="group-2">
            <a className="text-wrapper-12" href="/">Pragas e Agrotóxico</a>
            <img className="img" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
          </div>
          <img className="house-2" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
          <div className="rectangle-4" />
          <div className="group-3">
            <a className="text-wrapper-13" href="/regiao">Região e Estação</a>
            <img className="img" alt="House" src="https://c.animaapp.com/YUkEWowS/img/house-5@2x.png" />
          </div>
            <div className="text-wrapper-14">Plano Plantio</div>
            <div className="text-wrapper-15">Histórico Plantio</div>
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
        <div className="overlap-9">
          <div className="rectangle-7" />
          <div className="text-wrapper-26">Add Controle</div>
        </div>
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
    </div>
  );
};

export default Tasks;