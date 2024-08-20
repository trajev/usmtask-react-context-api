import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { CartContext } from '../context/Context';
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const CardComponent = ({ obj }) => {

    const { cart, setCart } = useContext(CartContext);

    function handleDelete() {
        setCart(cart.filter(item => item.id !== obj.id))
    }


    function handleIncrement() {
        // setCart( [...cart, cart.map(item => { return (item.id === obj.id) ? { ...item, quantity: item.quantity + 1 } : item } ) ] )
        setCart(cart.map(item => {
            if (item.id === obj.id) {
                return { ...obj, quantity: obj.quantity + 1 };
            } else {
                return item;
            }
        }))
    }


    function handleDecrement() {
        if( obj.quantity===1 ){
            setCart( cart.filter(item=>item.id!==obj.id) );
        } else {
            setCart( cart.map( item=>{
                if( item.id===obj.id ){
                    return {...item, quantity: item.quantity-1};
                } else {
                    return item;
                }
            }) );
        }
    }

    return (
        <div className='w-full rounded-md bg-amber-50 p-2 flex gap-3 shadow-md'>

            <div className='w-[20%]' >
                <img src={obj.imageurl} alt="img" className='h-[10vh] w-[6vw] object-cover object-top rounded-md' />
            </div >

            <div className='w-[40%] px-2 flex flex-col justify-center'>
                <h5 className='font-medium'>{obj.name}</h5>
                <p className='font-bold text-red-500'>${obj.price}</p>
            </div>

            <div className='w-[30%] text-lg flex items-center gap-2 justify-center '>
                <button onClick={handleIncrement}> <FaCirclePlus className='cursor-pointer' /> </button>
                <p className='font-medium'>{obj.quantity}</p>
                <button onClick={handleDecrement}> <FaCircleMinus className='cursor-pointer' /> </button>
            </div>

            <div className='w-[10%] flex items-center'>
                <button onClick={handleDelete} > <MdDelete className='text-3xl text-red-500 cursor-pointer' /> </button>
                {/* <p className='font-bold text-red-500'>${obj.price}</p> */}
            </div>


        </div >
    )
}

export default CardComponent