import React from "react";
import Content from "./Content";
import Header from "./Header";

import { Container } from "./styles";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};
