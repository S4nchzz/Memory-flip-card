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
        <div className="tablero">
            <Carta tipo={tipoCartaAleatorio()}/>
            <Carta tipo={tipoCartaAleatorio()}/>
            <Carta tipo={tipoCartaAleatorio()}/>
            <Carta tipo={tipoCartaAleatorio()}/>
            <Carta tipo={tipoCartaAleatorio()}/>
            <Carta tipo={tipoCartaAleatorio()}/>
            <Carta tipo={tipoCartaAleatorio()}/>
            <Carta tipo={tipoCartaAleatorio()}/>
        </div>
    )
}

export default Tablero;