import "./dtls.css"
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  useBreakpointValue,
  List,
  ListItem,
  IconButton,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import api from "../../../services/api";
import { useParams } from "react-router-dom";
import React from "react";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type Companion = {
  id: string;
  name: string;
  price: string;
  description: string;
  images: string[];
  contact: string;
  type: string;
  eyeColor: string;
  tattoos: number;
  piercings: number;
  height: string;
  weight: string;
  age: number;
  scheduleAndLocation: string;
};

export default function DetailsUser() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const { id } = useParams();

  const [companion, setCompanion] = React.useState<Companion | null>(null);
  React.useEffect(() => {
    if (id) {
      api.get(`/companions/${id}`).then((response) => {
        setCompanion(response.data);
      });
    }
  }, [id]);

  if (!companion) {
    return (
      <div className="spinner" >
        <Spinner
          style={{ margin: 'auto' }}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="pink.500"
          size="xl"
        />
      </div>
    );
  }

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box
            position={"relative"}
            height={"650px"}
            width={"full"}
            overflow={"hidden"}
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              color="#fff"
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              color="#fff"
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
              {companion.images.map((image, index) => (
                <Box
                  key={index}
                  height={"1xl"}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${image})`}
                >
                  {/* This is the block you need to change, to customize the caption */}
                  <Container
                    size="container.lg"
                    height="500px"
                    position="relative"
                  >
                    <Stack
                      spacing={6}
                      w={"full"}
                      maxW={"lg"}
                      position="absolute"
                      top="70%"
                      transform="translate(0, -50%)"
                    ></Stack>
                  </Container>
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              color="#fff"
            >
              {companion.name}
            </Heading>
            <Text color="#fff" fontWeight={300} fontSize={"2xl"}>
              {companion.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("white.200", "white.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color="#fff" fontSize={"2xl"} fontWeight={"300"}>
                {companion.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("pink.500", "pink.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
                style={{ display: "flex", justifyContent: "center" }}
              >
                Detalhes
              </Text>

              <List
                spacing={2}
                style={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <div className="list">
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Contacto:
                    </Text>{" "}
                    {companion.contact}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Tipo:
                    </Text>{" "}
                    {companion.type}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Olhos:
                    </Text>{" "}
                    {companion.eyeColor}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Qtd. tatuagens:
                    </Text>{" "}
                    {companion.tattoos}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Qtd. Piercings:
                    </Text>{" "}
                    {companion.piercings}
                  </ListItem>
                </div>
                <div className="list">
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Altura:
                    </Text>{" "}
                    {companion.height}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Peso:
                    </Text>{" "}
                    {companion.weight}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Idade:
                    </Text>{" "}
                    {companion.age}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Horario e Local:
                    </Text>{" "}
                    {companion.scheduleAndLocation}
                  </ListItem>
                </div>
              </List>
            </Box>
          </Stack>

          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("whiteAlpha.900", "whiteAlpha.50")}
            color="#f700ff"
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            href={`https://wa.me/${companion.contact}}`}
            isExternal
          >
            <Text
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaWhatsapp style={{ color: "#f700ff", marginRight: "10px" }} />
              Contatar
            </Text>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
