import React from 'react'

function Logo() {
    return (
        <div className='flex flex-col items-center justify-center p-5 bg-red-100 text-3xl font-bold'>
            <span className='py-2 px-6 bg-red-200 rounded-full'>SPEND THE MONEY</span>
            <div className='text-lg text-gray-600 mt-2'>A fun website to simulate the spending of rich people's money</div>
        </div>
    )
}

export default Logo;
