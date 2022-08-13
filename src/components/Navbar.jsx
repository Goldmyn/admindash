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
        </div>
    </div>
  );
}

export default Navbar