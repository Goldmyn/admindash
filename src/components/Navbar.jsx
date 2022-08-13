import React from 'react'
import Card from './card/Card';

function Navbar() {
  return (
    <div>
        <div className='md:w-[250px] h-[91%] hidden overflow-hidden md:flex flex-col items-center justify-between px-3'>
            {/* Cards */}
            <div className='pt-12 pb-4 border-b border-grey-900 w-full space-y-4 max-h-[450px] overflow-y-scroll scrollbar-hide'>
                <Card type='mastercard' /> 
                <Card type='visa' />  
            </div>
            <div className='my-2 item-center justify-center flex w-full border-dashed border rounded-lg border-gray-400 py-3'>
              <button>Add Card</button>
            </div>
            {/* Footer */}
            <div className='pb-2 pt-[150px] px-3 flex flex-col space-y-4 items-start justify-between w-full h-full'>
              <div className='flex flex-col items-start justify-center w-full space-y-4 pb-6 border-b border-gray-900'>
                <a >Deposits</a>
                <a >Loyalty Program</a>
                <a >Loan</a>
              </div>
              <div className='space-y-3 text-black'>
                <h1 className='font-bold text-lg'>P2pBank</h1>
                <p className='text-sm'>2022 P2pBank license MIT from 8.13.2022</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar