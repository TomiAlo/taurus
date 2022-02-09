import { useState } from "react";

const ItemCount = () => {

    const [items, setItems] = useState(1);

    const sumar = () => {
        if (items<5) {
            setItems(items + 1);
        }        
    }
    const restar = () => {
        if (items>1) {
            setItems(items - 1);
        }
    }

    return (
        <div className="itemCount">
            <p>{items} carrito</p>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
        </div>
    );
}

export default ItemCount;