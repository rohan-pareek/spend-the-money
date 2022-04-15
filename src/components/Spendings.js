import React, { useContext } from 'react'
import SpendingsContext from '../store/spendings';

function Spendings() {
    const { totalWorth, balance, personality } = useContext(SpendingsContext);

    return (
        <div className='flex flex-col items-center'>
            {personality
                && <>
                    <h1 className='font-bold mb-2'>Spending Status of {personality}'s money</h1>
                    <table className='border-collapse table-auto text-sm border'>
                        <thead>
                            <tr>
                                <th className='border-b dark:border-slate-600 bg-gray-100 font-medium p-4 pl-8 pb-3 text-gray-500'>Total Worth</th>
                                <th className='border-b dark:border-slate-600 bg-gray-100 font-medium p-4 pl-8 pb-3 text-gray-500'>Balance Money</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white dark:bg-slate-800'>
                            <tr>
                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 font-bold text-center'>&#8377; {totalWorth}</td>
                                <td className={`border-b border-slate-100 dark:border-slate-700 p-4 pl-8 font-bold text-center ${balance <= 0 ? 'text-red-400' : ''}`}>&#8377; {balance}</td>
                            </tr>
                        </tbody>
                    </table>
                </>}
        </div>
    )
}

export default Spendings;
