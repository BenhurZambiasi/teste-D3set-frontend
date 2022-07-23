import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import HeaderContent from "../../components/HeaderContent";
import {
  createPerson,
  getPersonById,
  TPayloadPerson,
  updatePersonById,
} from "../../services/user";
import { mascaraTelefone } from "../../utils/mask";

import {
  Container,
  Content,
  ContainerInfoPerson,
  ContainerPhone,
  ContainerAddPhone,
  ContainerActions,
} from "./styles";

export const Person: React.FC = () => {
  const navigation = useNavigate();
  const { state } = useLocation();

  const [numbersPhone, setNumbersPhone] = useState([""]);

  const [name, setName] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");

  const [errosInfo, setErrosInfo] = useState({
    name: "",
    data_nascimento: "",
  });

  const [errorsPhone, setErrorsPhone] = useState<(string | undefined)[]>([]);

  const handleAddNewPhone = () => {
    let aux = [...numbersPhone];
    aux.push("");
    setNumbersPhone(aux);
  };

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const [, index] = name.split("-");
    let aux = [...numbersPhone];
    aux[Number(index)] = mascaraTelefone(value);
    setNumbersPhone(aux);
  };

  const handleDeleteNumberPhone = (index: number) => {
    let aux = [...numbersPhone];
    aux.splice(index, 1);
    setNumbersPhone(aux);
  };

  const validatePhones = () => {
    return numbersPhone
      .map((number, index) => {
        if (!number || number.length < 14) return String(index);
        return "";
      })
      .filter((el) => el !== "");
  };

  const validate = () => {
    let flagError = 0;
    const hasPhone = validatePhones();

    let errors = {
      name: "",
      data_nascimento: "",
    };
    if (!name) {
      flagError += 1;
      errors.name = "Nome é obrigatório";
    }
    if (!data_nascimento) {
      flagError += 1;
      errors.data_nascimento = "Data de nascimento é obrigatório";
    }

    if (hasPhone.length > 0) {
      setErrorsPhone(hasPhone);
      flagError += 1;
    }
    setErrosInfo(errors);
    if (flagError <= 0) {
      handlerequest();
    }
  };

  const handlerequest = async () => {
    const payload: TPayloadPerson = {
      name: name,
      data_nascimento: new Date(data_nascimento).toISOString(),
      numbers: numbersPhone,
    };
    if (state) {
      await updatePersonById(String(state), payload)
        .then((resp) => {
          if (resp.status === 204) navigation("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await createPerson(payload)
        .then((resp) => {
          if (resp.status === 201) navigation("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setErrosInfo({ ...errosInfo, [name]: "" });
  };

  const handleFocusPhone = (index: number) => {
    let aux = [...errorsPhone];
    let find = aux.findIndex((el) => el === String(index));
    if (find >= 0) {
      aux.splice(find, 1);
    }
    setErrorsPhone(aux);
  };

  useEffect(() => {
    if (state) {
      getPersonById(String(state))
        .then((resp) => {
          const { data } = resp;
          setName(data.name);
          setData_nascimento(data.data_nascimento.split("T")[0]);
          let aux: string[] = [];
          data.pessoa_telefone.forEach(({ numero_telefone }: any) => {
            aux.push(mascaraTelefone(numero_telefone));
          });
          setNumbersPhone(aux);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setName("");
      setData_nascimento("");
      setNumbersPhone([""]);
    }
  }, [state]);

  return (
    <Container>
      <HeaderContent
        title={state ? `Alterar dados de Pessoa` : "Cadastrar nova Pessoa"}
      />
      <Content>
        <ContainerInfoPerson>
          <Input
            value={name}
            name="name"
            placeholder="Nome"
            error={errosInfo.name}
            onChange={({ target: { value } }) => setName(value)}
            onFocus={handleFocus}
          />
          <Input
            placeholder="Data de nascimento"
            type="date"
            name="data_nascimento"
            value={data_nascimento}
            error={errosInfo.data_nascimento}
            onChange={({ target: { value } }) => setData_nascimento(value)}
            onFocus={handleFocus}
          />
        </ContainerInfoPerson>
        <ContainerAddPhone>
          <Button onClick={handleAddNewPhone}>
            <FaPlus size={12} />
            Novo telefone
          </Button>
        </ContainerAddPhone>

        <ContainerPhone>
          {numbersPhone.map((number, index) => {
            return (
              <div>
                <Input
                  maxLength={15}
                  placeholder="Número do telefone"
                  value={number}
                  error={
                    errorsPhone.includes(String(index))
                      ? "telefone inválido"
                      : ""
                  }
                  name={`value-${index}`}
                  icon
                  onChange={handleChangePhone}
                  disableIcon={numbersPhone.length === 1 ? true : false}
                  onClickIcon={() =>
                    numbersPhone.length > 1 && handleDeleteNumberPhone(index)
                  }
                  onFocus={() => handleFocusPhone(index)}
                />
              </div>
            );
          })}
        </ContainerPhone>
        <ContainerActions>
          <Button onClick={() => navigation("/")}>
            <IoArrowUndoSharp size={16} />
            Voltar
          </Button>
          <Button onClick={validate}>
            <FaPlus size={12} />
            Salvar
          </Button>
        </ContainerActions>
      </Content>
    </Container>
  );
};
