import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdPersonAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Container, Content } from "./styles";

const Header: React.FC = () => {
  const { pathname, state } = useLocation();

  return (
    <Container>
      <Content>
        <Link to="/" className={pathname === "/" ? "active" : ""}>
          <FaUsers />
          <span>Listar pessoas</span>
        </Link>
        <Link to="/person" className={pathname === "/person" ? "active" : ""}>
          <MdPersonAdd />
          <span>{state ? "Editar Pessoa" : "Cadastrar pessoa"}</span>
        </Link>
      </Content>
    </Container>
  );
};

export default Header;
