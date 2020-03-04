import React from 'react';
import axios from 'axios';
import './App.css';
import TraineeList from './Trainee/TraineeList';
import TraineeSingle from './Trainee/TraineeSingle';
import TraineeForm from './Trainee/TraineeForm';
import Footer from './Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			trainees: [],
			currentTrainee: {},
		}

		this.updateCurrentTrainee = this.updateCurrentTrainee.bind(this);
	}

	componentDidMount() {
		axios.get('/trainees')
			.then(Response => {
				this.setState({
					trainees: Response.data
				})
			})
			.catch(err => console.log(err));
	}

	updateCurrentTrainee(item) {
		this.setState({
			currentTrainee: item,
		});
	}


	render() {
	  return (
	    <div className="container-fluid">
		  <div className="row">
		  <nav>
		    <div className="nav-wrapper indigo darken-4">
		      <a href="#!" className="brand-logo">Training Management</a>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
			<li><a href="#!">Nav Link 1</a></li>
			<li><a href="#!">Nav Link 2</a></li>
			<li><a href="#!">Nav Link 3</a></li>
		      </ul>
		    </div>
		  </nav>
		  </div>
		  <div className="row">
			<div className="col s3"><TraineeList trainees={this.state.trainees}
		  		updateCurrentTrainee={this.updateCurrentTrainee}/></div>
			<div className="col s9"><TraineeSingle trainee={this.state.currentTrainee} /></div>
		  </div>
		  <div className="row">
			<div className="col s12"><TraineeForm /></div>
		  </div>

		  {/* Comments in the JSX are done like this! See footer
			  TODO: Move into footer component */}
		  <Footer />
	    </div>
	  );
	}
}

export default App;

