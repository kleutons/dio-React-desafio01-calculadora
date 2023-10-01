import styled from 'styled-components';

export const ButtonContainer = styled.button`
    font-size: 18px;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;
    
    &:hover {
        background-color: #ddd;
        transform: scale(1.1);
    }
    &:active {
        background-color: #ccc;
    }
    
    &.operator-button {
        background-color: #ff9800;
        color: white;
    }
    
    &.operator-button:hover {
        background-color: #f57c00;
    }
    
    &.equal-button {
        grid-column: span 2;
    }
`