import React from 'react'
import Styles from './Favourite.module.css'
import FavouriteItems from './FavouriteItems'
import EmptyFavourite from './EmptyFavourite'
import { useSelector } from 'react-redux'
 const Favourite = () => {
  const {products} = useSelector((store)=>store.favouriteProducts)

  return (
    <div className={Styles.FavouriteMainDiv}>
     { products.length === 0 ? <EmptyFavourite/>:<FavouriteItems/>}
    </div>
  )
}

export default Favourite