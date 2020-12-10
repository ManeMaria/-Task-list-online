import React from 'react';

import { ButtonDefault } from './styles';

// eslint-disable-next-line require-jsdoc
function Button({ type, children }) {
  return (
    <ButtonDefault type={type}>
      {/* o type do botão será alterado quando informado, quando não, ele terá um padrão de que é 'button' */}
      {children}
    </ButtonDefault>
  );
}

export default Button;
