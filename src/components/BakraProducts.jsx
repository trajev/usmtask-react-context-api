import React from 'react'
import Data from '../utils/Data'
import Card from './Card'

const BakraProducts = () => {
  return (
    <div className='w-[65%] bg-zinc-50 p-10 flex flex-col gap-10'>
        <h1 className=' text-3xl'> Famous Bakra's</h1>
        <div className=' flex flex-wrap justify-start gap-7 '>

          {
            Data.map(item => <Card key={item.id} obj={item} />)
          }

        </div>
      </div>
  )
}

export default BakraProducts