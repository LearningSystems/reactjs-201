import React, {Component, useState} from 'react';
import './App.css';
import Person from "./Person/Person";


const App = () => {
    const [personState, setPersonsState] = useState({
        persons: [
            {name: "Sreedhar", age: 27},
            {name: "Max", age: 28},
            {name: "Stephene", age: 25}
        ]
    });

    const [showPerson, setShowPerson] = useState(false);

    const switchNameHandler = (newName: any) => {
        console.log("Data ", newName);
        console.log("Clicked on Name Switch Handlers");
        setPersonsState({
            persons: [
                {name: newName, age: 29},
                {name: "Max", age: 28},
                {name: "Stephene", age: 25}
            ]
        })
    };

    const nameChangeHandler = (event) => {
        setPersonsState({
            persons: [
                {name: "Sreedhar", age: 12},
                {name: event.target.value, age: 11},
                {name: "Swapna", age: 14}

            ]
        })
    };

    const togglePersonHandler = () => setShowPerson(showPerson == !setShowPerson);


    return (
        <div className="App">
            <h1>Hello World</h1>
            <p>This is really working!</p>
            <button onClick={togglePersonHandler}>Toggle Persons</button>
            {
                showPerson ?
                    <div>
                        <Person
                            name={personState.persons[0].name}
                            age={personState.persons[0].age}
                            changed={nameChangeHandler}
                        >
                        </Person>
                        <Person
                            name={personState.persons[1].name}
                            age={personState.persons[1].age}
                            click={switchNameHandler}
                            changed={nameChangeHandler}
                        >
                        </Person>
                        <Person
                            name={personState.persons[2].name}
                            age={personState.persons[2].age}
                            changed={nameChangeHandler}
                        >
                        </Person>
                    </div> : null
            }
        </div>

    )


}

export default App;
