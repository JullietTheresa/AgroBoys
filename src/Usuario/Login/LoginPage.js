import React, { useState } from "react";
import "./styleLogin.css";
import userIcon from '../../components/Images/Login/UserProfile.png';
import eyeIconOpen from "../../components/Images/Login/eye-open.png";
import eyeIconClosed from "../../components/Images/Login/eye-closed.png";

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [backendError, setBackendError] = useState('');


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value.includes('@'));
    setEmailValid(value.includes('.com'));
    setShowEmailError(false); // Reset email error when email is changed
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (!emailValid) { // Verifica se o email não é válido e não está vazio
      setShowEmailError(true);
      setTimeout(() => setShowEmailError(false), 4000);
    }

    if (!password) {
      setShowSubmitError(true);
      setTimeout(() => setShowSubmitError(false), 4000); // Hide submit error after 2 seconds
    }
    if (emailValid && password) {
      console.log( email, password)

      try {
        const response = await fetch("http://localhost:3000/api/verificaLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, senha: password }), // Envie os dados de login para o backend
        });
        if (!response.ok) {
          throw new Error("Erro ao enviar os dados para o backend");
          // Alerta de senha ou email incorretos
        }
        else {
          try {
            const confereRegiao = await fetch("http://localhost:3000/api/confereRegiao", {
              method: "GET",
            });
            if (!confereRegiao.ok) {
              console.log("Região vazia");
              window.location.href = '/'
            } else {
              console.log("Região preenchida.")
              console.log(`Dados enviados com sucesso para o backend: ${email} e ${password}`);
              window.location.href = "/controle";
            }
          } catch (error) {
            console.error("Erro:", error);
          }
        }
      } catch (error) {
        console.error("Erro:", error);
        setBackendError("E-mail ou senha incorretos.");
        setTimeout(() => setBackendError(''), 4000); // Clear error message after 4 seconds
      }

      try {
        const confereRegiao = await fetch("http://localhost:3000/api/confereRegiao", {
          method: "GET",
        });
        if (!confereRegiao.ok) {
          console.log("Região vazia");
          window.location.href = '/'
        } else {
          console.log("Região preenchida.")
        }
      } catch (error) {

      }


    }

  };

  return (
      <div className="login-page">
        <div className="div">
          <div className="header">
            <div className="overlap-group">
              <div className=".navbar-buttons">
                <div className="text-wrapper">TerraTech</div>
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
              <div className="text-wrapper-10">www.TerraTech.com</div>
              <div className="text-wrapper-11">Sobre TerraTech</div>
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
                <span className="text-wrapper-13">TerraTech</span>
              </p>
              <img className="place-marker" alt="Place marker" src="https://c.animaapp.com/ZUyH8RTL/img/place-marker@2x.png" />
            </div>
          </div>
          <div className="login">
            <div className="overlap-2">
              <div className="overlap-group-2">
                <input
                    type="text"
                    className="rectangle-3"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange} // Adicionando manipulador de evento para mudanças no email
                />
                <div className="text-wrapper-14">Email</div>
              </div>

              <div className="overlap-3">
                <input
                    type={showPassword ? "text" : "password"}
                    className="rectangle-3"
                    placeholder="Senha"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <img
                    className="password-toggle-1"
                    src={showPassword ? eyeIconOpen : eyeIconClosed}
                    alt="Toggle Password Visibility"
                    onClick={togglePasswordVisibility}
                />
                <div className="text-wrapper-15">Senha</div>
              </div>

              {showEmailError && <p className="error-message-1">Por favor, insira um e-mail válido.</p>}
              {showSubmitError && (!password) && <p className="error-message-2">Por favor, preencha o campo "senha" corretamente.</p>}
              {backendError && <p className="error-message-3">{backendError}</p>}

              <div className="overlap-4">
                <a className="rectangle-4" href="#">
                  <a className="text-wrapper-16" href="#" onClick={handleSubmit} disabled={!emailValid}>Login</a>
                </a>
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
}

export default LoginPage;
