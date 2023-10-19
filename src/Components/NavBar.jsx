import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import getpokemonGeneration from '../Services/pokemonGeneration';
import { UseParams} from 'react-router-dom'
import pokemonGeneration from '../Services/pokemonGeneration';

const NavBar = () => {
    const [genepoke, setGenepoke] = useState([])
    const fetchGeneration = async () => {
        try {
            const response = await pokemonGeneration.getGeneration() //Le même nom avant le point que dans l'import pokemonGeneration
            setGenepoke(response.data.results)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchGeneration()
     }, []);

    
    return <>
        
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Générations
      </Dropdown.Toggle>

      <Dropdown.Menu>
                {genepoke.map(g => {
                        console.log(g)
                        return <Dropdown.Item href="/Pages/PokemonGeneration">{genepoke.name}</Dropdown.Item>
                    })}
        
        
        
      </Dropdown.Menu>
    </Dropdown>
  ;

   </>
   
}  

 
export default NavBar;