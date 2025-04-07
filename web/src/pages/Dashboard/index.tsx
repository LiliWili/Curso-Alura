import { Container } from "@mui/material";
import Avaliacao from "../../components/Avaliacao";
import Grafico from "../../components/Grafico";
import Titulo from "../../components/Titulo";
import Subtitulo from "../../components/Subtitulo";
import Tabela from "../../components/Tabela";
import Botao from "../../components/Botao";
import useDadosConsulta from "../../useDadosConsulta";
import useDadosProfissional from "../../useDadosProfissional";
import ModalCadastro from "./Modal";
import { useState } from "react";

export default function Dashboard() {
    const { dados: consultas, erro: consultasErro } = useDadosConsulta();
    const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();
    const [open, setOpen] = useState<boolean>(false)
  
    if (consultasErro || profissionaisErro) {
      console.log("Ocorreu um erro na requisição");
    }

    const handleOpen = () =>{
      setOpen(true);
    }

    const handleClose = () =>{
      setOpen(false);
    }
    
    return (
        <Container>
          <Titulo>Área Administrativa</Titulo>
          <Botao onClick={()=>handleOpen()}>Cadastrar especialista</Botao>
          <ModalCadastro open={open} handleClose={handleClose} />
          <Titulo imagem="consulta">Consultas do Dia</Titulo>
          <Tabela consultas={consultas} />
          <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
          <Subtitulo>Dezembro/22</Subtitulo>
          <Grafico consultas={consultas} profissionais={profissionais} />
          <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
          <Avaliacao profissionais={profissionais} />
        </Container>
    );
  }