import React from "react";
import "./styleLogin.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="div">
        <div className="headder">
          <div className="overlap-group">
            <div className="text-wrapper">AgroBoys</div>
            <a className="text-wrapper-2" exact href="/">Home</a>
            <div className="text-wrapper-3">Products</div>
            <div className="text-wrapper-4">Contact</div>
            <div className="text-wrapper-5">Login</div>
            <div className="text-wrapper-6">SignUp</div>
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
            <img className="envelope" alt="Envelope" src="envelope.png" />
            <img className="hand-with-smartphone" alt="Hand with smartphone" src="hand-with-smartphone.png" />
            <img className="internet" alt="Internet" src="internet.png" />
            <img className="copyright" alt="Copyright" src="copyright.png" />
            <p className="copyright-2">
              <span className="span">copyright 2024 </span>
              <span className="text-wrapper-13">AgroBoys</span>
            </p>
            <img className="place-marker" alt="Place marker" src="place-marker.png" />
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
              <div className="rectangle-4" />
              <div className="text-wrapper-16">Login</div>
            </div>
            <p className="n-o-tem-uma-conta">
              <span className="text-wrapper-17">Não tem uma conta? </span>
              <a href="https://htmledit.squarefree.com/signup.html" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-18">Inscreva-se! </span>
              </a>
            </p>
            <p className="text-wrapper-19">Faça login na sua conta</p>
            <img className="male-user" alt="Male user" src="male-user.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage