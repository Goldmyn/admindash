import React from 'react'
import { container_logo, container_logo2, settings_icon, pie_icon, pay_icon } from '../utils/svgs';

function Content() {
  return (
    <div className='w-full h-[90hv] space-x-4 items-center justify-center grid grid-cols-2 xl:grid-cols-3'>
        {/* Left Section */}
        <div className='items-center justify-center flex flex-cols col-span-2 h-full py-2 px-3 w-full space-y-4'>
            {/* Upper Section*/}
            <div className='pb-1 pt-12 px-3 w-full space-y-8'>
                {/* Title & Icons */}
                <div className='py-1 px-2 items-center justify-center w-full flex'>
                    <h1 className='flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-black'>
                        Mastercard Gold
                    </h1>
                    <div className='flex items-end justify-end w-full space-x-4'>
                        <div className=''>
                            {container_logo}
                        </div>
                        <div>
                        {container_logo2}
                        </div>
                    </div>
                </div>
                {/* Center Part*/}
                <div className='pb-2 pt-4 px-3 items-center justify-center grid grid-cols-2 xl:grid-cols-4 w-full'>
                    <div className='xl:col-span-1 col-span-2 px-3 py-2 bg-[#F8F8F8] rounded-lg flex items-center w-full justify-between'>
                        <div className='flex flex-col items-center justify-center w-full px-4 py-2'>
                            <h1 className='text-start items-start justify-start  flex w-full font-bold text-black text-xl'>
                                {''}
                                ...7738{''}
                            </h1>
                            <div className='flex w-full items-center justify-between space-x-4'>
                                <p> 01 / 22</p>
                                <p className='text-[#3C45A0]'> CVV code</p>
                            </div>
                        </div>
                        <div>
                            {settings_icon}
                        </div>
                    </div>
                    <div className='py-3 px-3 w-full xl:col-span-3 col-span-3 col-span-2 xl:flex items-center justify-between xl:space-y-0 space-y-0 space-y-4 xl:space-x-4'>
                        <div className='w-full items-start justify-start xl:items-center xl:justify-center flex flex-col'>
                            <h1 className='font-medium text-gray-500'>
                                Cash Available
                            </h1>
                            <h1 className='text-2xl font-bold'>
                                $ 90,540
                            </h1>
                        </div>
                        <div className='w-full items-start justify-start xl:items-center xl:justify-center flex flex-col'>
                            <h1 className='font-medium text-gray-500'>
                                Credit Limit
                            </h1>
                            <h1 className='text-2xl font-bold'>
                                $ 180,000
                            </h1>
                        </div>
                        <div className='w-full items-start justify-start xl:items-center xl:justify-center flex flex-col'>
                            <h1 className='font-medium text-gray-500'>
                                Debt
                            </h1>
                            <h1 className='text-2xl font-bold'>
                                $ 11,700
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='px-3 w-full items-center justify-center flex'>
                    <div className='py-4 px-6 w-full items-center justify-between xl:space-y-0 space-y-6 lg:flex bg-[#F8F8F8] rounded-lg'>
                        {pie_icon}
                        <div className='lg:flex justify-between items-center lg:space-x-12'>
                            <div className='space-y-2'>
                                <h1 className='font-medium text-gray-500 text-lg'>
                                    PiggyBank
                                </h1>
                                <h1 className='font-bold text-2xl'>
                                    $ 222,111
                                </h1>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-medium text-gray-500 text-lg'>
                                    Payment
                                </h1>
                                <h1 className='font-bold text-2xl'>
                                    $ 9,000
                                </h1>
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full items-start justify-start lg:items-end lg:items-end lg:justify-end flex lg:space-x-4'>
                            {pay_icon}
                            <button className='bg-black smooth hover:bg-blue-100 hover:text-blue-900 hover:border-grey-900 text-gray-200 py-3 px-8 border border-transparent rounded-md'>
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Lower Section*/}
            <div className='py-1 px-3 w-full h-full'>
                <Statistics />
            </div>
        </div>
        {/* Right Section*/}
        <div className='col-span-1 h-full xl:flex xl:flex-col hidden space-y-6 py-2 px-6 py-2 px-6 w-full'>
            <Transfer />
            <UpcomingBills />
        </div>
    </div>
  );
}

export default Content