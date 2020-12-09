import React from 'react';
import DashBoard from './Dashboard/index';
import { nanoid } from 'nanoid';

const DATA_TASK = [
  {
    id: `todo-${nanoid()}`,
    name: 'dormir',
    completed: false,
    menu: [{ obs: 'cesar' }],
  },
  {
    id: `todo-${nanoid()}`,
    name: 'estudar',
    completed: false,
    menu: [{ obs: '' }],
  },
  {
    id: `todo-${nanoid()}`,
    name: 'jantar',
    completed: false,
    menu: [{ obs: '' }],
  },
];
// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <>
      <DashBoard task={DATA_TASK} />
    </>
  );
}

export default App;
