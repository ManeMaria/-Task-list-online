import React, { useState } from 'react';
import {
  Container,
  AddNewTask,
  RightSideMenu,
  HeaderDashBoard,
  MainMenu,
  MainMenuContent,
} from './styles';
import TaskList from '../components/TaskList';
import { nanoid } from 'nanoid';
// import Button from '../components/Button/index';

// eslint-disable-next-line require-jsdoc
function Dashboard({ task }) {
  const [taskList, setTaskList] = useState(task);
  const [taskName, setTaskName] = useState(' ');
  const [openMenu, setOpenMenu] = useState(false);
  const [comments, setComments] = useState(' ');
  const [id, setId] = useState(' ');

  const toggleTaskCompletedAndDelete = (id) => {
    const taskUpdatedToComplete = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    const deleteCompleteTask = taskUpdatedToComplete.filter((task) => {
      return !task.completed;
    });
    setTaskList(deleteCompleteTask);
  };

  const deleteTask = () => {
    const updateTaskList = taskList.filter((task) => task.id !== id);
    console.log(updateTaskList);
    setTaskList(updateTaskList);
    setOpenMenu(false);
  };

  const openMenuTask = (id) => {
    const menuTask = taskList.find((task) => task.id === id);
    const [obs] = menuTask.menu;
    setComments(obs.obs);
    setOpenMenu(true);
    setId(id);
  };

  const captureNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: `todo-${nanoid()}`,
      name: taskName,
      completed: false,
      menu: [{ obs: '' }],
    };
    setTaskList([newTask, ...taskList]);
    setTaskName(' ');
  };

  const captureTask = (name, id) => {
    /**
     * recebe o 'name' e 'id' parâmetros e altera o nome da tarefa.
     */
    const updateTaskList = taskList.find((task) => task.id === id);
    updateTaskList.name = name;
    const refactoredList = taskList.filter((task) => task.id !== id);
    setTaskList([...refactoredList, updateTaskList]);
  };

  return (
    <Container>
      <HeaderDashBoard>
        <h2>
          {`Você tem ${taskList.length} 
        ${taskList.length === 1 ? 'tarefa' : 'tarefas'} hoje.`}
        </h2>
      </HeaderDashBoard>
      <MainMenu>
        <MainMenuContent>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src="https://img.icons8.com/ios-filled/50/4a90e2/menu--v1.png" />
          </label>
        </MainMenuContent>
      </MainMenu>

      <AddNewTask onSubmit={captureNewTask}>
        <input
          type="text"
          placeholder="adicione uma nova tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">
          <img src="https://img.icons8.com/fluent-systems-regular/24/000000/plus-math.png" />
        </button>
        {/* decidi não deixar como button default, pois seu estilo é único na tela. */}
      </AddNewTask>

      <RightSideMenu visible={openMenu}>
        <button
          className="close-menu"
          type="button"
          /* não seu porquê o component Button não funcionou aqui */
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          fechar
        </button>
        <button className="delete-task" onClick={deleteTask} type="button">
          deletar tarefa
        </button>
        <span>
          <p>{comments}</p>
        </span>
      </RightSideMenu>

      <ul>
        {taskList.map((tk) => (
          <TaskList
            openMenu={openMenuTask}
            key={tk.id}
            id={tk.id}
            defaultChecked={tk.completed}
            name={tk.name}
            captureTask={captureTask}
            toggleTaskCompletedAndDelete={toggleTaskCompletedAndDelete}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Dashboard;
