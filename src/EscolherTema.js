import React, {useState} from "react";
import TemaApp from "./TemaEstilos";

const SignupForm = () => {
    const[Modo, setModo] = useState("light");

    return(
        <div style={TemaApp[Modo+"Container"]}>
		<div style={TemaApp[Modo]}>
		<h1> Cadastre-se para receber nossas Notícias!</h1>
		<input value="Digite seu E-mail..." />
		<button>Cadastrar</button>
		<p/>
</div>
            <button
                style={TemaApp[Modo+"Button"]}
                onClick={() => setModo(Modo === "light"? "dark": "light")}>   
					{Modo === "light" ? "Dark Mode" : "Light Mode"}</button>				
        </div>
    );
}
function Principal() {
  return(
    
       <SignupForm/>
    
  );
}
export default Principal;