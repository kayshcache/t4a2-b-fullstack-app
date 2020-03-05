import React from 'react';
import { TraineeContextConsumer } from '../../App';

const TraineeList = () => (
  <TraineeContextConsumer>
    {({ trainees, currentTrainee, updateCurrentTrainee }) => (
      <div>
	<ul className="collection with-header">
	  <li className="collection-header">
	  <h4>Trainees</h4>
	  </li>

	  {trainees.map(item => (
	    <a href="#!" className="collection-item" key={item._id}
	      onClick={updateCurrentTrainee.bind(this, item)}>{item.firstName} {item.lastName}</a>
	  ))}
	</ul>
      </div>
    )}
  </TraineeContextConsumer>
);


export default TraineeList;
