import React from "react";
import PropTypes from "prop-types";
import { Contador } from "./contador";

//create your first component
export function Home(props) {
	return <Contador digitoseis={props.digitoSix} />;
}
Home.propTypes = {
	digitoSix: PropTypes.integer
};
