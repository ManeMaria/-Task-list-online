import React, { useState } from 'react';
import { Container, AddNewTask } from './styles';
import TaskList from '../components/TaskList';
import { nanoid } from 'nanoid';
import Button from '../components/Button';

// eslint-disable-next-line require-jsdoc
function Dashboard({ task }) {
  const [taskList, setTaskList] = useState(task);
  const [taskName, setTaskName] = useState(' ');
  const [openMenu, setOpenMenu] = useState(false);
  const [comments, setComments] = useState(' ');

  const deleteTask = (id) => {
    console.log(id);
  };

  const openMenuTask = (id) => {
    const menuTask = taskList.find((task) => task.id === id);
    const [obs] = menuTask.menu;
    setComments(obs.obs);
    setOpenMenu(true);
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
    setTaskList([updateTaskList, ...refactoredList]);
    deleteTask(id);
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <h3>
        {`Você tem ${taskList.length} 
          ${taskList.length === 1 ? 'tarefa' : 'tarefas'} hoje.`}
      </h3>
      <AddNewTask onSubmit={captureNewTask}>
        <input
          type="text"
          placeholder="adicione uma nova tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button type="submit">+</Button>
      </AddNewTask>

      {openMenu && (
        <div>
          {comments}
          <button
            /* não seu porquê o component Button não funcionou aqui */
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            fechar
          </button>
        </div>
      )}

      <ul>
        {taskList.map((tk) => (
          <TaskList
            openMenu={openMenuTask}
            key={tk.id}
            id={tk.id}
            defaultChecked={tk.completed}
            name={tk.name}
            captureTask={captureTask}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Dashboard;
