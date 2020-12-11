import React from 'react';

import { Container, Content } from './styles';

// eslint-disable-next-line require-jsdoc
function TaskList({
  id,
  name,
  defaultChecked,
  openMenu,
  toggleTaskCompletedAndDelete,
}) {
  return (
    <Container>
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        onChange={() => toggleTaskCompletedAndDelete(id)}
      />
      <label htmlFor={id}>
        {/* <img src="https://img.icons8.com/windows/32/ffffff/checked--v1.png" />*/}
        <img src="https://img.icons8.com/metro/52/ffffff/checked-checkbox.png" />
      </label>
      <Content
        onClick={() => {
          openMenu(id);
        }}
      >
        <p>{name}</p>
      </Content>
    </Container>
  );
}

export default TaskList;
