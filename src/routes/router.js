import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import buildRoutes from 'src/utils/buildRoutes';

import { ROUTES } from './routes';

const Router = () => (
  <BrowserRouter>
    {buildRoutes(ROUTES)}
  </BrowserRouter>
);

export default Router;
