import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdPersonAdd } from "react-icons/md";
import { FaUsers, FaBars } from "react-icons/fa";
import { AsideBar, Container, Content, ContentColappse } from "./styles";

const Header: React.FC = () => {
  const { pathname, state } = useLocation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

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
      <ContentColappse>
        <FaBars onClick={handleOpen} />

        <AsideBar isopen={open}>
          <Link
            to="/"
            onClick={handleOpen}
            className={pathname === "/" ? "active" : ""}>
            <FaUsers />
            <span>Listar pessoas</span>
          </Link>

          <Link
            to="/person"
            onClick={handleOpen}
            className={pathname === "/person" ? "active" : ""}>
            <MdPersonAdd />
            <span>{state ? "Editar Pessoa" : "Cadastrar pessoa"}</span>
          </Link>
        </AsideBar>
      </ContentColappse>
    </Container>
  );
};

export default Header;
