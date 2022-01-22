import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import { store } from './redux/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store} >
      <Header/>
      <Content/>
    </Provider>
  );
}

export default App;
