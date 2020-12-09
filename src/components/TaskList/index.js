import React from 'react';
import RegisterTask from '../RegisterTask';

import { Container } from './styles';

// eslint-disable-next-line require-jsdoc
function TaskList({ id, name, defaultChecked, captureTask, openMenu }) {
  return (
    <Container onClick={() => openMenu(id)}>
      <input type="checkbox" id={id} defaultChecked={defaultChecked} />
      <label htmlFor={id}>{name}</label>
      <RegisterTask captureTask={captureTask} id={id} />
    </Container>
  );
}

export default TaskList;
