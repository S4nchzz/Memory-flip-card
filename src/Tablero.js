import { useEffect, useState } from "react"
import Carta from "./Carta"

function Tablero({tamano}) {
    const tipos = ["asDeCorazones.png", "asDeDiamantes.png", "asDePicas.png", "asDeTreboles.png"]
    const tiposCartas = [0, 0, 0, 0]

    const [aleatorizedTypes, setAleatorizedTypes] = useState([]);

    useEffect(() => {
            let aleatorios_aux=[];

            for (let i = 0; i < 8; i++) {
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);
                aleatorios_aux = generateAleatorizedValues(aleatorios_aux);

            }
            if (aleatorios_aux.length >= 8) {
                setAleatorizedTypes(aleatorios_aux);
            }
    },[]);

    const generateAleatorizedValues = (aleatorios_aux) => {
        let cartasDefinidas = false;
        
        let i;
        for (i = 0; i < tiposCartas.length; i++) {
            if (tiposCartas[i] < 2) {
                cartasDefinidas = true;
            }
        }

        if (cartasDefinidas) {
            let ranN = Math.floor(Math.random() * 4)
                
            while (tiposCartas[ranN] >= 2) {            
                ranN = Math.floor(Math.random() * 4)
            }
    
            tiposCartas[ranN] += 1;
            aleatorios_aux = [...aleatorios_aux, tipos[ranN]];
            return aleatorios_aux;
        }

        return aleatorios_aux;
    }
    

    const [nCartasGiradas, setNCartasGiradas] = useState(0);
    const [tipoIntCartasPresionadas, setTipoIntCartasPresionadas] = useState([]);
    const [cartas, setCartas] = useState([])
    const [visibilidades, setVisibilidades] = useState(Array(8).fill(false));


    const comprobarElementos = (e) => {
        setNCartasGiradas(nCartasGiradas + 1);
        setCartas([...cartas, e]);
        const visibilidades_aux = []

        if (nCartasGiradas === 2) {
            if ((tipoIntCartasPresionadas.length === 2 && tipoIntCartasPresionadas[0] === tipoIntCartasPresionadas[1]) && (tipoIntCartasPresionadas[0] !== -1 && tipoIntCartasPresionadas[1] !== -1)) {
                // Mismas cartas
                
                cartas.forEach(c => {
                    visibilidades_aux[c.id] = true;
                })

            }
            setTipoIntCartasPresionadas([])
            setVisibilidades(visibilidades_aux)
            setCartas([])
            return;
        }

        switch(e.cardImage) {
            case "asDeCorazones.png":
                setTipoIntCartasPresionadas([...tipoIntCartasPresionadas, 1])                
                break;
            case "asDeDiamantes.png":
                setTipoIntCartasPresionadas([...tipoIntCartasPresionadas, 2])                
                break;
            case "asDePicas.png":
                setTipoIntCartasPresionadas([...tipoIntCartasPresionadas, 3])                
                break;
            case "asDeTreboles.png":
                setTipoIntCartasPresionadas([...tipoIntCartasPresionadas, 4])                
                break;
            default:
                setTipoIntCartasPresionadas([...tipoIntCartasPresionadas, -1])                
                break;
        }

        
        
    }

    
    return (
        <div className="App">
            <div className="tablero">
                <div className="row">
                    <Carta id="0" tipo={aleatorizedTypes[0]} hidden={visibilidades[0]}comprobarElemento={comprobarElementos}/>
                    <Carta id="1" tipo={aleatorizedTypes[1]} hidden={visibilidades[1]}comprobarElemento={comprobarElementos}/>
                    <Carta id="2" tipo={aleatorizedTypes[2]} hidden={visibilidades[2]}comprobarElemento={comprobarElementos}/>
                    <Carta id="3" tipo={aleatorizedTypes[3]} hidden={visibilidades[3]}comprobarElemento={comprobarElementos}/>
                </div>
                <div className="row">
                    <Carta id="4" tipo={aleatorizedTypes[4]} hidden={visibilidades[4]}comprobarElemento={comprobarElementos}/>
                    <Carta id="5" tipo={aleatorizedTypes[5]} hidden={visibilidades[5]}comprobarElemento={comprobarElementos}/>
                    <Carta id="6" tipo={aleatorizedTypes[6]} hidden={visibilidades[6]}comprobarElemento={comprobarElementos}/>
                    <Carta id="7" tipo={aleatorizedTypes[7]} hidden={visibilidades[7]}comprobarElemento={comprobarElementos}/>
                </div>
            </div>
        </div>
    )
}

export default Tablero;