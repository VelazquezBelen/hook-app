import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    /*
    useEffect(() => {   
       console.log('useEffect');
    }, []);                 // Solo se ejecuta una vez
    
    useEffect(() => {
        console.log('formState Changed!');
    }, [formState]);        // Se va a disparar cuando cambie el formulario

    useEffect(() => {
        console.log('email Changed!');
    }, [email]);            // Se va a disparar cuando cambie el email del form cambie
    */

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
