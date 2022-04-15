import { useState } from "react";

import Card from "./Card";
import Tab from "./Tab";
import ItemList from '../data/items.json';

function Items() {

    const [activeTab, setActiveTab] = useState('shop');

    return (
        <div className="w-5/6 md:w-4/6 mx-auto my-20">
            <Tab setTab={(tab) => setActiveTab(tab)}>
                {activeTab === 'shop'
                    ?
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {ItemList.map(item => (
                            <Card key={item.name} name={item.name} cost={item.cost} image={item.image} />
                        ))}
                    </div>
                    : <h1>Cart</h1>
                }
            </Tab>
        </div>
    )

}

export default Items;
