import React from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const SecondsCounter = (props) => {
    return (
        <div className="clock d-flex justify-content-center align-items-center col-7 mt-3">
            <div className="logo text-light bg-dark number-square mx-2 text-center ">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="six bg-dark number-square mx-2 text-center ">{props.digitSix % 10}</div>
            <div className="five bg-dark number-square mx-2 text-center ">{props.digitFive % 10}</div>
            <div className="four bg-dark number-square mx-2 text-center ">{props.digitFour % 10}</div>
            <div className="three bg-dark number-square mx-2 text-center ">{props.digitThree % 10}</div>
            <div className="two bg-dark number-square mx-2 text-center ">{props.digitTwo % 10}</div>
            <div className="one bg-dark number-square mx-2 text-center ">{props.digitOne % 10}</div>
        </div>
    );
}

SecondsCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}