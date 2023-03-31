import "./style/anuncie.css";
import api from "../../services/api";
import { useState } from "react";
import { Input, Stack, Center, useToast, Button } from "@chakra-ui/react";
import Cookies from "js-cookie";

interface AnunciePageProps {
  id: string;
}

export default function AnunciePage({ id }: AnunciePageProps): JSX.Element {
  const [image, setImage] = useState<File | undefined>(undefined);
  const toast = useToast();

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
      .post(`upload/${id}`, data, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${FormData.prototype._boundary}`,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((r) => {
        if (!r.data.token) {
          // TODO: implementar ação em caso de sucesso
        } else {
          // TODO: implementar ação em caso de erro
        }
      })
      .catch((e) => {
        console.log("Erro! -> ", e);
      });
  }

  return (
    <div className="container">
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
    </div>
  );
}