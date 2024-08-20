import React, { useContext  } from 'react'
import { CartContext } from '../context/Context'

const Card = ({ obj }) => {


  const {cart, setCart} = useContext( CartContext );

  function handleAddToCart(){
    if( !cart.find( item => item.id===obj.id ) ){
      setCart( [...cart, {...obj, price: (obj.price/10).toFixed(2) , quantity: 1}] );
    }
  }


  return (
    <div className='w-[31%] p-2 bg-slate-50 rounded-md hover:shadow-lg border'>

      <div className='w- '>
        <img src={obj.imageurl} alt="img" className='w-full h-[30vh] rounded-md object-cover object-top ' />
      </div>
      <div className='flex justify-between py-2'>

        <h4>{obj.name}</h4>
        <p className='text-red-500 font-bold'> ${(obj.price / 10).toFixed(2)} </p>
      </div>

      <button onClick={handleAddToCart} className='w-full py-2 bg-amber-400 text-zinc-50 font-medium rounded-md hover:bg-amber-500 cursor-pointer'> Add To Cart </button>
    
    </div>
  )
}

export default Card