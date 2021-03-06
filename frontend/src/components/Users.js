import { Component } from 'react';
export default class Users extends Component {
  render() {
    const items = this.props.users.map(e => {
      return (
        <tr key={e.id}>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.email}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={ee => this.props.editUser(e)}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <p>
          List of users
          <button
            className="btn btn-sm btn-primary"
            onClick={() => this.props.showCreateUser()}
          >
            {' '}
            Add User
          </button>
        </p>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </table>
        </div>
      </>
    );
  }
}
