import React, {useState} from 'react'

function HookArray() {

    // const [items, setItems] = useState([]) bos array tanimlamasi

    const initialArray = [5, 6, 11]
    const [numbers, setNumbers] = useState(initialArray)

    const addNumber = () => {
       setNumbers([
                    ...numbers, //numbers arrayinin initial elemanlarini tutup yenilerini ekler(öncekini kopyalama islemi)
                    Math.floor(Math.random() * 10 + 1)
                  ]  //.push yöntemi gibi calisir.
                  )
    }

    // const deleteNumber = () => {
    //     setNumbers (
    //        [...numbers, numbers.pop() ]
    //     )
    // }

    return (
        <div>
            <button onClick= {addNumber}> Add a Number </button>
            <ul>
                {
                    numbers.map( (item,index) => <li key={index}> {item} </li>)
                }
            </ul>
{/*             <button onClick= {deleteNumber}>Delete a Number</button>
 */}        </div>
    )
}

export default HookArray
