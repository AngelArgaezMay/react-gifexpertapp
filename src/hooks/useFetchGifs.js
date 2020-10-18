import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) =>{

    const [state, setstate] = useState({
        data: [],
        loading:true
    });

     // //Se ejecuta el metodo getGif cuando el componente se renderiza por primera vez
     //No pueden ser async los
    useEffect( ()=> {
        getGifs(category)
        .then(imgs => {
            setstate({
                data: imgs,
                loading:false
            }); 
        })
    }, [category])  

    return state; //state es un arreglo
}