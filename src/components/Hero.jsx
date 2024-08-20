import React, {useContext, useState, useEffect} from 'react'
import BakraProducts from './BakraProducts'
import Checkout from './Checkout';
import BakraCart from './BakraCart';

const Hero = () => {

  // const [checkout, setCheckout] = useState( false );

  return (
    <div className='flex w-[65%]'>

     
      <BakraProducts />

    </div>
  )
}

export default Hero