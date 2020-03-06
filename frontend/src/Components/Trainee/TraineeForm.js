import React from 'react';
import axios from 'axios';

export default class TraineeForm extends React.Component {
  submitTrainee(event) {
    event.preventDefault();

    axios.post('/trainees', {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
    })
      .then(res => console.dir(res))
      .catch(err => console.warn(err));
  }
  render() {
    return(
      <div className="row">
	<h3 className="center">Add a new trainee</h3>
	<form className="col s12" onSubmit={this.submitTrainee.bind(this)}>
	  <div className="row"> {/* Form row 1 */}
	    <div className="input-field col s6">
	      <input id="firstName" ref="firstName" type="text" />
	      <label htmlFor="firstName">First Name</label>
	    </div>
	    <div className="input-field col s6">
	      <input id="lastName" ref="lastName" type="text" />
	      <label htmlFor="lastName">Last Name</label>
	    </div>
	  </div>

	  <div className="row"> {/* Form row 2 */}
	    <div className="input-field col s6">
	      <input id="email" ref="email" type="text" />
	      <label htmlFor="email">Email</label>
	    </div>
	    <div className="input-field col s6">
	      <input id="phone" ref="phone" type="text" />
	      <label htmlFor="phone">Phone Number</label>
	    </div>
	  </div>
	  <button className="btn waves-effect waves-light" type="submit" name="action">Add Trainee</button>
	</form>
      </div>
    );
  }
}

