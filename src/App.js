import React from 'react';
import './App.scss';
import Menu from './components/Menu/Menu';
import { useSelector, shallowEqual } from 'react-redux';

const App = () => {
  const menuItems = useSelector(state => state.menu.items, shallowEqual);

  return (
    <div className="app">
      <Menu menuItems={menuItems} />
    </div>
  )
}

export default App;