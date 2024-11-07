export default function Level({name, price, onClick}) {
    return (
        <div onClick={onClick} className="bg-amber-800 rounded-md p-2 m-2">
            <h2 className="text-center text-lg font-semibold">{name}</h2>
            <h2 className="text-center text-lg font-semibold">{price}</h2>
        </div>
    );
  }
  