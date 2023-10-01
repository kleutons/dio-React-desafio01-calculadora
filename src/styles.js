import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: right;
    font-family: Arial, sans-serif;
`
export const DisplayCal = styled.div`
    font-size: 24px;
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const ButtonsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`