import React from 'react';
import PropTypes from 'prop-types';

const Letter = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.width}px`}
      height={`${props.height}px`}
      viewBox={props.viewBox}
    >
    <path
      style={styles.path}
      d={props.letter}
    ></path>
    </svg>
  );
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};

Letter.defaultProps = {
  width: 16,
  height: 16,
};

export default Letter;
