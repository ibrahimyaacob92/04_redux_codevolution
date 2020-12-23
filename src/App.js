import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <ItemContainer cake/>
        <ItemContainer />
        <p>Classical Approach</p>
        <CakeContainer/>
        <IceCreamContainer/>
        <hr/>
        <p>With Hooks !</p>
        <HooksCakeContainer/>
        <hr/>
        <p>With Argument</p>
        <NewCakeContainer/>
      </div>
      </Provider>
  );
}

export default App;
