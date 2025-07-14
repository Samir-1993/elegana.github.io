import React from 'react'
import { MainBanner } from '../Components/MainBanner/MainBanner'
import { BestSeller } from '../Components/BestSeller/BestSeller'
import { Collection } from '../Components/Collection/Collection'
import { ShopByCategory } from '../Components/ShopByCategory/ShopByCategory'
import { ProductMaterial } from '../Components/ProductMaterial/ProductMaterial'
import { FollowUs } from '../Components/FollowUs/FollowUs'

export const Home = () => {
  return (
    <>
      
      <MainBanner />
      <BestSeller />
      <Collection />
      <ShopByCategory />
      <FollowUs />
    </>
  )
}
