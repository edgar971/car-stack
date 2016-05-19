import React from 'react'
import Entry from './Entry'

class CarEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    title: 'Subaru WRX 2015',
                    description: 'Lorem ipsum dolor sit amet, mel quidam iudicabit ne, pri quot possit eligendi cu. At congue vidisse singulis mea, ea dictas equidem insolens vel. Eu paulo nullam sed, at accusam accusamus dissentiunt sit. Cu adhuc adipiscing nec, accusata dissentiunt ut ius.',
                    username: 'Edgar Pino'
                    
                },
                {
                    title: 'Super Cool Audi A4',
                    description: 'Tale dissentias ex mea, has numquam sanctus ei, te placerat urbanitas pri. Eam te assum appareat repudiandae, vim quem ridens suscipit in. Omnium integre aliquam vel no, eam ei essent expetendis cotidieque. Ad vis sale oportere. Ei sit choro nusquam scriptorem, ea mucius quidam eloquentiam mel. Nam scaevola atomorum in, ius viris tempor accommodare eu.',
                    username: 'Mario Perez'
                    
                }
            ]
        }
    }

    render() {
        var carEntries = this.state.entries.map((entry) => {
            return (
                <li>
                    <Entry title={entry.title} description={entry.description} username={entry.username}/>
                </li>
            )
        });

        return (
            <ul className="car-entries">
                {carEntries}
            </ul>
        )
    }


}
export default CarEntries;