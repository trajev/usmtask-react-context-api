import React, { useContext, useState, useCallback } from 'react'
import { CartContext } from '../context/Context'
import CardComponent from './CardComponent'
import { IoIosArrowForward } from "react-icons/io";
import Checkout from './Checkout';
import { Link, useLocation } from 'react-router-dom';



const BakraCart = ({ checkout, setCheckout }) => {

    const { cart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const [target, setTarget] = useState("/checkout");

    const handleCheckout = useCallback ( () => {
        if (target === "/checkout") {
            setTarget("/");
        } else {
            setTarget("/checkout");
        }
    } , [target] )

    return (

        <div className='w-[35%] flex flex-col gap-10 p-10'>
            <h1 className='text-3xl'>Bakra Cart</h1>
            <div className='flex flex-col gap-2'>

                {
                    (cart.length !== 0) ? cart.map(item => <CardComponent key={item.id} obj={item} />) : <p className='w-full text-zinc-600'>No Items Available...</p>
                }

            </div>

            {

                (cart.length !== 0) && (<div className='flex flex-col gap-2'>
                    <div className='w-full h-1 bg-zinc-700 rounded-full'></div>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-bold text-xl'>Total: <span className='font-medium italic'>${total.toFixed(2)}</span> </h2>
                        <Link to={target} onClick={handleCheckout} className='px-3 py-2 text-white bg-zinc-800 hover:bg-zinc-900 rounded-md font-medium flex items-center'>Proceed to Checkout <IoIosArrowForward className='font-bold mt-1' /> </Link>
                    </div>
                </div>)
            }
        </div>

    )
}

export default BakraCart