import React from "react";
import PropTypes from "prop-types";
import { Contador } from "./contador";

//create your first component

export function Home(props) {
	return (
		<Contador
			digit1={props.num1}
			digit2={props.num2}
			digit3={props.num3}
			digit4={props.num4}
			digit5={props.num5}
			digit6={props.num6}
			digit7={props.num7}
		/>
	);
}

Home.propTypes = {
	num1: PropTypes.string,
	num2: PropTypes.string,
	num3: PropTypes.string,
	num4: PropTypes.string,
	num5: PropTypes.string,
	num6: PropTypes.string,
	num7: PropTypes.string
};
