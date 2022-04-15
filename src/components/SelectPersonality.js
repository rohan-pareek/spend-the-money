import React, { useContext } from 'react';
import personalities from '../data/personalities.json';
import SpendingsContext from '../store/spendings';

function SelectPersonality() {

    const { setTotalWorth, setBalance, setPersonality, setCart } = useContext(SpendingsContext);

    const changeHandler = (e) => {
        setCart([]);
        const [name, worth] = e.target.value.split('-');

        setTotalWorth(worth);
        setBalance(worth);
        setPersonality(name);
    }

    return (
        <div className='w-full flex justify-center my-10'>
            <form>
                <div>
                    <select className='border p-2 mt-1 rounded text-gray-600' onChange={changeHandler}>
                        <option>-Select a Personality-</option>
                        {personalities.map(person => (
                            <option key={person.name} value={`${person.name}-${person.worth}`}>
                                {person.name} - [{person.worth}]
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SelectPersonality;
