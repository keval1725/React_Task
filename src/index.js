  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  // import { Provider } from 'react-redux';
  // import rootReducer from './Services/reducers/reducer';
  // import { legacy_createStore as createStore} from 'redux'

  // const store=createStore(rootReducer);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <Provider store={store}> 
      <App/>  
    // </Provider>
  );



