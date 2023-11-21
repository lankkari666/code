import styles from "./square.module.css";
import PropTypes from "prop-types";


export const Square = ({value, onSquareClick}) => {

    return (
        <>
            <button
                className={styles.square}
                onClick={onSquareClick}
            >
                {value}
            </button>
        </>
    )
}

Square.propTypes = {
    value: PropTypes.string,
    onSquareClick: PropTypes.func,
}
export default Square