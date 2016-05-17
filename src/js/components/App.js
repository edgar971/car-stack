import React from 'react'
import Header from './parts/Header'
import CarEntries from './parts/CarEntries'




class CarApp extends React.Component {

    constructor() {
        super();

    }

    render() {
        return(
            <main>
                <Header/>
                <CarEntries/>
            </main>
        );

    };

}


export default CarApp;