import React from 'react';
import { nanoid } from 'nanoid';
import DashBoard from './Dashboard/index';
import GlobalStyles from './Styles/Global';

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
      <GlobalStyles />
      <DashBoard task={DATA_TASK} />
    </>
  );
}

export default App;
