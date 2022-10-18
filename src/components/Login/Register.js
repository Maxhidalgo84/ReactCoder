import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState()
    const { signUp } = useAuthContext();
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
        setError("")
        try {
            await signUp(user.email, user.password);
            navigate("/");
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                setError("El correo es invalido")
            }
            if (error.code === "auth/email-already-in-use") {
                setError("Este correo ya esta en uso");
            }
        }
    }