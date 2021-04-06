import React from 'react';
import Header from './components/Header';
import routes from './config/routes';



function App() {
  return (
    <div className="container">
      <h1>To Do</h1>
      <Header />
      { routes }
    </div>
  );
}

export default App;
