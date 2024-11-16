import { useEffect, useState } from "react"
import Carta from "./Carta"

function Tablero({tamano, score, setScore, movements, setMovements}) {
    const tipos = ["asDeCorazones.png", "asDeDiamantes.png", "asDePicas.png", "asDeTreboles.png"]
    const tiposCartas = [0, 0, 0, 0]

    const [aleatorizedTypes, setAleatorizedTypes] = useState([]);

    useEffect(() => {
            let aleatorios_aux=[];

            for (let i = 0; i < 8; i++) {
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

    const [flipOnFail, setFlipOnFail] = useState(false);

    const comprobarElementos = (e) => {
        if (cartas.some(c => c.id === e.id)) {
            return;
        }
        
        const movements_aux = movements + 1;

        const currentCartasPressed_aux = [...cartas, e];
        let nCardsFliped_aux = nCartasGiradas + 1;
        const tipoCartasIntPresionadas_aux = []
        const visibilidades_aux = visibilidades
        
        switch(e.cardImage) {
            case "asDeCorazones.png":
                tipoCartasIntPresionadas_aux.push(...tipoIntCartasPresionadas, 1)                
                break;
            case "asDeDiamantes.png":
                tipoCartasIntPresionadas_aux.push(...tipoIntCartasPresionadas, 2)                
                break;
            case "asDePicas.png":
                tipoCartasIntPresionadas_aux.push(...tipoIntCartasPresionadas, 3)                
                break;
            case "asDeTreboles.png":
                tipoCartasIntPresionadas_aux.push(...tipoIntCartasPresionadas, 4)                
                break;
            default:
                tipoCartasIntPresionadas_aux.push(...tipoIntCartasPresionadas, 5)                
                break;
        }

        if (nCardsFliped_aux === 2) {
            if ((tipoCartasIntPresionadas_aux.length === 2 && tipoCartasIntPresionadas_aux[0] === tipoCartasIntPresionadas_aux[1]) && (tipoCartasIntPresionadas_aux[0] !== -1 && tipoCartasIntPresionadas_aux[1] !== -1)) {
                // Mismas cartas
                currentCartasPressed_aux.forEach(c => {
                    visibilidades_aux[c.id] = true
                })
                
                setScore(score + 1)
            } else {
                setTimeout(() => {
                    // Diferentes cartas, activar flipOnFail
                    setFlipOnFail(true);
    
                    setTimeout(() => {
                        setFlipOnFail(false);
                    }, 20); // Tiempo en ejecucion para que vuelva a cambiar el valor de true a false para evitar errores
                }, 300) // Tiempo que se mantendran las cartas visibles

                setCartas([]);
            }

            setTipoIntCartasPresionadas([])
            setVisibilidades(visibilidades_aux)
            setNCartasGiradas(0)
            setMovements(movements_aux)
            return;
        }
        
        // Se confirma la actualizacion de las variables con los valores que les corresponden usando las auxiliares
        // Estoy se hace debido a que aunque se haga una llamada al setter de una variable de useState esta no adquira
        // el valor que le corresponde en ese tiempo de ejecucion al instante, si no que esperara a que se renderize todo
        // el componente para actualizarla, al usar variables auxiliares las podemos programar para que tengan los valores
        // necesarios en ese punto de ejecucion y asi poder usar este mismo valor para pasarselo al setter y asi poder
        // actualizar las variables correspondientes con los valores adecuados usando estos mismos valores en el programa
        setNCartasGiradas(nCardsFliped_aux);
        setCartas(currentCartasPressed_aux);
        setTipoIntCartasPresionadas(tipoCartasIntPresionadas_aux)
    }
    
    return (
        <div className="App">
            <div className="tablero">
                <div className="row">
                    <Carta id="0" tipo={aleatorizedTypes[0]} hidden={visibilidades[0]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                    <Carta id="1" tipo={aleatorizedTypes[1]} hidden={visibilidades[1]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                    <Carta id="2" tipo={aleatorizedTypes[2]} hidden={visibilidades[2]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                    <Carta id="3" tipo={aleatorizedTypes[3]} hidden={visibilidades[3]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                </div>
                <div className="row">
                    <Carta id="4" tipo={aleatorizedTypes[4]} hidden={visibilidades[4]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                    <Carta id="5" tipo={aleatorizedTypes[5]} hidden={visibilidades[5]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                    <Carta id="6" tipo={aleatorizedTypes[6]} hidden={visibilidades[6]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                    <Carta id="7" tipo={aleatorizedTypes[7]} hidden={visibilidades[7]} comprobarElemento={comprobarElementos} flipOnFail={flipOnFail}/>
                </div>
            </div>
        </div>
    )
}

export default Tablero;