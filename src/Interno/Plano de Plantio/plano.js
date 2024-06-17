import React, { useState, useEffect } from "react";
import "./styleplano.css";
import perfilImagem from "../../components/Images/Interno/TerraTechIcon.png";

async function checkAuthentication() {
  try {
    const response = await fetch('http://localhost:3000/api/VerificaFormulario', {
      method: 'GET',
    });
    console.log(response);
    if (!response.ok) {
      console.log("Vazio");
      window.location.href = '/solo/formulario';
    } else {
      console.log("Autenticado");
      window.location.href = '/solo';
    }
  } catch (error) {
    console.error("Erro:", error);
    setTimeout(() => setBackendError(''), 4000); // Clear error message after 4 seconds
  }
}

const PlanoPlantio = () => {
  const [isColhido, setIsColhido] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const handleClick = () => {
    setShowModal(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/salvaHistorico");
      if (!response.ok) {
        throw new Error("Erro ao salvar plano de plantio")
      }
    } catch (error) {
      console.error("Erro ao salvar plano de platio: ", error)
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="plano-plantio">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            {/* Elementos compartilhados */}
            <div className="rectangle" />
            <div className="ellipse" />
            <img className="text-wrapper" alt="FotoPerfil" src={perfilImagem} />
            <p className="div">{usuario}</p>
            <div className="text-wrapper-2">admin</div>
            <div className="flexcontainer">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div key={num} className="text">
                  <span className="span">{num}</span>
                </div>
              ))}
            </div>
            <div className="text-wrapper-3">Orders</div>
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <img className="house" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <a className="text-wrapper-4" href="/suporte">Suporte</a>
            <a className="text-wrapper-5" href="/historico">Histórico Plantio</a>
            <img className="img" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <a className="text-wrapper-6" href="#" onClick={checkAuthentication}>Dados do Solo</a>
            <a className="text-wrapper-7" href="/">TerraTech</a>
            <img className="rectangle-4" alt="Rectangle" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <div className="group-2">
              <a className="text-wrapper-9" href="/regiao">Região e Estação</a>
              <img className="house-2" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <a className="text-wrapper-10" href="/plano">Plano Plantio</a>
              </div>
            </div>
            <div className="group-3">
              <a className="text-wrapper-11" href="/controle">Controle</a>
              <img className="house-controle" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            </div>
            <a className="text-wrapper-12" href="/selcultura">Seleção Cultura</a>
            <img className="house-3" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <div className="rotter">
              <div className="overlap-2">
                <div className="rectangle-6" />
                <div className="rectangle-7" />
                <div className="text-wrapper-13">Location, street, 1234</div>
                <div className="text-wrapper-14">Email@gmail.com</div>
                <div className="text-wrapper-15">+55 (61) 999123456</div>
                <div className="text-wrapper-16">www.TerraTech.com</div>
                <div className="text-wrapper-17">Sobre TerraTech</div>
                <div className="text-wrapper-18">Contacts</div>
                <p className="p">
                  Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de
                  maneira eficiente.
                </p>
                <img className="envelope" alt="Envelope" src="https://c.animaapp.com/AneYV77i/img/envelope@2x.png" />
                <img
                  className="hand-with-smartphone"
                  alt="Hand with smartphone"
                  src="https://c.animaapp.com/AneYV77i/img/hand-with-smartphone@2x.png"
                />
                <img className="internet" alt="Internet" src="https://c.animaapp.com/AneYV77i/img/internet@2x.png" />
                <img className="copyright" alt="Copyright" src="https://c.animaapp.com/AneYV77i/img/copyright@2x.png" />
                <p className="copyright-2">
                  <span className="text-wrapper-19">copyright 2024 </span>
                  <span className="text-wrapper-20">TerraTech</span>
                </p>
                <img
                  className="place-marker"
                  alt="Place marker"
                  src="https://c.animaapp.com/AneYV77i/img/place-marker@2x.png"
                />
              </div>
            </div>
          </div>
          {/* Elementos específicos de Plano Plantio */}
          <div className="text-wrapper-21">Plano Plantio</div>
          <div className="overlap-5">
            <button className="button" onClick={handleClick}>
              <div className="text-wrapper-38">FINALIZAR PLANTAÇÃO</div>
            </button>
          </div>
          <div className="overlap-3">
            <div className="overlap-4">
              <pre className="caixa-texto">{planoAI}</pre> {/*Adição de plano de plantio feito pela IA*/}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmar Ação</h2>
            <p>Tem certeza que deseja finalizar a plantação?</p>
            <div className="modal-buttons">
              <button className="modal-button cancel" onClick={handleCancel}>Cancelar</button>
              <button className="modal-button confirm" onClick={handleConfirm}>Confirmar</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanoPlantio;
