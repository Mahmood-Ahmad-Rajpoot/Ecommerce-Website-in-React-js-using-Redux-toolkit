import React from 'react'
import FavouriteStructure from './FavouriteStructure';
import { useSelector } from 'react-redux';
import EmptyFavourite from './EmptyFavourite';

const FavouriteItems = () => {
    const {products, isfav} = useSelector((store)=>store.favouriteProducts)

  return (
    <div className='col-12 d-flex flex-wrap'>
        { 
        products.map((p, ind) => {
           
          return (
            <div className='p-2 col-lg-4 col-md-6 col-sm-12 col-12'>
            <FavouriteStructure key={ind} product={p}  ind={ind}/>

            </div>
          );
        })}
    </div>
  )
}

export default FavouriteItems