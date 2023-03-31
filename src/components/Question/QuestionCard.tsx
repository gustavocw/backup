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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialRef?: React.RefObject<HTMLInputElement>;
  finalRef?: React.RefObject<HTMLButtonElement>;
}

const FirstQuestion: React.FC<Props> = ({
  isOpen,
  onClose,
  initialRef,
  finalRef,
}) => {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [answerG, setAnswerG] = useState("");

  const handleYesClick = () => {
    setAnswer("sim");
  };
  const h = () => {
    setAnswerG("homens");
      navigate("/homens")
  };
  const m = () => {
    setAnswerG("mulheres");
  };
  const t = () => {
    setAnswerG("trans");
  };
  const c = () => {
    setAnswerG("casais");
  };

  const handleNoClick = () => {
    setAnswer("nao");
    navigate("/naopermitido");
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Responda para nós antes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl m={"2"}>
              <FormLabel m={"2"}>Você é maior de 18 ?</FormLabel>
              <Button
                onClick={handleYesClick}
                bg={"pink.500"}
                color={"#fff"}
                mx={"2"}
                isLoading={answer === "sim"}
              >
                SIM
              </Button>
              <Button
                onClick={handleNoClick}
                bg={"pink.500"}
                color={"#fff"}
                mx={"2"}
              >
                NÃO
              </Button>
            </FormControl>
            {['sim'].includes(answer) && (
            <FormControl>
              <FormLabel>Oque procura no site ?</FormLabel>
              <Button
                bg={"pink.500"}
                color={"#fff"}
                size={"sm"}
                mx={"2"}
                my={"2"}
                onClick={h}
                isLoading={answerG === "homens"}
              >
                HOMENS
              </Button>
              <Button
                bg={"pink.500"}
                color={"#fff"}
                size={"sm"}
                mx={"2"}
                my={"2"}
                onClick={m}
                isLoading={answerG === "mulheres"}
              >
                MULHERES
              </Button>
              <Button
                bg={"pink.500"}
                color={"#fff"}
                size={"sm"}
                mx={"2"}
                my={"2"}
                onClick={t}
                isLoading={answerG === "trans"}
              >
                TRANS
              </Button>
              <Button
                bg={"pink.500"}
                color={"#fff"}
                size={"sm"}
                mx={"2"}
                my={"2"}
                onClick={c}
                isLoading={answerG === "casais"}
              >
                CASAIS
              </Button>
            </FormControl>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FirstQuestion;
