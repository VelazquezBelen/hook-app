import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  const { user } = useContext( UserContext );

    return (
      <>
          {/* Si el user existe imprime el name, sino nada */}
          <h1>HomePage <small>{ user?.name }</small></h1>
          <hr />

          <pre aria-label="pre">
            { JSON.stringify(user, null, 3) }
          </pre>
      </>
    )
}
  