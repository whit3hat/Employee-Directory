import React, { Component } from 'react';
import API from '../../utils/API';

class Employee extends Component {
    state = {
        firstName: '',
        lastName: ''
    };

  render(){
      return (
        <div>
            <Container style={{ minHeight: 80% }}>
                <h1 className='text-center'>Search By Employee</h1>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    firstName={this.state.firstName}
                />
                <SearchResults results={this.state.results} />
            </Container>
        </div>
      );
  }  
}

export default Search;