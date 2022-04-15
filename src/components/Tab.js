import { useEffect, useState } from "react";

function Tab({ children, setTab }) {

    const [activeTab, setActiveTab] = useState('shop');

    useEffect(() => {

        setTab(activeTab)

    }, [activeTab]);

    return (
        <div className="w-full">
            <button
                onClick={() => setActiveTab('shop')}
                className={`border-tranparent py-2 cursor-pointer px-4 ${activeTab === 'shop' ? 'bg-gray-400 text-white rounded-t-lg' : ''}`}>Shop</button>
            <button
                onClick={() => setActiveTab('cart')}
                className={`border-tranparent py-2 cursor-pointer px-4 ${activeTab === 'cart' ? 'bg-gray-400 text-white rounded-t-lg' : ''}`}>Your Cart</button>
            <div className="block p-2 border w-full">
                {children}
            </div>
        </div>
    )

}

export default Tab;
