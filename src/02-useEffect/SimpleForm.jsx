import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'belen@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {   
      // console.log('useEffect');
    }, []);                 // Solo se ejecuta una vez
    
    useEffect(() => {
        // console.log('formState Changed!');
    }, [formState]);        // Se va a disparar cuando cambie el formulario

    useEffect(() => {
        // console.log('email Changed!');
    }, [email]);            // Se va a disparar cuando cambie el email del form cambie

    return (
        <>
            <h1>Formulario simple</h1>
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

            {
                (username === 'strider2') && <Message /> 
            }

        </>
    )
}
