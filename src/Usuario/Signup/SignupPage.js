import React, { useState } from "react";
import "./styleSignupPage.css";
import userIcon from '../../components/Images/Login/UserProfile.png';
import eyeIconClosed from '../../components/Images/Login/eye-closed.png';
import eyeIconOpen from '../../components/Images/Login/eye-open.png';

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false); // Estado para controlar a exibição da mensagem de erro ao enviar o formulário
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.slice(0, 11);
    setCpf(formatCpf(value));
  };

  const formatCpf = (value) => {
    return value.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
      (match, p1, p2, p3, p4) => {
        return (p1 ? p1 + '.' : '') + (p2 ? p2 + '.' : '') + (p3 ? p3 + '-' : '') + p4;
      }
    );
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value.includes('@'));
    setShowEmailError(false); // Reset email error when email is changed
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (!emailValid) {
      setShowEmailError(true);
      setTimeout(() => setShowEmailError(false), 4000); // Hide email error after 2 seconds
    }

    if (!cpf || !password || !confirmPassword) {
      setShowSubmitError(true);
      setTimeout(() => setShowSubmitError(false), 4000); // Hide submit error after 2 seconds
    }

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      setTimeout(() => setPasswordMatchError(false), 4000); // Hide password match error after 2 seconds
      return; // Impedir o envio do formulário se as senhas não coincidirem
    }

    if (emailValid && cpf && password && confirmPassword) {
      console.log(cpf, email, password)
      try {
        const response = await fetch("http://localhost:3000/api/salvaSignup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cpf: cpf, email: email, password: password }), // Envie o nome da cidade e os dados para o backend
        });
        if (!response.ok) {
          throw new Error("Erro ao enviar os dados para o backend");
        }
        console.log(`Dados enviados com sucesso para o backend: ${cpf}, ${email} e ${password}`);
        window.location.href = "/Login";
      } catch (error) {
        console.error("Erro:", error);
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <input
              type="text"
              className="rectangle"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="text-wrapper">Email</div>
          </div>
          <div className="overlap-2">
            <input
              type="text"
              className="rectangle"
              placeholder="CPF"
              inputMode="numeric"
              value={cpf}
              onChange={handleCpfChange}
            />
            <div className="text-wrapper-2">CPF</div>
          </div>
          <div className="overlap-4">
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                className="rectangle"
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
            </div>
            <div className="text-wrapper-2 password-label">Senha</div>
          </div>
          <div className="overlap-5">
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="rectangle"
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <img
                className="password-toggle-2"
                src={showConfirmPassword ? eyeIconOpen : eyeIconClosed}
                alt="Toggle Password Visibility"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            <div className="text-wrapper-2 password-label">Confirme a senha</div>
          </div>

          {showEmailError && <p className="error-message-1">Por favor, insira um e-mail válido.</p>}
          {showSubmitError && (!cpf || !password || !confirmPassword) && <p className="error-message-2">Por favor, preencha todos os campos corretamente.</p>}
          {passwordMatchError && <p className="error-message-3">As senhas não coincidem.</p>}

          <div className="overlap-3">
            <a className="rectangle-2" href="#" onClick={handleSubmit} disabled={!emailValid}/>
            <a className="text-wrapper-3" href="#" onClick={handleSubmit} disabled={!emailValid}>Inscreva-se</a>
          </div>

          <p className="j-usu-rio-login">
            <span className="span">Já é usuário? </span>
            <a className="text-wrapper-4" exact href="/Login">Login</a>
          </p>
          <div className="text-wrapper-5">Inscreva-se</div>
          <img className="male-user" alt="Male user" src={userIcon} />
        </div>
        <div className="overlap-6">
          <div className="navbar">
            <div className="text-wrapper-6">AgroBoys</div>
            <div className="navbar-buttons">
              <a className="text-wrapper-7" exact href="/">Home</a>
              <a className="text-wrapper-10" exact href="/Login">Login</a>
              <a className="text-wrapper-11" >SignUp</a>
            </div>
          </div>
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

export default SignupPage;