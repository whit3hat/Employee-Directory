import React from 'react';
import API from '../src/utils/API';
import {Container} from './components/Grid';
import Search from '../src/components/Search';
import List from '../src/components/List';

function App() {
  return <Container>
            <Search />
            <List />
        </Container>;

}

export default App;
