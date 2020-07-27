
import React, { lazy, Suspense } from 'react';
import { Switch, Route  } from 'react-router';


const App = lazy(() =>
  import(/* webpackChunkName: "App" */ 'containers/App')
);

const SpinWheel = lazy(() =>
import(/* webpackChunkName: "SpinWheel" */ 'containers/SpinWheelScreen')
)

const Streak = lazy(() =>
import(/* webpackChunkName: "Streak" */ 'containers/StreakScreen')
)

const Routes = React.memo(function Routes() {
  return (
    <Suspense
      fallback={
      <div>Loading...</div>
    }
    >
        <Switch>
          <Route exact path="/" component={App} />
          <Route
            exact
            path="/spinWheel"
            component ={SpinWheel}
          />
          <Route
            exact
            path="/streak"
            component ={Streak}
          />
        </Switch>
    </Suspense>
  );
});

export default Routes;
