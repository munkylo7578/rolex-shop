import styled from "styled-components"

export const Button = styled.button`
    position: absolute;
    opacity: 0;
    visibility: visible;
    z-index:999;
    top: 55%;
    ${
        props=>props.next ? 'right:30px' :'left:30px'
    };
    transform: translateY(50%);
    border-radius: 50%;
    padding: 3px 8px;
    font-size: 1.7rem;
    border: 2px solid #ccc;
    color:#ccc;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    :hover{
        background-color: var(--primary-color);
        color:white;
        cursor: pointer;
    }
`