import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'


const Recover = () => {

    const [emailToRecover, setEmailToRecover] = useState('')
    const [message, setMessage] = useState()
    const [error, setError] = useState()

    const { resetPassword } = useAuthContext()

    const handleChange = ({ target: { value } }) => {
        setEmailToRecover( value )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        setError("")
        try {
            await resetPassword(emailToRecover)
            setMessage("Se a enviado un correo a su cuenta")
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                setError("Correo invalido")
            }
            if (error.code === "auth/user-not-found") {
                setError("Usuario no encontrado")
            }
        }
    }
