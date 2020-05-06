import React, { Component } from 'react';
import API from '../../utils/API';

function List(props) {
    const info = (props.sortby === 'lastname') ? 'first' : 'last';
      return (
        <div className='table-responsive'>
            <table className='table'>
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Work Phone</th>
                        <th>Cellphone</th>
                        <th>Email</th>
                    </tr>
                </thread>
                <tbody>
                    {props.results.sort((a,b) => a.name[info] > b.name[info] ? 1 : -1).map(result => (
                        <tr key={result.id.value}>
                            <td><span>{`${result.name.last} ${result.name.first}`}</span></td>
                            <td><span>{result.phone}</span></td>
                            <td><span>{result.cell}</span></td>
                            <td><span>{result.email}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
      );
  }  


export default List;