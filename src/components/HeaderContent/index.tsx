import React from "react";
import { Container, Title } from "./styles";

interface IHeaderProps {
  title: string;
}

const HeaderContent: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default HeaderContent;
