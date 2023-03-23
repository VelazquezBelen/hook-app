import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];  // si la data tiene un valor entonces toma la data de la pos 0
  // El !!null = false, transforma el null o undefinded a un valor booleano

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        (isLoading) 
        ? <LoadingQuote /> 
        : <Quote quote={quote} author={author} />
      }

      <button disabled={isLoading} className="btn btn-primary" onClick={() => increment()}>
        Next quote
      </button>
    </>
  )
}
