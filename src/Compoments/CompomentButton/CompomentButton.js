import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';


const MButton = (props) => {

    const { children, color, disabled, size, variant, sx, href, className } = props


    return (
        <Button
            children={children}
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}
            href={href}
            className={`${className}`}
        >
        </Button>
    );
};


export default MButton;
