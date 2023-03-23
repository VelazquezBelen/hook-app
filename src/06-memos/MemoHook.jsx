import { useMemo } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos... ');
    }
    return `${ iterationNumber } iteraciones realizadas`
}

export const MemoHook = () => {

    const{counter, increment} = useCounter(400);
    const [show, setShow] = useState(false);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small> { counter } </small></h1>
            <hr/>

            {/* <h4> { heavyStuff(counter) } </h4> Cada vez que se renderiza el componente se ejecuta,  */}
            {/* para evitar esto se utiliza el hook useMemo, de esta forma solo se ejecuta heaviStuff
            cuando cambie el valor del counter: */}
            <h4> { memorizedValue } </h4>

            <button
                className='btn btn-primary'
                onClick={ () => increment() }
            >   +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={ () => setShow(!show) }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
