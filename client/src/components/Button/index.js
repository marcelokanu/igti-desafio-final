import React from 'react';

import { DefaultButton } from './styles';

function Button({ color, props, ...rest }) {
  return <DefaultButton color={color} {...props} {...rest} />;
}

export default Button;
