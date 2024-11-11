function Tablero() {
    const tipos = ["asDeCorazones.png", "asDeDiamantes.png", "asDePicas.png", "asDeTreboles.png"]
    const tiposCartas = [0, 0, 0, 0]
    const tipoCartaAleatorio = () => {
        let ranN = Math.floor(Math.random() * 5)
        
        while (tiposCartas[ranN] >= 2) {            
            let ranN = Math.floor(Math.random() * 5)
        }

        tiposCartas[ranN] += 1;
        return tipos[ranN]
    }
    
    reutrn (
        <div className="tablero">
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
            <Carta tipo={tipoCartaAleatorio()} className="carta"/>
        </div>
    )
}

export default Tablero;