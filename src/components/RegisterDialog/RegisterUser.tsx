import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    useToast,
    Select,
  } from "@chakra-ui/react";
  import { Dispatch, SetStateAction } from 'react'
  import React, { useState } from "react";
  import api from "../../services/api";
  import Cookies from 'js-cookie';

  interface Props {
    isLoggedIn: boolean,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
  }
  
  const RegistyerDialogUser: React.FC<Props> = ({ isLoggedIn, setIsLoggedIn }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [sexo, setSexo] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    const token = Cookies.get('token');

    const handleRegister = () => {
      api
        .post("/escort/create", {
          email,
          password,
          name,
          sexo,
          city,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          setIsLoggedIn(true);
          Cookies.set('token', response.data.token);
          console.log("response", response);
        })
        .catch((error) => {
          toast({
            title: "Falha no registro",
            description: "Digite um email e senha válidos.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    };
  
    const handleRegisterSuccessToast = () => {
      toast({
        title: "Registrado(a) com sucesso!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };
  
    React.useEffect(() => {
      if (isLoggedIn) {
        onClose();
      }
    }, [isLoggedIn, onClose]);
  
    return (
      <>
        {!isLoggedIn && (
          <Button
            size={"md"}
            px={'6'}
            fontSize={'12'}
            style={{
              width: "100%",
              backgroundColor: "#e048e0",
              color: '#fff'
            }}
            onClick={onOpen}
          >
            Antes de anunciar, registre-se no site!
          </Button>
        )}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Crie sua conta</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="name"
                  ref={initialRef}
                  placeholder="Nome"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  ref={initialRef}
                  placeholder="Email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Opção</FormLabel>
                <Input
                  type="sexo"
                  placeholder="Ex: Feminino, Masculino, Casal..."
                  value={sexo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSexo(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} id="userName" isRequired>
                <Select
                placeholder="Distrito"
                value={city}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCity(e.target.value)}
                >
                  <option value="Aveiro">Aveiro</option>
                  <option value="Bragança">Bragança</option>
                  <option value="Castelo Branco">Castelo Branco</option>
                  <option value="Coimbra">Coimbra</option>
                  <option value="Évora">Évora</option>
                  <option value="Faro">Faro</option>
                  <option value="Guarda">Guarda</option>
                  <option value="Leiria">Leiria</option>
                  <option value="Braga">Braga</option>
                  <option value="Portalegre">Portalegre</option>
                  <option value="Porto">Porto</option>
                  <option value="Santarém">Santarém</option>
                  <option value="Setúbal">Setúbal</option>
                  <option value="Viana do Castelo">Viana do Castelo</option>
                  <option value="Vila Real">Vila Real</option>
                  <option value="Viseu">Viseu</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleRegister} colorScheme="pink" mr={3}>
                Registrar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default RegistyerDialogUser;