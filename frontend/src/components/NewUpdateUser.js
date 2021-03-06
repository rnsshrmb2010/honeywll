import React from 'react';

export default class NewUpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  componentDidMount() {
    if (this.props.user) {
      const { firstName, lastName, email } = this.props.user;
      console.log(firstName, lastName, email);
      this.setState({ firstName, lastName, email });
    }
  }

  saveUser() {
    this.props.saveUsers(this.state);
  }

  render() {
    if (!this.props.showNewUser) {
      return null;
    }

    return (
      <div>
        <h1>Create or Update User</h1>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="email"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="Enter first name"
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Name Name</label>
          <input
            type="email"
            className="form-control"
            id="lastName"
            placeholder="Enter last name"
            value={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email Id"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => this.saveUser()}
        >
          Submit
        </button>
      </div>
    );
  }
}
