import React from 'react';
import personalities from '../data/personalities.json';

function SelectPersonality() {
    return (
        <div className='w-full flex justify-center my-10'>
            <form>
                <div>
                    <select className='border p-2 mt-1 rounded text-gray-600'>
                        <option>-Select a Personality-</option>
                        {personalities.map(person => (
                            <option key={person.name}>
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
