import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from 'src/view/shared/routes/PublicRoute';
import routes from 'src/view/routes';
import CustomLoadable from 'src/view/shared/CustomLoadable';

function RoutesComponent(props) {
  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
