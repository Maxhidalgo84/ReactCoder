import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [error, setError] = useState()
  const { login, loginWithGoogle, loginWithGitHub } = useAuthContext();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("El correo es invalido")
      }
      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado")
      }
      if (error.code === "auth/wrong-password") {
        setError('La contraseña es incorrecta')
      }
      if (error.code === "auth/too-many-requests") {
        setError('La cuenta a sido deshabilitada temporalmente, realizo muchos intentos para ingresar. Resetea tu contraseña y se restaurara automaticamente')
      }
    }
  }