import React from "react";
import "./styleSignupPage.css";

export const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="text-wrapper">Email</div>
          </div>
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="text-wrapper-2">CPF</div>
          </div>
          <div className="overlap-3">
            <a className="rectangle-2" href="/controle" />
            <a className="text-wrapper-3" href="/controle">Inscreva-se</a>
          </div>
          <div className="overlap-4">
            <div className="rectangle" />
            <div className="text-wrapper-2">Senha</div>
          </div>
          <div className="overlap-5">
            <div className="rectangle" />
            <div className="text-wrapper-2">Confirme a senha</div>
          </div>
          <p className="j-usu-rio-login">
            <span className="span">Já é usuário? </span>
            <a className="text-wrapper-4" exact href="/Login">Login</a>
          </p>
          <div className="text-wrapper-5">Inscreva-se</div>
          <img className="male-user" alt="Male user" src="https://c.animaapp.com/SLqVIjJw/img/male-user@2x.png" />
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-6">AgroBoys</div>
          <a className="text-wrapper-7" exact href="/">Home</a>
          <a className="text-wrapper-10" exact href="/Login">Login</a>
          <div className="text-wrapper-11">SignUp</div>
        </div>
        <div className="rotter">
          <div className="overlap-group-2">
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="text-wrapper-12">Location, street, 1234</div>
            <div className="text-wrapper-13">Email@gmail.com</div>
            <div className="text-wrapper-14">+55 (61) 999123456</div>
            <div className="text-wrapper-15">www.AgroBoys.com</div>
            <div className="text-wrapper-16">Sobre AgroBoys</div>
            <div className="text-wrapper-17">Contacts</div>
            <p className="p">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/SLqVIjJw/img/envelope@2x.png" />
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/SLqVIjJw/img/hand-with-smartphone@2x.png"
            />
            <img className="internet" alt="Internet" src="https://c.animaapp.com/SLqVIjJw/img/internet@2x.png" />
            <img className="copyright" alt="Copyright" src="https://c.animaapp.com/SLqVIjJw/img/copyright@2x.png" />
            <p className="copyright-2">
              <span className="text-wrapper-18">copyright 2024 </span>
              <span className="text-wrapper-4">AgroBoys</span>
            </p>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/SLqVIjJw/img/place-marker@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage