import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchGifs(category);

    // //Se ejecuta el metodo getGif cuando el componente se renderiza por primera vez
    // useEffect( ()=> {
    //     getGifs(category)
    //         .then(setimages)
    // }, [category])  
    // getGif();

    return (
            <>
                <h3 className="animate__animated animate__fadeIn">{category}</h3>
                
                {loading && <p className="animate__animated animate__flash">Loadings...</p> }
                
                <div className="card-grid">
                    {
                        //clasica
                        //   images.map(img => {
                        //     return(<li key={img.id}>{img.title}</li>)
                        //   })

                        //mejor
                        images.map(img => (
                        <GifGridItem 
                                key={img.id}
                                {...img} 
                            /> 
                        ))
                    }
                
                </div>
            </>
    )
}
