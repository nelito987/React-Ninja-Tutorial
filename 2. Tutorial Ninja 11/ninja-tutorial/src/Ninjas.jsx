import React from 'react';
import './App.css';

const Ninjas = ({ninjas, deleteNinja}) => {
        //const { ninjas } = props;
        const ninjaList = ninjas.map(ninja => {
            return ninja.age > 0 ? (
                 <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Eyes: {ninja.eyes}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete  ninja</button>
                    <br/>
                </div>
            ) : null;
        })

        return (
            <div className="ninja-list">
                { ninjaList }
            </div>
        );
}

export default Ninjas;
