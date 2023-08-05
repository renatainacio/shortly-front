import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import api from "../services/Api";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      return alert("A senha e a confirmação de senha devem ser iguais!");
    }
    const data = { ...formData };
    const promise = api.signUp(data);
    promise.then(() => {
      setLoading(false);
      navigate("/signin");
    });
    promise.catch((err) => {
      setLoading(false);
      alert(err.response.data);
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          placeholder="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          placeholder="Senha"
          name="password"
          type="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          placeholder="Confirmar Senha"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <button
          disabled={
            loading ||
            !formData.email ||
            !formData.name ||
            !formData.password ||
            !formData.confirmPassword
          }
        >
          Criar Conta
        </button>
      </form>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.main`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: calc(100vh - 285px);
  padding: 25px;
`;

