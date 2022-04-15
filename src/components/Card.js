function Card({ name, cost, image }) {

    return (
        <div className="border rounded-lg">
            <img src={image} alt="Burj Khalifa" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="w-full bg-white text-gray-600 rounded-b-lg">
                <div className="p-2 border-t font-bold truncate" title={name}>{name}</div>
                <div className="p-2 border-t flex items-center justify-between text-sm">
                    <label>Quantity: </label>
                    <input type="number" max="1000" min="0" className="border ml-2 w-full p-1 rounded" />
                </div>
                <div className="p-2 border-t flex items-center justify-between">
                    <label className="text-sm">Cost per piece: </label>
                    <span className="font-bold">{cost}</span>
                </div>
            </div>
        </div>
    )

}

export default Card;
