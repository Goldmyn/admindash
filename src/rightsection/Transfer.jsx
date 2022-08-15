import React from 'react'
import { extend_logo } from '../utils/svgs';

function Transfer() {
  return (
    <div className='w-full flex flex-col items-center justify-center px-2 py-2'>
      <h1 className='text-md w-full py-6'>
        <b className='text-4xl'>Transfer </b> to Visa or MasterCard
      </h1>
      <div className='grid grid-cols-3 gap-4 w-full'>
        <div className='col-span-3 border-b border-gray space-x-4 flex items-center justify-between w-full py-3 px-3'>
          <h1 className='border-r self-center border-gray w-[25%]'> 
            From
          </h1>
          <h1 className='w-[50%] self-center'>
            MasterCard
          </h1>
          <h1 className='font-bold text-2xl w-[25%] items-end justify-end flex'>
            $30,420
          </h1>
        </div>
        <div className='col-span-3 border-b border-gray space-x-4 flex items-center justify-between w-full py-3 px-3'>
          <h1 className='border-r self-center border-gray w-[25%]'>
            To
          </h1>
          <h1 className='w-[50%] self-center'>
            990 4427 8473 9283
          </h1>
          <div className='w-[25%] items-end justify-end flex'>
            {extend_logo}
          </div>
        </div>

        <div className='col-span-3 space-x-4 flex items-center justify-between w-full py-3 px-3'>
          <div className='w-[40%] flex space-x-4 border-b border-gray py-4'>
            <h1 className=' border-r self-center border-gray w-full'>
              Amount
            </h1>
            <input className='w-full input' type='number' />
          </div>
          <div className='w-[40%] flex space-x-4 border-b border-gray py-4'>
            <h1 className='w-[40%] border-r self-center border-gray w-full'>
              CVV
            </h1>
            <input className='w-full input' type='number' />
          </div>
          <div className='w-[10%] smooth btn py-3 px-2 items-center justify-center flex '>
            <button className='bg-black smooth hover:bg-blue-100 hover:text-blue-900 hover:border-grey-900 text-gray-200 py-3 px-4 border border-transparent rounded-2xl'>{"Send"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer