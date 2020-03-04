import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import TraineeList from './Components/Trainee/TraineeList';
import TraineeSingle from './Components/Trainee/TraineeSingle';
import TraineeForm from './Components/Trainee/TraineeForm';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

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
	    <Router>
	      <div className="container-fluid">
	        <NavBar />
		<div className="row">
			  <div className="col s3"><TraineeList trainees={this.state.trainees}
				  updateCurrentTrainee={this.updateCurrentTrainee}/></div>
			  <div className="col s9"><TraineeSingle trainee={this.state.currentTrainee} /></div>
		</div>
		<div className="row">
		  <div className="col s12"><TraineeForm /></div>
		</div>
	        <Footer />
	      </div>
	    </Router>
	  );
	}
}

export default App;

