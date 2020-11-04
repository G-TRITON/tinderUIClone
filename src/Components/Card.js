import React, { useEffect, useState } from 'react';
import axios from '../axios';
import TinderCard from 'react-tinder-card';
import './card.css';

const Card = () => {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('/cards');
            setPeople(req.data);
        }
        fetchData();
    }, []);

   /* const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    const swiped = (dir, removeName) => {
        console.log("removing " + removeName);
    }*/
    
    return(
        <div className="personCard">
            <div className="card_container">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                       /* onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}*/
                    >
                        <div 
                            style={{backgroundImage: `url("${person.imgUrl}")`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Card;