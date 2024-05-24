import { useContext } from "react";
import { Vegeterian } from "../store/PizzaData";
import { NonVegeterian } from "../store/PizzaData";
import { Combos } from "../store/PizzaData";

import ItemContext from "../store/ItemContext";

import '../styles/Items.css'

const Items = () => {

  const itemCtx = useContext(ItemContext);

  const addHandler = (item) => {
    itemCtx.addItem(item);
  }



  return (
    <div className="items-section">
      <h1>Veg Section</h1>
      <div className="veg-section">
        {Vegeterian.map((pizza) => (
          <div key={pizza.id} className="pizza-item">
            <img src={pizza.image} alt="" />
            <h2>{pizza.pizzaName}</h2>
            <span className="item-add-delete"
              onClick={() => addHandler(pizza)}>
              <p>{pizza.price}</p>
              <span
                className="add">
                Add Item
              </span>
            </span>
          </div>
        ))}
      </div>
      <h1>Non Veg Section</h1>
      <div className="non-veg-section">
        {NonVegeterian.map((pizza) => (
          <div key={pizza.id} className="pizza-item">
            <img src={pizza.image} alt="" />
            <h2>{pizza.pizzaName}</h2>
            <span className="item-add-delete"
              onClick={() => addHandler(pizza)}>
              <p>{pizza.price}</p>
              <span
                className="add">
                Add Item
              </span>
            </span>
          </div>
        ))}
      </div>
      <h1>Combo Section</h1>
      <div className="combo-section">
        {Combos.map((pizza) => (
          <div key={pizza.id} className="pizza-item">
            <img src={pizza.image} alt="" />
            <h2>{pizza.pizzaName}</h2>
            <span className="item-add-delete"
              onClick={() => addHandler(pizza)}>
              <p>{pizza.price}</p>
              <span
                className="add">
                Add Item
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Items
