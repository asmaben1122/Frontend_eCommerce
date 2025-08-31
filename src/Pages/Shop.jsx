import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Polpular } from '../Components/Popular/Polpular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { Newsletter } from '../Components/Newsletter/Newsletter'


export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Polpular/>
        <Offers/>
        <NewCollections/>
        <Newsletter/>
    </div>
  )
}
