import React from "react";

const Button = (props) => {
  const { children, color, size, className, ...rest } = props;

  return (
    <Button {...rest} size={size} color={color} className={`${className}`}>
      {children}
    </Button>
  );
};

export default Button;
