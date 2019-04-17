import React from 'react';

import { Redirect } from 'react-router-dom';

import buildPath from 'src/utils/buildPath';

const NamedRedirect = ({ to, params = {}, ...args }) => (
  <Redirect
    to={buildPath(to, params)}
    {...args}
  />
);

export default NamedRedirect;
