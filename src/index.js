import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import Routes from './routes/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
