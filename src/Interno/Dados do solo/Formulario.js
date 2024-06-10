import React, {useState} from "react";
import "./styleFormulario.css";

export const DadosDeSoloFormulario = () => {
    // Constantes
    const [PH, setPH] = useState('');
    const [fertilidade, setFertilidade] = useState('');
    const [salinidade, setSalinidade] = useState('');
    const [materiaOrganica, setMateriaOrganica] = useState('');
    const [saturacao, setSaturacao] = useState('');
    const [texturaSolo, setTexturaSolo] = useState('');
    const [porcentAreia, setporcentAreia] = useState('');
    const [porcentSilt, setporcentSilt] = useState('');
    const [porcentArgila, setporcentArgila] = useState('');
    const [nutrientes, setNutrientes] = useState('');

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
      };

    const handleSave = async () => {
        const data = {
            PH,
            fertilidade,
            nutrientes,
            saturacao,
            materiaOrganica,
            salinidade,
            porcentArgila,
            porcentSilt,
            porcentAreia,
            texturaSolo,
        }

        try {
            const response = await fetch("http://localhost:3000/api/SalvaFormulario", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data), // Envie os dados para o backend
            });
            console.log(response)
            if (!response.ok) {
              throw new Error("Erro ao enviar os dados para o backend");
            }
            else {
              console.log(`Dados enviados com sucesso para o backend: ${data}`);
              window.location.href = "/solo";}
          } catch (error) {
            console.error("Erro:", error);
          }
      }

  return (
    <div className="formulario">
      <div className="div">
        <div className="fotter">
  
            <div className="rectangle" />
            <div className="rectangle-2" />
            <p className="copyright">
              <span className="text-wrapper">copyright 2024 </span>
              <span className="span">TerraTech</span>
            </p>
            <img className="internet" alt="Internet" src="https://c.animaapp.com/WNXjhbWn/img/internet@2x.png" />
            <div className="text-wrapper-2">www.TerraTech.com</div>
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/WNXjhbWn/img/hand-with-smartphone@2x.png"
            />
            <div className="text-wrapper-3">+55 (61) 999123456</div>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/WNXjhbWn/img/envelope@2x.png" />
            <div className="text-wrapper-4">Email@gmail.com</div>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/WNXjhbWn/img/place-marker@2x.png"
            />
            <div className="text-wrapper-5">Location, street, 1234</div>
            <div className="text-wrapper-6">Contacts</div>
            <p className="sobre">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <div className="text-wrapper-7">Sobre TerraTech</div>
          </div>
        </div>

        <div className="dados-do-solo">
            <div className="anlise-granulomtrica">
            <div className="overlap-group-2">
                <div className="formulario">
                <input
                    type="text"
                    className="div-2"
                    placeholder="Textura do solo"
                    value={texturaSolo}
                    onChange={(event) => handleInputChange(event, setTexturaSolo)}
                />
                <div className="text-wrapper-8">Textura do solo</div>
                <input
                    type="text"
                    className="div-3"
                    placeholder="Porcentagem Areia"
                    value={porcentAreia}
                    onChange={(event) => handleInputChange(event, setporcentAreia)}
                />
                <div className="text-wrapper-9">Porcentagem Areia</div>
                <input
                    type="text"
                    className="div-4"
                    placeholder="Porcentagem Silte"
                    value={porcentSilt}
                    onChange={(event) => handleInputChange(event, setporcentSilt)}
                />
                <div className="text-wrapper-10">Porcentagem Silte</div>
                <input
                    type="text"
                    className="div-5"
                    placeholder="Porcentagem Argila"
                    value={porcentArgila}
                    onChange={(event) => handleInputChange(event, setporcentArgila)}
                />
                <div className="text-wrapper-11">Porcentagem Argila</div>
                </div>
                <div className="text-wrapper-12">Análise granulométrica</div>
            </div>
            </div>

            <div className="button">
                <div className="button-rectangle">
                    <a className="button-text" href="#" onClick={handleSave}>Salvar</a>
                </div>
            </div>

        <div className="analise-quimica">
      <div className="fundo-analise" />
      <div className="formulario-2">
        <input
          type="text"
          className="textiput-salinidade"
          placeholder="Salinidade"
          value={salinidade}
          onChange={(event) => handleInputChange(event, setSalinidade)}
        />
        <div className="text-wrapper-13">Salinidade</div>
        <input
          type="text"
          className="textiput"
          placeholder="Matéria orgânica"
          value={materiaOrganica}
          onChange={(event) => handleInputChange(event, setMateriaOrganica)}
        />
        <div className="text-wrapper-14">Matéria orgânica</div>
        <input
          type="text"
          className="div-2"
          placeholder="Saturação"
          value={saturacao}
          onChange={(event) => handleInputChange(event, setSaturacao)}
        />
        <div className="text-wrapper-15">Saturação</div>
        <input
          type="text"
          className="div-3"
          placeholder="Nutrientes"
          onChange={(event) => handleInputChange(event, setNutrientes)}
        />
        <div className="text-wrapper-16">Nutrientes</div>
        <input
          type="text"
          className="div-4"
          placeholder="Fertilidade"
          value={fertilidade}
          onChange={(event) => handleInputChange(event, setFertilidade)}
        />
        <div className="text-wrapper-17">Fertilidade</div>
        <input
          type="text"
          className="div-5"
          placeholder="PH"
          value={PH}
          onChange={(event) => handleInputChange(event, setPH)}
        />
        <div className="text-wrapper-18">PH</div>
      </div>
      <div className="text-wrapper-19">Analise Quimica</div>
        </div>
            <p className="p">Dados do Solo - Formulario</p>
          </div>

            <div className="menu">
              <div className="overlap-3">
                <img
                  className="suporte-house"
                  alt="Suporte house"
                  src="https://c.animaapp.com/WNXjhbWn/img/controle-house@2x.png"
                />
                <a className="text-wrapper-20" href="/suporte">Suporte</a>
                <img
                  className="histrico-plantio"
                  alt="Histrico plantio"
                  src="https://c.animaapp.com/WNXjhbWn/img/controle-house@2x.png"
                />
                <div className="overlap-4">
                  <a className="text-wrapper-21" href="/historico">Histórico Plantio</a>
                  <a className="text-wrapper-22" href="/pesticidas">Pragas e Agrotóxico</a>
                </div>
                <img
                  className="pragas-e-agrotxico"
                  alt="Pragas e agrotxico"
                  src="https://c.animaapp.com/WNXjhbWn/img/controle-house@2x.png"
                />
                <div className="overlap-5">
                  <div className="overlap-6">
                    <div className="overlap-group-3">
                      <div className="rectangle-3" />
                      <div className="text-wrapper-23">Dados do solo</div>
                      <a className="text-wrapper-24" href="/selcultura">Seleção Cultura</a>
                    </div>
                    <img
                      className="seleo-cultura-house"
                      alt="Seleo cultura house"
                      src="https://c.animaapp.com/WNXjhbWn/img/controle-house@2x.png"
                    />
                  </div>
                  <a className="text-wrapper-25" href="/regiao">Região e Estação</a>
                </div>
                <img
                  className="regio-e-estao-house"
                  alt="Regio e estao house"
                  src="https://c.animaapp.com/WNXjhbWn/img/controle-house@2x.png"
                />
                <img
                  className="plano-plantio-house"
                  alt="Plano plantio house"
                  src="https://c.animaapp.com/WNXjhbWn/img/controle-house@2x.png"
                />
                <a className="text-wrapper-26" href="/plano">Plano Plantio</a>
                <img
                  className="controle-house"
                  alt="Controle house"
                  src="https://c.animaapp.com/WNXjhbWn/img/controle-house@2x.png"
                />
                <a className="text-wrapper-27" href="/controle">Controle</a>
              </div>
            </div>
            <div className="headder">
              <div className="overlap-7">
                <div className="overlap-group-4">
                  <div className="ellipse" />
                  <div className="text-wrapper-28">S</div>
                </div>
                <p className="usuario-gmail-com">
                  <span className="text-wrapper-29">usuario</span>
                  <a href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-29">@gmail.com</span>
                  </a>
                </p>
                <div className="text-wrapper-30">admin</div>
              </div>
              <div className="text-wrapper-31">TerraTech</div>
            </div>
          </div>


  );
};

export default DadosDeSoloFormulario