import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick}) => {
  if(active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href='/null'
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
