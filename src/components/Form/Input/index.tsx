import React, { InputHTMLAttributes } from "react";
import { FaTrash } from "react-icons/fa";
import { Container, InputComponent } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  disableIcon?: boolean;
  error?: string;
  onClickIcon?: React.MouseEventHandler<SVGElement>;
}

const Input: React.FC<IInputProps> = ({
  error,
  disableIcon,
  icon,
  onClickIcon,
  ...rest
}) => {
  return (
    <Container>
      <div>
        <InputComponent {...rest} error={error || ""} />
        {icon && (
          <FaTrash
            onClick={onClickIcon}
            opacity={disableIcon ? 0.3 : 1}
            style={{ cursor: disableIcon ? "default" : "pointer" }}
          />
        )}
      </div>
      <span>{error}</span>
    </Container>
  );
};

export default Input;
