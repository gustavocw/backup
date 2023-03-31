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
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import React, { useState } from "react";
import api from "../../services/api";
import Cookies from "js-cookie";

interface Props {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const LoginDialogUser: React.FC<Props> = ({ isLoggedIn, setIsLoggedIn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleLogin = () => {
    api
      .post("/escort/login", {
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          setIsLoggedIn(true);
          Cookies.set("token", token, { expires: 1 });
          onClose();
          handleLoginSuccessToast();
        } else {
          handleLoginFailToast("Usuário não encontrado.");
        }
      })
      .catch((error) => {
        handleLoginFailToast("Email ou senha incorretos.");
      });
  };

  const handleLoginSuccessToast = () => {
    toast({
      title: "Login realizado com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLoginFailToast = (message: string) => {
    toast({
      title: "Falha no login",
      description: message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      {!isLoggedIn && (
        <Button
          size={"md"}
          px={"6"}
          fontSize={"12"}
          style={{
            width: "100%",
            backgroundColor: "#e048e0",
            color: "#fff",
          }}
          onClick={onOpen}
        >
          Já possui conta ? Entre!
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
          <ModalHeader>Entre na sua conta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                ref={initialRef}
                placeholder="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </FormControl>
          </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleLogin} colorScheme="pink" mr={3}>
                Entrar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default LoginDialogUser;