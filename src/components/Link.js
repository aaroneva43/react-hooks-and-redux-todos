import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onLinkClick }) => (
  <button
    onClick={onLinkClick}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

export default Link;
