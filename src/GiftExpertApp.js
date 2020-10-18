import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () =>{

//const categories = ['One punch','Shaman King','Dragon Ball']
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () =>{
    //     //Primero forma
    //     setCategories([...categories,'HunterXHunter']);

    //     //Segunda Forma
    //    // setCategories(cate => [...cate,'HunterXHunter']);
    // }
    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />   
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </>
    );
}

export default GiftExpertApp;