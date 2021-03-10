import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WebinarCall from './views/WebinarCall'
import RoomList from './views/RoomList';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route path='/' component={RoomList} exact />
          <Route path='/rooms/:id' component={WebinarCall} exact />
        </Switch>

      </AppContainer>
    </BrowserRouter>
  );
}


const AppContainer = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: ghostwhite;
`;

export default App;
