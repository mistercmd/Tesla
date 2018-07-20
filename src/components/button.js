import React, { Component } from 'react';

const Button = ({ text, className }) => (
    <button className={className}>
      {text}
    </button>
  );

export default Button;