
import { ButtonContainer } from './styles';

export default function Button ({label, onClick, className}) {
    return (
      <ButtonContainer onClick={onClick} type="button" className={className || ''}>
       {label}
      </ButtonContainer>
    );
}