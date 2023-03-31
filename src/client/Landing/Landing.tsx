import "./style/landing.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Flex, Grid, Link, useDisclosure } from "@chakra-ui/react";
import FirstQuestion from "../../components/Question/QuestionCard";
import { useEffect } from "react";
import React from "react";

const LandingPage = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);


  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="lugares">
          <Flex className="distritos" >
            <div className="title">
              <h1 className="title-name">Escolha seu distrito</h1>
            </div>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Link href="/home" className="link-distrito" w="100%">Lisboa <span className="qtd">210</span></Link>
              <Link className="link-distrito" w="100%">Aveiro <span className="qtd">15</span></Link>
              <Link className="link-distrito" w="100%">Bragança <span className="qtd">20</span></Link>
              <Link className="link-distrito" w="100%">Castelo Branco <span className="qtd">15</span></Link>
              <Link className="link-distrito" w="100%">Coimbra <span className="qtd">55</span></Link>
              <Link className="link-distrito" w="100%">Évora <span className="qtd">58</span></Link>
              <Link className="link-distrito" w="100%">Faro <span className="qtd">41</span></Link>
              <Link className="link-distrito" w="100%">Guarda <span className="qtd">10</span></Link>
              <Link className="link-distrito" w="100%">Leiria <span className="qtd">15</span></Link>
              <Link className="link-distrito" w="100%">Braga <span className="qtd">12</span></Link>
              <Link className="link-distrito" w="100%">Portalegre <span className="qtd">17</span></Link>
              <Link className="link-distrito" w="100%">Porto <span className="qtd">10</span></Link>
              <Link className="link-distrito" w="100%">Santarém <span className="qtd">8</span></Link>
              <Link className="link-distrito" w="100%">Setúbal <span className="qtd">78</span></Link>
              <Link className="link-distrito" w="100%">Viana do Castelo <span className="qtd">58</span></Link>
              <Link className="link-distrito" w="100%">Vila Real <span className="qtd">112</span></Link>
              <Link className="link-distrito" w="100%">Viseu <span className="qtd">52</span></Link>
            </Grid>
          </Flex>
        </div>
      </div>
      <FirstQuestion isOpen={isOpen} onClose={onClose} />
      <Footer />
    </div>
  );
};

export default LandingPage;
