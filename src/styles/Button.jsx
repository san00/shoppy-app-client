import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    border-radius: 5px;
    background-color: ${props => (props.secondary ? '#ffffff' : '#c2dff7')};
    color: #110f0f;
    padding: 10px 15px;
    font-size: ${props => {
        if (props.small) return '0.8em'
        return '1em'
    }};
    outline: none;
    border: none;
    cursor: pointer;
    margin: 15px;
    border: 2px solid ${props => (props.secondary ? '#F6A072' : '#c2dff7')};
    &:hover{
        background-color:${props => (props.secondary ? '#fcc4a6' : '#a1cdf1')};
    }
    ${props => {
        return (
            props.brands &&
            css`
                background-color: #c3d3dd;
                color: #31435b;
                font-weight:600;
            `
        )
    }}
`

const Button = ({ secondary, small, children, ...props }) => {
    return (
        <StyledButton secondary={secondary} small={small} {...props}>
         {children}
        </StyledButton>
    )
}

export default Button