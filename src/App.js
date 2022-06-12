import React from 'react';
import './App.css';
import PostF from './components/postform';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null
    }
  }
  componentDidMount() {
    fetch('https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5').then((resp) => {
      resp.json().then((result) => {
        this.setState({ users: result.data });
      });
    });

  }

  render() {
    const postDelete = (id, e) => {
      e.preventDefault();
      Axios.delete(`https://mockrestapi.herokuapp.com/api/employee/${id}`)
        .then(res => console.log('Deleted..', res)).catch(err => console.log(err))
    }
    return (
      <div className="app-container">
        <PostF />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Country</th>
              <th>Age</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users ?
                this.state.users.map((item, i) =>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.country}</td>
                    <td>{item.age}</td>
                    <th><button onClick={(e) => postDelete(item._id, e)}>Delete</button></th>
                  </tr>
                )
                :
                null
            }

          </tbody>
        </table>
      </div>
    );
  }

}
export default App;