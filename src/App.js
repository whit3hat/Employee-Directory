import React, { Component } from 'react';
import API from '../src/utils/API';
import Search from '../src/components/Search';
import List from '../src/components/List';

class Container extends Component {
  state = {
    getUsers: '',
    sortby: '',
    results: []
  };

  queryEmployees = query => {
    API.getUsers(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.searchEmployees('');
  }

  handleInputChange = event => {
    const name = event.target.id;
    if (name === 'lastname') {
      this.setState({ sortby: 'lastname' });
    }
    if (name === 'firstname') {
      this.setState({ sortby: 'firstname'});
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.queryEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <Search
          getUsers={this.state.search}
          sortby={this.state.sortby}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          />
          <result sortyby={this.state.sortby} results={this.state.results} />
      </div>
    );
  }
}

function App() {
  return <Container>
            <Search />
            <List />
        </Container>;

}

export default App;
