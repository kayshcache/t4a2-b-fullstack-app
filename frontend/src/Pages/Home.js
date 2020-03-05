import React from 'react';
import TraineeList from '../Components/Trainee/TraineeList';
import TraineeSingle from '../Components/Trainee/TraineeSingle';
import TraineeForm from '../Components/Trainee/TraineeForm';

// Need to bring in context from the single truth state in App.js
const Home = () => (
      <>
	<div className="row">
	  <div className="col s3"><TraineeList /></div>
	  <div className="col s9"><TraineeSingle /></div>
	</div>
	<div className="row">
	  <div className="col s12"><TraineeForm /></div>
	</div>
      </>
);

export default Home;
