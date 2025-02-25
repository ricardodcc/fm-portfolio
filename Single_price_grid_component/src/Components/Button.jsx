import PropTypes from 'prop-types';

export default function Btn({ description, Class }) {
    return <>
        <button className={Class}>{ description }</button>
    </>
}

Btn.propTypes = {
    description: PropTypes.string.isRequired,
    Class: PropTypes.string
};