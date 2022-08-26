import './App.css';
import { Cartwidget } from './components/Cartwidget/Cartwidget';
import Navbar from './components/Navbar';
import {Contador} from './components/Contador/Contador.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemList } from './ItemList/ItemList';



function App() {
  const onAdd = (contador) => {}
  return (
    <div className="App">
      <Navbar/>
      <Contador stock={5} inicial={1} onAdd={onAdd}/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
