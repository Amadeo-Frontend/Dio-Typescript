
import { StyledButton } from "../../pages/Login/styles";
type ButtonProps = {
  title: string;
  disabled: boolean;
  isValid: boolean;
  onClick: () => void;
 };
 
 const Button: React.FC<ButtonProps> = ({ title, disabled, onClick, isValid }) => {
  return <StyledButton isValid={isValid} title={title} disabled={disabled} onClick={onClick}>Enviar</StyledButton>;
 };

export default Button;
