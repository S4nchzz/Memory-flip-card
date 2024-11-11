import React, {useState} from "react";

function Carta (tipo){
    let flipada = false;

    const [flipped, setFlipped] = useState("flipped.png");

    function flipaduqui(){
        if (flipada === false){
            setFlipped("flipped.png");
            flipada = !flipada;
        } else {
            setFlipped(tipo);        
        }
    }
    return (
        <div>
            <img src={flipped} onClick={flipaduqui()}></img>
        </div>
    )

}
export default Carta; 