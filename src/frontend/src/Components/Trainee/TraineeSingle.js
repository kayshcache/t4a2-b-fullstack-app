import React from 'react';
import { TraineeContextConsumer } from '../../App';

const TraineeSingle = () => ( 
  <TraineeContextConsumer>
    {({ currentTrainee: trainee }) => (
      <div className="row">
	<div className="col s12 m7">
	  <div className="card">
	    <div className="card-image">
	      <img alt="profile pic" src="pic.jpg" />
	      <span className="card-title">{trainee.firstName}</span>
	    </div>
	    <div className="card-content">
	      <p>{trainee.hasCompleted ? "Training complete" : "Training incomplete"}</p>
	      <p>Phone: {trainee.phone}</p>
	    </div>
	    <div className="card-action">
	      <a href="#!">This is a link</a>
	    </div>
	  </div>
	</div>
      </div>
    )}
  </TraineeContextConsumer>
);
	

export default TraineeSingle;
