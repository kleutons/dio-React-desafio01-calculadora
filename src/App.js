import React, { useState } from 'react';
import Button from './components/Button';
import { ButtonsContent, Container, DisplayCal } from './styles';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondValue) {
      setDisplayValue(String(digit));
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondValue) {
      setDisplayValue('0.');
      setWaitingForSecondValue(false);
    } else {
      if (displayValue.indexOf('.') === -1) {
        setDisplayValue(displayValue + '.');
      }
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setWaitingForSecondValue(false);
  };

  const performOperation = (nextOperator) => {
    const nextValue = parseFloat(displayValue);

    if (firstValue === '') {
      setFirstValue(nextValue);
      setWaitingForSecondValue(true);
      setOperator(nextOperator);
    } else {
      const result = calculate(firstValue, nextValue, operator);

      setDisplayValue(String(result));
      setFirstValue(result);
      setWaitingForSecondValue(true);
      setOperator(nextOperator);
    }
  };

  const handleBackspace = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  function handleToAlterSing(){
    setDisplayValue((prevValue) => (parseFloat(prevValue) * -1).toString());
  }
  

  const calculate = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  return (
    <Container>
      <DisplayCal>{displayValue}</DisplayCal>
      <ButtonsContent>

        <Button label='+/-'     onClick={handleToAlterSing}/>
        <Button label='AC'      onClick={clearDisplay}/>
        <Button label='<'       onClick={handleBackspace}/>
        <Button label='/'       onClick={() => performOperation('/')} className="operator-button"/>

        <Button label='7'     onClick={() => inputDigit(7)}/>
        <Button label='8'     onClick={() => inputDigit(8)}/>
        <Button label='9'     onClick={() => inputDigit(9)}/>
        <Button label='*'     onClick={() => performOperation('*')} className="operator-button"/>


        <Button label='4'     onClick={() => inputDigit(4)}/>
        <Button label='5'     onClick={() => inputDigit(5)}/>
        <Button label='6'     onClick={() => inputDigit(6)}/>
        <Button label='-'     onClick={() => performOperation('-')} className="operator-button"/>

        <Button label='1'     onClick={() => inputDigit(1)}/>
        <Button label='2'     onClick={() => inputDigit(2)}/>
        <Button label='3'     onClick={() => inputDigit(3)}/>
        <Button label='+'     onClick={() => performOperation('+')} className="operator-button"/>

        <Button label='0'     onClick={() => inputDigit(0)}/>
        <Button label='.'     onClick={() => inputDecimal()}/>
        <Button label='='       onClick={() => performOperation('=')} className="equal-button operator-button"/>

      </ButtonsContent>
      
    </Container>
  );
}

export default App;