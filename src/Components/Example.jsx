import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Example = props => {
    //Note the second argument is an empty array. We are only 
    const [responseData, setResponseData] = useState([]);
    const [fetched, setFetch] = useState(false);
    useEffect(()=>{
    if(fetched){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setResponseData(response.data.results)) ; 
    }       
    }, [fetched]); 

const onClickH = (e) =>{
    e.preventDefault();
    setFetch(true);
}

    return(
        <div>
            <form>
                <button onClick={onClickH} className="btn btn-secondary btn-lg m-2" type="submit">Fetch Pokemon</button>
            </form>
            {responseData.length > 0 && responseData.map((pokemon, index)=>{
                return (
                <div key={index}>
                    <li>{pokemon.name}</li>  
                </div>
                    )
            })}
        </div>
    )
}




export default Example;