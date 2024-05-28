import React from "react";
import "./styleSuporte.css";

async function checkAuthentication() {
  try {
    const response = await fetch('http://localhost:3000/api/VerificaFormulario', {
      method: 'GET',
    });
    console.log(response)
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

export const Suporte = () => {
  return (
    <div className="suporte">
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
              <img className="internet" alt="Internet" src="https://c.animaapp.com/gty5W9Sn/img/internet@2x.png" />
              <div className="text-wrapper-3">+55 (61) 999123456</div>
              <img
                className="hand-with-smartphone"
                alt="Hand with smartphone"
                src="https://c.animaapp.com/gty5W9Sn/img/hand-with-smartphone@2x.png"
              />
              <div className="text-wrapper-4">Email@gmail.com</div>
              <img className="envelope" alt="Envelope" src="https://c.animaapp.com/gty5W9Sn/img/envelope@2x.png" />
              <div className="text-wrapper-5">Location, street, 1234</div>
              <img
                className="place-marker"
                alt="Place marker"
                src="https://c.animaapp.com/gty5W9Sn/img/place-marker@2x.png"
              />
              <div className="text-wrapper-6">Contacts</div>
              <p className="p">
                Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de
                maneira eficiente.
              </p>
              <div className="text-wrapper-7">Sobre TerraTech</div>
            </div>
          </div>
          <div className="menu">
            <div className="overlap-2">
              <div className="group">
                <div className="div-wrapper">
                  <div className="text-wrapper-8">Suporte</div>
                </div>
              </div>
              <div className="overlap-3">
                <img
                  className="histrico-plantio"
                  alt="Histrico plantio"
                  src="https://c.animaapp.com/gty5W9Sn/img/hist-rico-plantio-house@2x.png"
                />
                <img
                  className="pragas-e-agrotxico"
                  alt="Pragas e agrotxico"
                  src="https://c.animaapp.com/gty5W9Sn/img/pragas-e-agrot-xico-house@2x.png"
                />
              </div>
              <div className="overlap-4">
                <a className="text-wrapper-9" href="/historico" >Histórico Plantio</a>
                <a className="text-wrapper-10" href="/pesticidas" >Pragas e Agrotóxico</a>
                <a className="text-wrapper-11" href="#" onClick={checkAuthentication} >Dados do Solo</a>
              </div>
              <img
                className="dados-do-solo-house"
                alt="Dados do solo house"
                src="https://c.animaapp.com/gty5W9Sn/img/dados-do-solo-house@2x.png"
              />
              <img
                className="seleo-cultura-house"
                alt="Seleo cultura house"
                src="https://c.animaapp.com/gty5W9Sn/img/sele--o-cultura-house@2x.png"
              />
              <div className="overlap-5">
                <a className="text-wrapper-12" href="/selcultura" >Seleção Cultura</a>
                <a className="text-wrapper-13" href="/regiao" >Região e Estação</a>
                <a className="text-wrapper-14" href="/plano" >Plano Plantio</a>
              </div>
              <img
                className="regio-e-estao-house"
                alt="Regio e estao house"
                src="https://c.animaapp.com/gty5W9Sn/img/regi-o-e-esta--o-house@2x.png"
              />
              <img
                className="plano-plantio-house"
                alt="Plano plantio house"
                src="https://c.animaapp.com/gty5W9Sn/img/plano-plantio-house@2x.png"
              />
              <img
                className="controle-house"
                alt="Controle house"
                src="https://c.animaapp.com/gty5W9Sn/img/controle-house@2x.png"
              />
              <a className="text-wrapper-15" href="/controle" >Controle</a>
            </div>
          </div>
          <div className="text-wrapper-30">Perguntas frequentes</div>
          <div className="perguntas-frequentes">
            <div className="overlap-6">
              <p className="contatenos-email">
                <span className="span">Contatenos: </span>
                <span className="text-wrapper-16">Email@gmail.com</span>
              </p>
              <div className="text-wrapper-17">Ainda com duvidas?</div>
              <div className="perguntas">
                {/* <p className="text-wrapper-18">
                  Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label
                  Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label
                  Label Label Label Label
                </p>
                <div className="text-wrapper-19">Label:</div> */}
                <p className="text-wrapper-20">
                  A escolha das plantas para rotação depende de vários fatores, incluindo o clima, o tipo de solo, as necessidades de nutrientes e os objetivos do agricultor.
                  No entanto, algumas plantas comumente usadas em rotação de culturas incluem leguminosas (como feijão e ervilha), cereais (como trigo e milho),
                  raízes (como batata e cenoura) e vegetais de folhas verdes (como alface e espinafre).
                </p>
                <div className="text-wrapper-21">Quais plantas são boas para rotação de culturas?</div>
                <p className="text-wrapper-22">
                  Existem várias abordagens para a rotação de culturas, incluindo rotação simples, rotação binária, rotação de três ou mais culturas e rotação em faixas.
                  Cada abordagem tem suas próprias vantagens e pode ser adaptada às condições específicas de uma fazenda ou região.
                </p>
                <div className="text-wrapper-23">Quais são os diferentes tipos de rotação de culturas?</div>
                <p className="text-wrapper-24">
                  A rotação de culturas envolve planejar e alternar o cultivo de diferentes tipos de plantas em uma sequência lógica.
                  Por exemplo, uma safra de leguminosas ricas em nitrogênio pode ser seguida por uma safra de cereais, seguida por uma safra de raízes ou tubérculos.
                  Isso ajuda a equilibrar a demanda de nutrientes do solo e a reduzir a acumulação de pragas e doenças.
                </p>
                <div className="text-wrapper-25">Como funciona a rotação de culturas?</div>
                <p className="text-wrapper-26">
                  - Melhoria da saúde do solo, através da fixação de nitrogênio, controle de ervas daninhas e redução da erosão.
                  - Controle natural de pragas e doenças, já que diferentes culturas atraem diferentes tipos de insetos e patógenos.
                  - Aumento da biodiversidade, promovendo a presença de uma variedade de organismos no solo e no ambiente circundante.
                  - Melhoria da eficiência no uso de recursos, como água e nutrientes, através da seleção de plantas que complementam umas às outras.
                </p>
                <div className="text-wrapper-27">Quais são os benefícios da rotação de culturas?</div>
                <p className="text-wrapper-28">
                  A rotação de culturas é o processo de alternar diferentes tipos de plantas em uma área cultivada ao longo do tempo.
                  Isso pode ajudar a melhorar a saúde do solo, reduzir doenças e pragas, aumentar a biodiversidade e melhorar a eficiência do uso de recursos.
                </p>
                <div className="text-wrapper-29">O que é rotação de culturas?</div>
              </div>

            </div>
          </div>
          <div className="headder">
            <div className="overlap-7">
              <div className="overlap-group-2">
                <div className="ellipse" />
                <div className="text-wrapper-31">S</div>
              </div>
              <a className="text-wrapper-32" href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
                spandan@gmail.com
              </a>
              <div className="text-wrapper-33">admin</div>
            </div>
            <a className="text-wrapper-34" href="/" >TerraTech</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suporte