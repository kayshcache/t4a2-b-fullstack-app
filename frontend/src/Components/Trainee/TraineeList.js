import React from 'react';

const TraineeList = (props) => {
	return (
	<div>
		<ul className="collection with-header">
			<li className="collection-header">
				<h4>Trainees</h4>
			</li>
			{props.trainees.map(item => (
				<a href="#!" className="collection-item" key={item._id}
				onClick={props.updateCurrentTrainee.bind(this,item)}>{item.firstName} {item.lastName}</a>
			))}
		</ul>
	</div>
	);
}

export default TraineeList;
