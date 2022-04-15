import { useContext, useState } from "react";

import Card from "./Card";
import Tab from "./Tab";
import ItemList from '../data/items.json';
import SpendingsContext from "../store/spendings";

function Items() {

    const [activeTab, setActiveTab] = useState('shop');
    const { cart, personality } = useContext(SpendingsContext);

    if (!personality) return null;

    return (
        <div className="w-5/6 md:w-4/6 mx-auto my-20">
            <Tab setTab={(tab) => setActiveTab(tab)}>
                {activeTab === 'shop'
                    ? <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {ItemList.map(item => (
                            <Card key={item.name} name={item.name} cost={item.cost} image={item.image} />
                        ))}
                    </div>
                    : <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {cart.length === 0
                            ? <div>Cart is empty!</div>
                            : cart.map(item => (
                                <Card key={item.name} name={item.name} cost={item.cost} image={item.image} />
                            ))
                        }

                    </div>
                }
            </Tab>
        </div>
    )

}

export default Items;
