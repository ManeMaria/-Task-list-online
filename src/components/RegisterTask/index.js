import React, { useState } from 'react';
import ButtonDefault from '../Button';
import { Container } from './styles';

// eslint-disable-next-line require-jsdoc
function RegisterTask({ captureTask, id }) {
  /**
   * recebe um callback como parâmtro para registrar o nome e o id da tarefa.
   */
  const [nameTask, setNameTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    captureTask(nameTask, id);
    setNameTask('');
  };

  return (
    <Container>
      <form onSubmit={(en) => addTask(en)}>
        <input
          type="text"
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
        />
        <ButtonDefault type="submit">atualizar</ButtonDefault>
      </form>
    </Container>
  );
}

export default RegisterTask;
