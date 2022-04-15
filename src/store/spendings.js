import { createContext, useEffect, useState } from "react";

const SpendingsContext = createContext({
    cart: [],
    totalWorth: 0,
    balance: 0,
    personality: '',
    spend: (payload) => { },
    setTotalWorth: (payload) => { },
    setBalance: (payload) => { },
    setPersonality: (payload) => { },
    setCart: (payload) => { }
});

export const SpendingsContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [totalWorth, setTotalWorth] = useState(0);
    const [balance, setBalance] = useState(0);
    const [personality, setPersonality] = useState('');

    useEffect(() => {

        const currentCost = cart.reduce((p, c) => {
            return p + (c.cost * c.quantity);
        }, 0);

        setBalance(totalWorth - currentCost);

    }, [cart]);

    const spendHandler = (payload) => {
        let item = cart.find(elem => elem.name === payload.name);

        if (!item) {
            setCart([...cart, payload]);
        } else if (payload.quantity === 0) {
            setCart([...cart.filter(elem => elem.name !== payload.name)])
        } else {
            setCart([...cart.map(elem => {
                if (elem.name === payload.name) {
                    elem.quantity = payload.quantity;
                }
                return elem;
            })])
        }
    }

    const context = {
        cart,
        totalWorth,
        balance,
        personality,
        spend: spendHandler,
        setTotalWorth,
        setBalance,
        setPersonality,
        setCart
    }
    return (
        <SpendingsContext.Provider value={context}>
            {props.children}
        </SpendingsContext.Provider>
    )
}

export default SpendingsContext;
