import React from 'react';

import { Route } from 'react-router-dom';

const buildRoutes = routes => routes.map(route => (
  <Route
    path={route.path}
    component={route.view}
    exact={route.exact}
  />
));

export default buildRoutes;
