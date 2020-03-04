import React from 'react';

const TraineeSingle = (props) => {
	return ( 
          <div className="row">
	    <div className="col s12 m7">
	      <div className="card">
		<div className="card-image">
		  <img alt="profile pic" src="pic.jpg" />
		  <span className="card-title">{props.trainee.firstName}</span>
		</div>
		<div className="card-content">
		  <p>Phone: {props.trainee.phone}</p>
		</div>
		<div className="card-action">
		  <a href="#!">This is a link</a>
		</div>
	      </div>
	    </div>
	  </div>
        );
	}

export default TraineeSingle;
