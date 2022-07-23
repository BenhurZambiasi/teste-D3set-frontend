import React, { useEffect, useState } from "react";
import { DeletePerson, getAllPersons } from "../../services/user";
import { Container, Content } from "./styles";
import HeaderContent from "../../components/HeaderContent";
import Table from "../../components/Table";
import { formateDate } from "../../utils/formateDataString";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { useNavigate } from "react-router-dom";

type TPersons = {
  id: string;
  name: string;
  data_nascimento: string;
  pessoa_telefone: string[];
};

export const Home: React.FC = () => {
  const navigation = useNavigate();
  const [persons, setPersons] = useState<TPersons[]>([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filter, setFilter] = useState(false);

  const headerTable = [
    {
      name: "name",
      label: "Nome",
    },
    {
      name: "data_nascimento",
      label: "Data de Nascimento",
      format: formateDate,
    },
  ];

  const getPersons = async () => {
    await getAllPersons()
      .then((resp) => {
        const { data } = resp;
        setPersons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPersons();
  }, []);

  const filterdPersons = persons.filter((person) => {
    const name =
      !inputSearch ||
      person.name.toLowerCase().includes(inputSearch.toLowerCase());
    const fil = !filter || person.pessoa_telefone.length >= 2;
    return name && fil;
  });

  const handleDelete = async (id: string) => {
    await DeletePerson(id)
      .then((resp) => {
        getPersons();
      })
      .catch((err) => {});
  };

  const handleEdit = (id: string) => {
    navigation("/person", { state: id });
  };

  return (
    <Container>
      <HeaderContent title="Lista de Pessoas" />
      <Content>
        <div className="header-actions">
          <Input
            type="text"
            placeholder="Pesquise pelo nome"
            value={inputSearch}
            onChange={({ target: { value } }) => setInputSearch(value)}
          />
          <div className="actions-list">
            <Button onClick={() => setFilter(!filter)}>
              {filter ? "Cancelar" : "Filtrar"}
            </Button>
          </div>
        </div>
        <Table
          headerTable={headerTable}
          options={filterdPersons}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </Content>
    </Container>
  );
};
