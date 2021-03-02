import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//create your first component
export function Contador(props) {
	return (
		<div className="container">
			<div className="card-header bg-dark">
				<div className="row justify-content-center text-white font-weight-bold display-1">
					<div className="col-2 card ml-4 bg-secondary text-center align-middle">
						<i className="far fa-clock"></i>
					</div>
					<div className="col-1 card ml-4 bg-secondary">0</div>
					<div className="col-1 card ml-4 bg-secondary">0</div>
					<div className="col-1 card ml-4 bg-secondary">0</div>
					<div className="col-1 card ml-4 bg-secondary">0</div>
					<div className="col-1 card ml-4 bg-secondary">0</div>
					<div className="col-1 card ml-4 bg-secondary">0</div>
					<div className="col-1 card ml-4 bg-secondary">
						{props.digitoseis}
					</div>
				</div>
			</div>
		</div>
	);
}
Contador.propTypes = {
	digitouno: PropTypes.integer,
	digitodos: PropTypes.integer,
	digitotres: PropTypes.integer,
	digitocuatro: PropTypes.integer,
	digitocinco: PropTypes.integer,
	digitoseis: PropTypes.integer
};
