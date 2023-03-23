import { useState } from "react";

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,   // Devuelve las variables del form, me evito hacer la reestructuracion después
        formState,
        onInputChange,
        onResetForm,
    }
}
