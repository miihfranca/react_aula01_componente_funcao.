import React, { useState } from 'react';

export default function Contador(){
    const [i, setI] = useState(0);

    return (
        <div>
            <h1>Contador</h1>
            <p>Você clicou {i} vezes!</p>
            <button onClick={() => setI(i - 1)}>Decremento </button>  
            <button onClick={() => setI(i + 1)}>Incremento</button>
        </div>
    );

}