import React, { useState } from "react";
import "./styleselecaocultura.css";
import cafeImage from "../../components/Images/Interno/cafe.jpg";
import laranjaImage from "../../components/Images/Interno/laranja.jpg";
import sojaImage from "../../components/Images/Interno/soja.jpg";
import tabacoImage from "../../components/Images/Interno/tabaco.jpg";
import cacauImage from "../../components/Images/Interno/cacau.jpg";
import milhoImage from "../../components/Images/Interno/milho.jpg";
import tomateImage from "../../components/Images/Interno/tomate.jpg";
import arrozImage from "../../components/Images/Interno/arroz.jpg";

export const SelecaoDeCultura = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [activeCulture, setActiveCulture] = useState(null);

  const openModal = (plant) => {
    setSelectedPlant(plant);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPlant(null);
    setModalOpen(false);
  };

  const handleCultureClick = (plant) => {
    setActiveCulture(plant); // Atualiza a cultura ativa quando clicada
  };

  return (
    <div className="seleo-de-cultura">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="ellipse" />
            <div className="text-wrapper">S</div>
            <a className="div" href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
              spandan@gmail.com
            </a>
            <div className="text-wrapper-2">admin</div>
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <a className="text-wrapper-4" href="/regiao">Região e Estação</a>
            <img className="house" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <a className="text-wrapper-5" href="/plano" >Plano Plantio</a>
            <img className="calendar" alt="Calendar" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <img className="img" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <a className="text-wrapper-6" href="/suporte" >Suporte</a>
            <a className="text-wrapper-7" href="/historico" >Histórico Plantio</a>
            <img className="house-2" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <a className="text-wrapper-8" href="/dadossolo" >Dados do Solo</a>
            <a className="text-wrapper-9" exact href="/">AgroBoys</a>
            <div className="group">
              <a className="text-wrapper-10" href="/pesticidas" >Pragas e Agrotóxico</a>
              <img className="house-3" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-5" />
                <a className="text-wrapper-11" href="/selcultura" >Seleção Cultura</a>
              </div>
            </div>
            <div className="div-wrapper">
              <a className="text-wrapper-12" href="/controle">Controle</a>
            </div>
            <img className="controle-house" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <img className="house-4" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <div className="rotter">
              <div className="overlap-2">
                <div className="rectangle-6" />
                <div className="rectangle-7" />
                <div className="text-wrapper-13">Location, street, 1234</div>
                <div className="text-wrapper-14">Email@gmail.com</div>
                <div className="text-wrapper-15">+55 (61) 999123456</div>
                <div className="text-wrapper-16">www.AgroBoys.com</div>
                <div className="text-wrapper-17">Sobre AgroBoys</div>
                <div className="text-wrapper-18">Contacts</div>
                <p className="p">
                  Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de
                  maneira eficiente.
                </p>
                <img className="envelope" alt="Envelope" src="https://c.animaapp.com/fkXnBuii/img/envelope@2x.png" />
                <img
                  className="hand-with-smartphone"
                  alt="Hand with smartphone"
                  src="https://c.animaapp.com/fkXnBuii/img/hand-with-smartphone@2x.png"
                />
                <img className="internet" alt="Internet" src="https://c.animaapp.com/fkXnBuii/img/internet@2x.png" />
                <img className="copyright" alt="Copyright" src="https://c.animaapp.com/fkXnBuii/img/copyright@2x.png" />
                <p className="copyright-2">
                  <span className="text-wrapper-19">copyright 2024 </span>
                  <span className="text-wrapper-20">AgroBoys</span>
                </p>
                <img
                  className="place-marker"
                  alt="Place marker"
                  src="https://c.animaapp.com/fkXnBuii/img/place-marker@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-21">Seleção de Cultura</div>
            <p className="text-wrapper-22">Gostaria de mudar a plantação pré-selecionada na página Home?</p>
            <p className="text-wrapper-23">Cultura Selecionada: {activeCulture && activeCulture.name}</p>
          </div>
          <div className="overlap-4">
            <div className="rectangle-8" />
            <a className="text-wrapper-24">Confirmar</a>
          </div>
          <div className="overlap-5">
            <div className="group-2">
              <img
                className="rectangle-9"
                alt="Rectangle"
                src={cacauImage}
                onClick={() => openModal({ image: cacauImage, name: 'Cacau', description: "Descrição:O cacau é uma planta perene cultivada em regiões tropicais e subtropicais para a produção de chocolate. Prefere climas quentes e úmidos, solos bem drenados e ricos em matéria orgânica, com pH entre 5,0 e 6,5. No Brasil, é mais comum na região da Bahia, especialmente na Costa do Cacau. Requer cuidados específicos, como controle de pragas, e sua colheita é manual. A produção de cacau é economicamente importante, proporcionando empregos e contribuindo para a balança comercial em muitas regiões." })} />
              <a onClick={() => handleCultureClick({ image: cacauImage, name: 'Cacau', description: 'Descrição' })}>
                <div className="rectangle-10">
                  <div className="text-wrapper-25">Cacau</div>
                </div>
              </a>
            </div>

            <div className="group-3">

              <img
                className="rectangle-9"
                alt="Rectangle"
                src={milhoImage}
                onClick={() => openModal({ image: milhoImage, name: 'Milho', description: "Descrição: O milho é uma planta anual amplamente cultivada em várias partes do mundo, especialmente em climas temperados e tropicais. Prefere solos bem drenados e profundos, com boa fertilidade e pH entre 5,5 e 7,5. No Brasil, é cultivado em diferentes regiões, principalmente no Centro-Oeste, Sul e Sudeste. O plantio ocorre principalmente na primavera e verão. O milho é uma cultura versátil, utilizada para alimentação humana, animal e na indústria. É uma importante fonte de carboidratos, proteínas e fibras, desempenhando um papel crucial na segurança alimentar e na economia agrícola." })} />
              <a onClick={() => handleCultureClick({ image: milhoImage, name: 'Milho', description: 'Descrição' })} >
                <div className="rectangle-10">
                  <div className="text-wrapper-25">Milho</div>
                </div>
              </a>
            </div>
            <div className="group-4">

              <img
                className="rectangle-9"
                alt="Rectangle"
                src={tomateImage}
                onClick={() => openModal({ image: tomateImage, name: 'Tomate', description: 'Descrição: O tomate é uma planta anual cultivada em todo o mundo, especialmente em climas temperados e subtropicais. Prefere solos bem drenados e ricos em matéria orgânica, com pH entre 6,0 e 6,8. No Brasil, é cultivado em diversas regiões, principalmente no Sudeste, Sul e Centro-Oeste. O plantio geralmente ocorre na primavera e verão, embora variedades adaptadas possam ser cultivadas durante todo o ano. O tomate é uma cultura muito versátil, sendo consumido fresco, processado em conservas, molhos, sucos e outros produtos. É uma excelente fonte de vitaminas, minerais e antioxidantes, desempenhando um papel importante na dieta e na saúde humana.' })}
              />
              <a onClick={() => handleCultureClick({ image: tomateImage, name: 'Tomate', description: 'Descrição' })}>
                <div className="rectangle-10">
                  <div className="text-wrapper-25">Tomate</div>
                </div>
              </a>
            </div>
            <div className="group-5">

              <img
                className="rectangle-9"
                alt="Rectangle"
                src={arrozImage}
                onClick={() => openModal({ image: arrozImage, name: 'Arroz', description: 'Descrição: O arroz é uma planta anual que é cultivada em diversos climas ao redor do mundo, sendo uma das principais fontes de alimento para a humanidade. Prefere solos alagados e bem drenados, sendo comumente cultivado em regiões tropicais e subtropicais. No Brasil, é amplamente cultivado em diferentes estados, com destaque para as regiões Sul, Sudeste e Centro-Oeste. O plantio ocorre principalmente na primavera e verão, e a colheita é feita quando os grãos estão maduros. O arroz é uma fonte importante de carboidratos na dieta humana e pode ser consumido de diversas formas, como acompanhamento de pratos principais ou na forma de produtos processados, como farinha e macarrão. ' })}
              />
              <a onClick={() => handleCultureClick({ image: arrozImage, name: 'Arroz', description: 'Descrição' })}>
                <div className="rectangle-10">
                  <div className="text-wrapper-25">Arroz</div>
                </div>
              </a>

            </div>
            <div className="frame">
              <div className="group-6" >

                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={cafeImage}
                  onClick={() => openModal({ image: cafeImage, name: 'Cafe', description: 'Descrição: O café é uma planta perene cultivada principalmente em regiões tropicais e subtropicais. Prefere climas com temperaturas moderadas e solos bem drenados. No Brasil, é amplamente cultivado em várias regiões, especialmente no Sudeste e no Nordeste. O plantio geralmente ocorre no início da estação chuvosa, e a colheita é realizada quando os frutos estão maduros. Os grãos de café são usados para preparar uma das bebidas mais populares do mundo, consumida tanto quente quanto fria. Além disso, o café é uma importante commodity agrícola, com grande impacto econômico em várias partes do mundo.' })}
                />
                <a onClick={() => handleCultureClick({ image: cafeImage, name: 'Cafe', description: 'Descrição' })}>
                  <div className="rectangle-10">
                    <div className="text-wrapper-25">Café</div>
                  </div>
                </a>
              </div>
              <div className="group-6">

                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={laranjaImage}
                  onClick={() => openModal({ image: laranjaImage, name: 'Laranja', description: 'Descrição: A laranja é uma fruta cítrica amplamente cultivada em climas subtropicais e tropicais. Suas árvores preferem solos bem drenados e locais com boa incidência de luz solar. No Brasil, é cultivada em diversas regiões, especialmente no estado de São Paulo. A colheita das laranjas geralmente ocorre durante o período de maturação dos frutos, que podem variar em tamanho, cor e sabor dependendo da variedade. Além de consumida in natura, a laranja é utilizada na produção de sucos, doces, geleias e outros produtos alimentícios.' })}
                />
                <a onClick={() => handleCultureClick({ image: laranjaImage, name: 'Laranja', description: 'Descrição' })}>
                  <div className="rectangle-10">
                    <div className="text-wrapper-25">Laranja</div>
                  </div>
                </a>
              </div>
              <div className="group-6">

                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={sojaImage}
                  onClick={() => openModal({ image: sojaImage, name: 'Soja', description: 'Descrição: A soja é uma planta leguminosa de grande importância agrícola devido ao seu alto valor proteico e versatilidade de uso. Ela cresce melhor em climas subtropicais e temperados, com uma estação de crescimento longa e temperaturas amenas. O solo ideal para o cultivo de soja é bem drenado e rico em matéria orgânica. No Brasil, a soja é cultivada principalmente nos estados do Centro-Oeste, Sul e Sudeste, onde as condições climáticas e edáficas são favoráveis. A soja é utilizada na produção de diversos produtos, incluindo óleos vegetais, ração animal, alimentos processados e biodiesel.' })}
                />
                <a onClick={() => handleCultureClick({ image: sojaImage, name: 'Soja', description: 'Descrição' })}>
                  <div className="rectangle-10">
                    <div className="text-wrapper-25">Soja</div>
                  </div>
                </a>
              </div>
              <div className="group-6" >

                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={tabacoImage}
                  onClick={() => openModal({ image: tabacoImage, name: 'Tabaco', description: 'Descrição: O tabaco é uma planta cultivada principalmente pela indústria do tabaco para a produção de cigarros, charutos, cachimbos e tabaco para mascar. Ele requer um clima ensolarado e quente para crescer, com uma estação de crescimento longa e temperaturas consistentes. O solo ideal para o cultivo de tabaco é bem drenado e fértil, geralmente encontrado em áreas de baixa altitude. No Brasil, o cultivo de tabaco é comum em estados como Rio Grande do Sul, Santa Catarina e Paraná, onde o clima e o solo são adequados. No entanto, o tabaco é uma cultura controversa devido aos seus impactos na saúde pública e ao seu potencial de dependência química.' })}
                />
                <a onClick={() => handleCultureClick({ image: tabacoImage, name: 'Tabaco', description: 'Descrição' })}>
                  <div className="rectangle-10">
                    <div className="text-wrapper-25">Tabaco</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && selectedPlant && (
        <div className="modal-overlay">
          <div className="modal" onClick={closeModal}>
            <img src={selectedPlant.image} alt={selectedPlant.name} className="modal-img" />
            <div className="modal-content">
              <p className="modal-description" style={{ maxHeight: '400px', overflowY: 'scroll' }}>{selectedPlant.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelecaoDeCultura;
