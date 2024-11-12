import Carta from "./Carta"

function Tablero({tamano}) {
    const tipos = ["asDeCorazones.png", "asDeDiamantes.png", "asDePicas.png", "asDeTreboles.png"]
    const tiposCartas = [0, 0, 0, 0]
    const tipoCartaAleatorio = () => {
        let ranN = Math.floor(Math.random() * 4)
        
        while (tiposCartas[ranN] >= 2) {            
            ranN = Math.floor(Math.random() * 4)
        }

        tiposCartas[ranN] += 1;
        return tipos[ranN]
    }
    
    return (
        <div className="App">
            <div className="tablero">
                <div className="row">
                    <Carta tipo={tipoCartaAleatorio()}/>
                    <Carta tipo={tipoCartaAleatorio()}/>
                    <Carta tipo={tipoCartaAleatorio()}/>
                    <Carta tipo={tipoCartaAleatorio()}/>
                </div>
                <div className="row">
                    <Carta tipo={tipoCartaAleatorio()}/>
                    <Carta tipo={tipoCartaAleatorio()}/>
                    <Carta tipo={tipoCartaAleatorio()}/>
                    <Carta tipo={tipoCartaAleatorio()}/>
                </div>
            </div>
        </div>
    )
}

export default Tablero;