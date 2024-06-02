import onion from '../images/pizzas/tomatoes.png';
import margherita from '../images/pizzas/pizza-margherita.png';
import paneer from '../images/pizzas/paneer-pizza.png';
import tomato from '../images/pizzas/tomatoes.png';
import corn from '../images/pizzas/pizza-with-corn.png';

import chicken from '../images/pizzas/non-veg1.png';
import chicken_tomato from '../images/pizzas/non-veg2.png';

import combo1 from '../images/pizzas/combo3.png';

const Vegeterian = [
    {
        id: 1,
        pizzaName: 'Onion',
        price: 15,
        image: onion
    },
    {
        id: 2,
        pizzaName: 'Paneer & Onion',
        price: 25,
        image: paneer
    },
    {
        id: 3,
        pizzaName: 'Margherita',
        price: 20,
        image: margherita
    },
    {
        id: 4,
        pizzaName: 'Tomato',
        price: 10,
        image: tomato
    },
    {
        id: 5,
        pizzaName: 'Corn & Cheese',
        price: 45,
        image: corn
    },
]

const NonVegeterian = [
    {
        id: 6,
        pizzaName: 'Chicken Pizza',
        price: 50,
        image: chicken
    },
    {
        id: 7,
        pizzaName: 'Chicken & Tomato',
        price: 45,
        image: chicken_tomato
    }
]


const Combos = [
    {
        id: 8,
        pizzaName: 'Combos with coke',
        price: 75,
        image: combo1
    },
    {
        id: 9,
        pizzaName: 'Pizza & sweets',
        price: 65,
        image: combo1
    }

]


export { Vegeterian, NonVegeterian, Combos };