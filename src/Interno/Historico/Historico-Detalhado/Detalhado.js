import React, { useState, useEffect } from "react";
import Arrow from "../../../components/Arrow/arrow";
import "./styleDetalhado.css";
import perfilImagem from "../../../components/Images/Interno/TerraTechIcon.png"

export const HistoricoDetalhado = () => {
  const [planoAI, setplanoAI] = useState(null);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const pegaUsuario = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/enviaUsuario");
        if (!response.ok) {
          throw new Error("Erro ao buscar usuário");
        }
        const data = await response.json(); // Extrai os dados da resposta
        setUsuario(data[0].nomeUsuario); // Define o estado com os dados obtidos
      } catch (error) {
        console.error("Erro ao buscar usuário: ", error);
      }
    };

    pegaUsuario();
  }, []);

  useEffect(() => {
    const chamatextoAI = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/mostraTexto");
        if (!response.ok) {
          throw new Error("Erro gera plano de plantio");
        }
        const data = await response.json(); // Extrai os dados da resposta
        console.log(data.AI_Text)
        setplanoAI(data.AI_Text); // Define o estado com os dados obtidos
      } catch (error) {
        console.error("Erro ao gerar plano de plantio: ", error);
      }
    };
    chamatextoAI();
  }, []); // Executa apenas uma vez após a montagem inicial do componente

  return (
    <div className="histrico-detalhado">
      <div className="div">
        <div className="fotter">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <p className="copyright">
              <span className="text-wrapper">copyright 2024 </span>
              <span className="span">TerraTech</span>
            </p>
            <div className="text-wrapper-2">www.TerraTech.com</div>
            <img className="internet" alt="Internet" src="https://c.animaapp.com/nQh2W4E3/img/internet@2x.png" />
            <div className="text-wrapper-3">+55 (61) 999123456</div>
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/nQh2W4E3/img/hand-with-smartphone@2x.png"
            />
            <div className="text-wrapper-4">Email@gmail.com</div>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/nQh2W4E3/img/envelope@2x.png" />
            <div className="text-wrapper-5">Location, street, 1234</div>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/nQh2W4E3/img/place-marker@2x.png"
            />
            <div className="text-wrapper-6">Contacts</div>
            <p className="p">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <div className="text-wrapper-7">Sobre TerraTech</div>
          </div>
        </div>
        <div className="dados">
        <div className="pLano">
              <pre className="caixa-texto">{planoAI}</pre> {/*Adição de plano de plantio feito pela IA*/}
        </div>
          <div className="lucro">

          </div>
          <div className="hectare">

          </div>
          <div className="pragas">
          </div>
          <div className="data-de-plantio">
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-21">Histórico Detalhado</div>
            <a href="/historico"> <Arrow className="circle-arrow-left-instance" /></a>
          </div>
        </div>
        <header className="header">
          <div className="overlap-10">
            <div className="overlap-group-7">
              <div className="ellipse" />
              <img className="text-wrapper-22" alt="FotoPerfil" src={perfilImagem} />
            </div>
            <div className="text-wrapper-23">{usuario}</div>
            <div className="text-wrapper-24">admin</div>
            <a className="text-wrapper-25" href="/" >TerraTech</a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HistoricoDetalhado