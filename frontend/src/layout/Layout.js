import { Component } from 'react';
import Users from '../components/Users';
import NewUpdateUser from '../components/NewUpdateUser';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showNewUser: false,
      user: null
    };
  }

  componentDidMount() {
    const api = 'http://localhost:8080/api/users';
    this.getData(api)
      .then(response => response.json())
      .then(res => {
        this.setState({ users: res.data });
      });
  }

  saveUsers(data) {
    if (this.state.user) {
      const api = 'http://localhost:8080/api/users/' + this.state.user.id;

      this.putData(api, data)
        .then(response => response.json())
        .then(res => {
          const data = this.state.users;
          const index = data.findIndex(el => el.id == this.state.user.id);
          if (index !== -1) {
            data[index] = res.data;
            this.setState({ users: data, showNewUser: false });
          }
        });
    } else {
      const api = 'http://localhost:8080/api/users';

      this.postData(api, data)
        .then(response => response.json())
        .then(res => {
          const data = [...this.state.users, res.data];
          this.setState({ users: data });
          this.setState({ showNewUser: false });
        });
    }
  }

  editUser(user) {
    this.setState({ user: user, showNewUser: true });
  }

  async getData(url = '') {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer'
      // body: JSON.stringify(data)
    });
    return response; // parses JSON response into native JavaScript objects
  }
  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response; // parses JSON response into native JavaScript objects
  }
  async putData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response; // parses JSON response into native JavaScript objects
  }

  render() {
    return (
      <>
        {this.state.showNewUser && (
          <NewUpdateUser
            showNewUser={this.state.showNewUser}
            saveUsers={data => this.saveUsers(data)}
            user={this.state.user}
          />
        )}

        <Users
          users={this.state.users}
          showCreateUser={e => this.setState({ showNewUser: true })}
          editUser={user => this.editUser(user)}
        />
      </>
    );
  }
}
