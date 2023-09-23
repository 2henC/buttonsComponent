import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';


const MButton = (props) => {

    const { children, color, disabled, size, variant, href, className, onClick, leftIcon, rightIcon } = props

    // const buttonClassName = `custom-button ${className || ''}`;

    const buttonClassName = `${className || ''}`;

    // const buttonStyles = {
    //     color: {color},
    //     disabled: disabled,
    //     size: size
    // }

    return (
        <Button
            children={children}
            color={color}
            disabled = {disabled}
            size = {size}
            variant={variant}
            href={href}
            className={buttonClassName}
            onClick={onClick}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
        // buttonStyles={buttonStyles}
        >
        </Button>
    );
};

export default MButton;
