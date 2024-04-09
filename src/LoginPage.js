import React from "react";
import "./styleLogin.css";
import userIcon from './components/Images/Login/vecteezy_user-icon-on-transparent-background_19879186.png';

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="div">
        <div className="header">
          <div className="overlap-group">
            <div className=".navbar-buttons">
              <div className="text-wrapper">AgroBoys</div>
              <a className="text-wrapper-2" exact href="/">Home</a>
              <div className="text-wrapper-5">Login</div>
              <a className="text-wrapper-6" exact href="/SignUp">SignUp</a>
            </div>
          </div>
        </div>
        <div className="fotter">
          <div className="overlap">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="text-wrapper-7">Location, street, 1234</div>
            <div className="text-wrapper-8">Email@gmail.com</div>
            <div className="text-wrapper-9">+55 (61) 999123456</div>
            <div className="text-wrapper-10">www.AgroBoys.com</div>
            <div className="text-wrapper-11">Sobre AgroBoys</div>
            <div className="text-wrapper-12">Contacts</div>
            <p className="p">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/ZUyH8RTL/img/envelope@2x.png" />
            <img className="hand-with-smartphone" alt="Hand with smartphone" src="https://c.animaapp.com/ZUyH8RTL/img/hand-with-smartphone@2x.png" />
            <img className="internet" alt="Internet" src="https://c.animaapp.com/ZUyH8RTL/img/internet@2x.png" />
            <img className="copyright" alt="Copyright" src="https://c.animaapp.com/ZUyH8RTL/img/copyright@2x.png" />
            <p className="copyright-2">
              <span className="span">copyright 2024 </span>
              <span className="text-wrapper-13">AgroBoys</span>
            </p>
            <img className="place-marker" alt="Place marker" src="https://c.animaapp.com/ZUyH8RTL/img/place-marker@2x.png" />
          </div>
        </div>
        <div className="login">
          <div className="overlap-2">
            <div className="overlap-group-2">
              <div className="rectangle-3" />
              <div className="text-wrapper-14">Email ou CPF</div>
            </div>
            <div className="overlap-3">
              <div className="rectangle-3" />
              <div className="text-wrapper-15">Senha</div>
            </div>
            <div className="overlap-4">
              <a className="rectangle-4" href="/controle" />
              <a className="text-wrapper-16" href="/controle">Login</a>
            </div>
            <p className="n-o-tem-uma-conta">
              <span className="text-wrapper-17">Não tem uma conta? </span>
              <a className="text-wrapper-18" href="/SignUp">
                Inscreva-se!
              </a>
            </p>
            <p className="text-wrapper-19">Faça login na sua conta</p>
            <img className="male-user" alt="Male user" src={userIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage