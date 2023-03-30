import "./style/home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import api from "../../services/api";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Accompanhante {
  id: number;
  isOnline: boolean;
  urlPhoto: string;
  age: string;
  name: string;
}

const HomePage = () => {
  const navigate = useNavigate()
  const [acompanhantes, setAcompanhantes] = useState<Accompanhante[]>([]);

  useEffect(() => {
    async function fetchAcompanhantes() {
      try {
        const response = await api.get("/");
        setAcompanhantes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAcompanhantes();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="card-content">
          <div className="titulo">
            <h1 className="apresentacao">Acompanhantes de Luxo em destaque</h1>
          </div>
          <div className="card">
            {acompanhantes.map((acompanhante) => (
              <Flex key={acompanhante.id} className="anuncio" w="full">
                <Link
                  onClick={() => navigate(`/detalhes/${acompanhante.id}`)}
                  href="/detalhes"
                  className="anunciante"
                  bg={useColorModeValue("gray.200", "gray.800")}
                  maxW="sm"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                  position="relative"
                >
                  {acompanhante.isOnline && (
                    <>
                      <Text style={{ margin: "0 0 0 20px" }}>Online</Text>
                      <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        left={2}
                        bg="green.400"
                      />
                    </>
                  )}
                  <Image
                    src={acompanhante.urlPhoto}
                    alt={"acompanhante"}
                    roundedTop="lg"
                  />

                  <Box p="6">
                    <Box display={"flex"} alignItems="baseline">
                        <Badge
                          rounded="full"
                          px="2"
                          fontSize="0.8em"
                          colorScheme="red"
                        >
                          {acompanhante.name}
                        </Badge>
                    </Box>
                    <Flex
                      mt="1"
                      justifyContent="space-between"
                      alignContent="center"
                    >
                      <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        {acompanhante.age}
                      </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="2xl"
                        color={useColorModeValue("gray.800", "white")}
                      ></Box>
                    </Flex>
                  </Box>
                </Link>
              </Flex>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
