import "./App.css";
import Testimonio from "./components/Testimonios";
import testimonios_db  from "./db/testimonios";

function App() {
    return (
        <div className="App">
            <div className="contenedor-principal">
                <h1>
                    Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
                </h1>
                <Testimonio 
                    {...testimonios_db[0]}                
                />
                <Testimonio 
                    {...testimonios_db[1]}
                />
                <Testimonio 
                    {...testimonios_db[2]}
                />
            </div>
        </div>
    );
}

export default App;
