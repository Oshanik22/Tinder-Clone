import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@material-ui/core';
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete)=>{
        console.log("removing: "+nameToDelete)
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                people.map((person)=>(
                    <TinderCard
                        className="swipe"
                        key = {person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >    
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
            
        </div>
    )
}

export default TinderCards 


/*

json for post request
[
        {
            "name": "Daenerys Targaryen",
            "imgUrl": "https://c4.wallpaperflare.com/wallpaper/414/301/201/game-of-thrones-5k-4k-8k-wallpaper-preview.jpg"
        },
        {
            "name": "Rachel Green",
            "imgUrl": "https://s1.r29static.com/bin/entry/aeb/430x516,85/1356319/image.webp"
        },
        {
            "name": "Monica Geller",
            "imgUrl": "https://i.pinimg.com/564x/27/3e/f2/273ef299637dcff525f246f6f808715d.jpg"
        },
        {
            "name": "Pheobe Buffay",
            "imgUrl": "https://i.ytimg.com/vi/syxbHuZY6lU/maxresdefault.jpg"
        }
]

*/ 