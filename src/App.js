import MainScreen from "./components/MainScreen/MainScreen";
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Property from "./components/Properties/Property";

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <MainScreen />
      </Route>
      <Route path='/property'>
        <Property text={'PROPERTIES'}/>
      </Route>
      <Route path='/rooms'>
        <Property text={'ROOMS'}/>
      </Route>
      <Route path='/contract'>
        <Property text={'CONTRACT'}/>
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
