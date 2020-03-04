import React from 'react';

// Need to bring in context from the single truth state in App.js
const Home = () => (
  <div className="row">
    <div className="col s3"><TraineeList trainees={this.state.trainees}
	    updateCurrentTrainee={this.updateCurrentTrainee}/></div>
    <div className="col s9"><TraineeSingle trainee={this.state.currentTrainee} /></div>
  </div>
  <div className="row">
    <div className="col s12"><TraineeForm /></div>
  </div>
);

export default Home;
