import React from 'react'
import Person from './Person'

const PersonList = () => {
    // const names = ['Nabendu', 'Shikha', 'Hriday'];
    // return names.map(name => <h1 key={name}>{name}</h1>);
    const persons = [
        { id: 1, name: 'Nabendu', age: 39, skill: 'ReactJS' },
        { id: 2, name: 'Shikha', age: 38, skill: 'JavaScript' },
        { id: 3, name: 'Hriday', age: 8, skill: 'HTML' }
    ];

    return persons.map(person => <Person key={person.id} person={person} />)
}

export default PersonList
