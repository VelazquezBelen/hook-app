import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            setCoords({x, y});
        }

        window.addEventListener( 'mousemove', onMouseMove );
    
        return () => {
            window.removeEventListener( 'mousemove', onMouseMove );
            // Si no remuevo el listener el evento queda activo y va a querer
            // cambiar el estado del componente coords que no existe
        }
    }, [])
    
    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify(coords) }
        </>
    )
}
