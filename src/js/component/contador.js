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
					<div className="col-1 card ml-4 bg-secondary">
						{props.digit1}
					</div>
					<div className="col-1 card ml-4 bg-secondary">
						{props.digit2}
					</div>
					<div className="col-1 card ml-4 bg-secondary">
						{props.digit3}
					</div>
					<div className="col-1 card ml-4 bg-secondary">
						{props.digit4}
					</div>
					<div className="col-1 card ml-4 bg-secondary">
						{props.digit5}
					</div>
					<div className="col-1 card ml-4 bg-secondary">
						{props.digit6}
					</div>
					<div className="col-1 card ml-4 bg-secondary">
						{props.digit7}
					</div>
				</div>
			</div>
		</div>
	);
}
Contador.propTypes = {
	digit1: PropTypes.string,
	digit2: PropTypes.string,
	digit3: PropTypes.string,
	digit4: PropTypes.string,
	digit5: PropTypes.string,
	digit6: PropTypes.string,
	digit7: PropTypes.string
};
