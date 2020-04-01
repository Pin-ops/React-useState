import React,{useState} from 'react'

function HookCounterMultiple() {

    const [counter, setCounter] = useState(0)



    // önceki state e bagimli ise counter +1 yerine önceki state e bir parametre tanimlayip onunla islem yapilir. Yazilan parametre state de ki degiskenin eski halini temsil eder

    const increaseCounter = () => {
        setCounter ( prevCounter => prevCounter + 1 )
    }


    const decreaseCounter = () => {
        // setCounter ( counter - 1)
        setCounter ( x => x - 1)
    }

    const resetCounter = () =>{
        setCounter (0)
    }

    const increaseCounterFive = () => {
        // setCounter(counter + 5)

        // for (let i = 0; i < 5; i++) {
        //     setCounter( counter + 1);
        // }

        // DOGRU YAZILIM
        // setCounter ( prevCounter => prevCounter + 5)

        for (let i = 0; i < 5; i++) {
            setCounter( prevCounter => prevCounter + 1 );
        }
    }


    return (
        <div className="App">
            <p> Counter: {counter}</p>
            <button onClick= {increaseCounter}> Increase with Hook</button>
            <button onClick= {decreaseCounter}> Decrease with Hook</button>
            <button onClick= {resetCounter}> Reset with Hook</button>
            <button onClick= {increaseCounterFive}> Increase 5 with Hook </button>
        </div>
    )
}

export default HookCounterMultiple
