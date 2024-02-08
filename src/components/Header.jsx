import Button from './UI/Button';
import { useContext } from 'react';

import logo from '../assets/logo.jpg';
import CartContext from '../store/CartContext';

export default function Header() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalItems, item) => {
        return totalItems + item.quantity;
    }, 0)

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="A restaurant" />
                <h1>HomeRecipes</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}