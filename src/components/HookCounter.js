import React,{ useState } from 'react'

function HookCounter() {

    // state yazimi ==== const [ state yazilir(herhangi bir isim olabilir) ] = useState(initial state/baslangic degeri / object, array, number, string hersey olabilir)
    // counter : 0 yerine const [counter]= useState(0)
    // setCounter: methodumuz
    // useState: React componentimiz

    const [counter, setCounter] = useState(0)
    const [ city, setCity] = useState ('Düsseldorf')

    const decreaseHandler = () => {
        setCounter( counter - 1)
    }

    const reset = (e) =>{
        setCounter (e.target.value=0)
    }

    return (
        <div className="App">
            <p onClick={ () => setCity ('Istanbul')}>Click on {city} to change the city</p>
            <p> Counter : {counter}</p>
            <button onClick = {decreaseHandler}> Decrease with Hooks</button>
            <br/> <br/>
            <button onClick={reset}>Reset the counter</button>
        </div>
    )
}

export default HookCounter
