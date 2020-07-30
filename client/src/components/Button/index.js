import React from 'react';

import { DefaultButton } from './styles';

function Button({ props, ...rest }) {
  return <DefaultButton {...props} {...rest} />;
}

export default Button;
