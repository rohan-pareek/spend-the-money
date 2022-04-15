import { useContext } from "react";
import SpendingsContext from "../store/spendings";

function Card({ name, cost, image }) {

    const { spend } = useContext(SpendingsContext);

    const changeHandler = (e) => {
        const payload = {
            name,
            cost,
            image,
            quantity: e.target.value !== "" ? parseInt(e.target.value) : 0
        }
        spend(payload)
    }

    return (
        <div className="border rounded-lg">
            <img src={image} alt="Burj Khalifa" className="w-full h-64 object-cover rounded-t-lg" loading="lazy" />
            <div className="w-full bg-white text-gray-600 rounded-b-lg">
                <div className="p-2 border-t font-bold truncate" title={name}>{name}</div>
                <div className="p-2 border-t flex items-center justify-between text-sm">
                    <label>Quantity:</label>
                    <input type="number" max="500" min="0" className="border ml-2 p-1 rounded" onChange={changeHandler} />
                </div>
                <div className="p-2 border-t flex items-center justify-between">
                    <label className="text-sm">Cost per piece: </label>
                    <span className="font-bold">&#8377; {cost}</span>
                </div>
            </div>
        </div>
    )

}

export default Card;
