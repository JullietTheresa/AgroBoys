import React, { useEffect, useState } from "react";
import "./styleHistoricoGeral.css";

async function checkAuthentication() {
  try {
    const response = await fetch('http://localhost:3000/api/VerificaFormulario', {
      method: 'GET',
    });
    if (!response.ok) {
      window.location.href = '/solo/formulario';
    } else {
      window.location.href = '/solo';
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

export const HistoricoGeral = () => {
  const [culturas, setCulturas] = useState([]);

  useEffect(async () => {

    try {
      const response = await fetch('http://localhost:3000/api/enviaHistorico');
      if (!response.ok) {
        throw new Error('Erro ao buscar historico')
      }
      const data = await response.json()
      console.log(data[0])
      setCulturas(data[0])
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, []);

  return (
    <div className="histrico-bsico">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="fotter">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="div" />
              <p className="copyright">
                <span className="text-wrapper">copyright 2024 </span>
                <span className="span">TerraTech</span>
              </p>
              <div className="text-wrapper-2">www.TerraTech.com</div>
              <img className="internet" alt="Internet" src="https://c.animaapp.com/V72d7Rn8/img/internet@2x.png" />
              <div className="text-wrapper-3">+55 (61) 999123456</div>
              <img
                className="hand-with-smartphone"
                alt="Hand with smartphone"
                src="https://c.animaapp.com/V72d7Rn8/img/hand-with-smartphone@2x.png"
              />
              <div className="text-wrapper-4">Email@gmail.com</div>
              <img className="envelope" alt="Envelope" src="https://c.animaapp.com/V72d7Rn8/img/envelope@2x.png" />
              <div className="text-wrapper-5">Location, street, 1234</div>
              <img
                className="place-marker"
                alt="Place marker"
                src="https://c.animaapp.com/V72d7Rn8/img/place-marker@2x.png"
              />
              <div className="text-wrapper-6">Contacts</div>
              <p className="p">
                Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de
                maneira eficiente.
              </p>
              <div className="text-wrapper-7">Sobre TerraTech</div>
            </div>
          </div>
          <div className="tabela">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <div className="flexcontainer">
                  <div className="cultura">
                    <img src={culturas.ImagemCultura} alt={culturas.NomeCultura} className="cultura-imagem" />
                    <div className="cultura-nome">{culturas.NomeCultura}</div>
                    <div className="cultura-situacao">Colhido</div>
                    <a href="#" className="cultura-historico">Histórico Detalhado</a>
                  </div>
              </div>
              <div className="navbar">
                <div className="text-wrapper-26">Imagem</div>
                <div className="text-wrapper-27">Nome da Cultura</div>
                <div className="text-wrapper-28">Situação</div>
                <div className="text-wrapper-30">Histórico Detalhado</div>
              </div>
            </div>
            <div className="text-wrapper-31">Histórico Plantio</div>
          </div>
          <div className="menu">
            <div className="overlap-3">
              <img
                className="suporte-house"
                alt="Suporte house"
                src="https://c.animaapp.com/V72d7Rn8/img/suporte-house@2x.png"
              />
              <a className="text-wrapper-32" href="/suporte">Suporte</a>
              <div className="rectangle-7" />
              <div className="text-wrapper-33">Histórico Plantio</div>
              <div className="overlap-4">
                <a className="text-wrapper-35" href="#" onClick={checkAuthentication}>Dados do Solo</a>
              </div>
              <img
                className="dados-do-solo-house"
                alt="Dados do solo house"
                src="https://c.animaapp.com/V72d7Rn8/img/dados-do-solo-house@2x.png"
              />
              <img
                className="seleo-cultura-house"
                alt="Seleo cultura house"
                src="https://c.animaapp.com/V72d7Rn8/img/sele--o-cultura-house@2x.png"
              />
              <div className="overlap-5">
                <a className="text-wrapper-36" href="/selcultura">Seleção Cultura</a>
                <a className="text-wrapper-37" href="/regiao">Região e Estação</a>
                <a className="text-wrapper-38" href="/plano">Plano Plantio</a>
              </div>
              <img
                className="regio-e-estao-house"
                alt="Regio e estao house"
                src="https://c.animaapp.com/V72d7Rn8/img/regi-o-e-esta--o-house@2x.png"
              />
              <img
                className="plano-plantio-house"
                alt="Plano plantio house"
                src="https://c.animaapp.com/V72d7Rn8/img/plano-plantio-house@2x.png"
              />
              <img
                className="controle-house"
                alt="Controle house"
                src="https://c.animaapp.com/V72d7Rn8/img/controle-house@2x.png"
              />
              <a className="text-wrapper-39" href="/controle">Controle</a>
            </div>
          </div>
          <header className="header">
            <div className="overlap-6">
              <div className="overlap-group-3">
                <div className="ellipse" />
                <div className="text-wrapper-40">S</div>
              </div>
              <a className="text-wrapper-41" href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
                spandan@gmail.com
              </a>
              <div className="text-wrapper-42">admin</div>
            </div>
            <a className="text-wrapper-43" href="/">TerraTech</a>
          </header>
        </div>
      </div>
    </div>
  );
};

export default HistoricoGeral;
