import React from 'react';

import { Link } from 'react-router-dom';

import buildPath from 'src/utils/buildPath';

const NamedLink = ({ to, params = {}, ...args }) => (
  <Link
    to={buildPath(to, params)}
    {...args}
  />
);

export default NamedLink;
