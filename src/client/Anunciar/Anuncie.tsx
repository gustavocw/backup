import "./style/anuncie.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import api from "../../services/api";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Center,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import RegisterDialogUser from "../../components/RegisterDialog/RegisterUser";
import LoginDialogUser from "../../components/LoginDialog/LoginUser";
import Cookies from "js-cookie";

export default function AnunciePage(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");
  const [eyes, setEyes] = useState("");
  const [tatoo, setTatoo] = useState("");
  const [piercing, setPiercing] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [obsScheduling, setObsScheduling] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    api
      .post(
        "/description/create",
        {
          price,
          description,
          contact,
          type,
          eyes,
          tatoo,
          piercing,
          weight,
          age,
          height,
          obsScheduling,
        },
        {}
      )
      .then((response) => {
        const token = response.data.token;
        if (token) {
          Cookies.set("token", token, { expires: 1 });
        } else {
          toast({
            title: "Falha no registro",
            description: "Digite um email e senha válidos.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
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

  const [image, setImage] = useState<File | undefined>(undefined);
  const token = Cookies.get('token');

  function handle_image() {
    if (!image) {
      toast({
        title: "Nenhuma imagem selecionada",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const data = new FormData();
    data.append("file", image);
    api
      .post(`/upload/images`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          console.log('AEEEEEEEEEEE')
        } else {
          console.log('PORRA Q KRL')
        }
      })
      .catch((e) => {
        console.log("Erro! -> ", e);
      });
  }

  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="anuncio">
          <Flex className="all-cards" bg="white">
            <Stack
              className="all"
              spacing={6}
              maxW={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              p="12"
            >
              <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                Preencha com suas características
              </Heading>
              <FormControl id="userName">
                <Stack direction={["column"]} spacing={6}>
                  <Center>
                    <img src="s" alt="imagem" />
                  </Center>
                  <Center>
                    <Input
                      onChange={(e) => setImage(e.target.files?.[0])}
                      type="file"
                      name=""
                      id=""
                    />
                  </Center>
                  <Center>
                    <Button onClick={handle_image}>Enviar imagens</Button>
                  </Center>
                </Stack>
              </FormControl>
            </Stack>
            <Stack
              className="all"
              spacing={6}
              maxW={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              p="12"
            >
              <FormLabel>Fale um pouco de sí (*)</FormLabel>
              <Center>
                <Textarea
                  value={description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setDescription(e.target.value)
                  }
                />
              </Center>
              <FormControl id="idade" isRequired>
                <FormLabel>Idade</FormLabel>
                <Input
                  placeholder="19, 25..."
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                  value={age}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAge(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="userName" isRequired>
                <FormLabel>Preço</FormLabel>
                <Input
                  placeholder="Ex:€100"
                  _placeholder={{ color: "gray.500" }}
                  type="number"
                  value={price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPrice(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contacto</FormLabel>
                <Input
                  placeholder="Contacto"
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                  value={contact}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setContact(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="userName" isRequired>
                <FormLabel>Tipo</FormLabel>
                <Input
                  placeholder="Loira, Morena..."
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  value={type}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setType(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="olhos" isRequired>
                <FormLabel>Olhos</FormLabel>
                <Input
                  placeholder="Azuis, Castanhos..."
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  value={eyes}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEyes(e.target.value)
                  }
                />
              </FormControl>
            </Stack>
            <Stack
              className="all"
              spacing={6}
              maxW={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              p="12"
            >
              <FormControl id="tatoo" isRequired>
                <FormLabel>Qtd. Tatuagens</FormLabel>
                <Input
                  placeholder="0, 1, 2..."
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                  value={tatoo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTatoo(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="manequim" isRequired>
                <FormLabel>Qtd. Piercings</FormLabel>
                <Input
                  placeholder="0, 1, 2..."
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                  value={piercing}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPiercing(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="altura" isRequired>
                <FormLabel>Altura</FormLabel>
                <Input
                  placeholder="1,65..."
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                  value={height}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setHeight(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="peso" isRequired>
                <FormLabel>Peso</FormLabel>
                <Input
                  placeholder="58, 60kg..."
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                  value={weight}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setWeight(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="peso" isRequired>
                <FormLabel>Informe Horário e Local em que atende</FormLabel>
                <Input
                  placeholder="Ex: Ap 123, somente a noite..."
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                  value={obsScheduling}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setObsScheduling(e.target.value)
                  }
                />
              </FormControl>
              <RegisterDialogUser
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
              <LoginDialogUser
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
              <Stack spacing={6} direction={["column", "row"]}>
                {isLoggedIn && (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isLoggedIn}
                    bg={"pink.400"}
                    color={"white"}
                    w="full"
                    _hover={{
                      bg: "pink.500",
                    }}
                  >
                    Concluir
                  </Button>
                )}
              </Stack>
            </Stack>
          </Flex>
        </div>
      </div>
      <Footer />
    </div>
  );
}
