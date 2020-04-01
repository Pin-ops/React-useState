import React, {useState} from 'react'

function HookObject() {

    const [person, setPerson] = useState({
        name:'Pinar',
        surname:'Özmen'
    })

    return (
        <div className="App">
{/*             <p> Name : {person.name}</p>
                <p>Surname: {person.surname}</p> */}
            <form >
                Name: <input  type="text"
                        value={person.name}
                        onChange = { e => setPerson({...person, name : e.target.value}) }
                       />
                <br/>
                Surname: <input  type="text"
                        value={person.surname}
                        onChange = { e => setPerson({...person, surname : e.target.value})}
                       />
            </form>
            <h2>Your name : {person.name}</h2>
            <h2>Your surname : {person.surname}</h2>
            <h3> {JSON.stringify(person)} </h3>
        </div>
    )
}

export default HookObject
