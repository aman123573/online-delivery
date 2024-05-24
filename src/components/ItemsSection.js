import image1 from '../images/veg-pizza.png';
import image2 from '../images/non-veg-pizza.png'
import image3 from '../images/combo-delicious-pizza.png'
import { Link } from 'react-router-dom';

import '../styles/ItemsSection.css'
import Footer from './Footer';

const pizzaCategory = [
    {
        id:1,
        category: "Veg Pizza",
        image: image1,
    },
    {
        id:2,
        category: "Non-Veg Pizza",
        image: image2,
    },
    {
        id:3,
        category: "Combos",
        image: image3,
    },
]

const ItemsSection = () => {
    return (
        <>
            <div className='items-category-section'>
                <h1>Our Pizza Categories</h1>
                <div className="grid-items">
                    {pizzaCategory.map((item) => (
                        <div key={item.id} className='item'>
                            <h2>{item.category}</h2>
                            <img src={item.image} alt="" />
                            <Link to="/items"><button>Order</button></Link>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ItemsSection
