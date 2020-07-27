import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import Route from 'route';
import { store, history } from './store';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';


// eslint-disable-next-line react/prefer-stateless-function
class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyles />
              <Route />
            </>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
