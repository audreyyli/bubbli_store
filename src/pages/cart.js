import React, {useState} from 'react'
import {useCart} from '../contexts/CartContext'
import {useNavigate, Link} from 'react-router-dom'

const Cart = () => {
    const {cartItems, cartTotal} = useCart()
    const {removeFromCart} = useCart()
    const navigate = useNavigate()

    const [removeHover, setRemoveHover] = useState(false)
    const [continueHover, setContinueHover] = useState(false)
    const [detailHover, setDetailHover] = useState(null)
    const [checkoutHover, setCheckoutHover] = useState(false)
    const [shopHover, setShopHover] = useState(false)

    const goToProducts = () => {
        navigate('/products')
    }

    return (
        <div style = {{padding: '30px'}}>
            <h1 style = {{fontSize: '28px', marginBottom: '10px'}}><b>CART</b></h1>
            <div style = {{height: '2px', backgroundColor: 'black', marginBottom: '20px'}}></div>
            {cartItems.length > 0 ? (
                <>
                    <div style = {{display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', marginBottom: '10px', borderBottom: '2px solid black'}}>
                        <div style = {{flex: 2, textAlign: 'center'}}><strong>ITEM</strong></div>
                        <div style = {{flex: 1, textAlign: 'center'}}><strong>QUANTITY</strong></div>
                        <div style = {{flex: 1, textAlign: 'center'}}><strong>TOTAL</strong></div>
                    </div>
                    {cartItems.map(item => (
                        <div key = {item.id} style = {{display: 'flex', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid black', paddingBottom: '10px'}}>
                            <div style = {{flex: 2, display: 'flex', alignItems: 'center' }}>
                                <button onMouseEnter = {() => setRemoveHover(true)} onMouseLeave = {() => setRemoveHover(false)} onClick = {(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    removeFromCart(item.id)
                                }} style = {{marginRight: '10px', border: 'none', background: 'transparent', color: removeHover ? '#BDE6FF' : 'black'}}>
                                    ✖
                                </button>
                                <Link to = {`/product-details/${item.id}`} onMouseEnter = {() => setDetailHover(item.id)} onMouseLeave = {() => setDetailHover(null)} style = {{display: 'flex', alignItems: 'center', textDecoration: detailHover === item.id ? 'underline' : 'none', color: detailHover === item.id ? '#BDE6FF' : 'black'}}>
                                    <img src = {item.imageUrl} alt = {item.name} style = {{ width: '180px', height: 'auto', marginRight: '20px'}} />
                                    <div style = {{display: 'flex', flexDirection: 'column'}}>
                                        <span style = {{fontWeight: '600', fontSize: '22px' }}>{item.name}</span>
                                        <span><b>${(item.price * item.quantity).toFixed(2)}</b> USD</span>
                                    </div>
                                </Link>
                            </div>
                            <div style = {{flex: 1, textAlign: 'center'}}>
                                <span>{item.quantity}</span>
                            </div>
                            <div style = {{flex: 1, textAlign: 'center'}}>
                                <span><b>${(item.price * item.quantity).toFixed(2)}</b> USD</span>
                        </div>
                    </div>
                    ))}
                    <div style = {{display: 'flex', justifyContent: 'space-between', fontSize: '24px', marginTop: '10px', marginBottom: '10px'}}>
                        <button onMouseEnter = {() => setContinueHover(true)} onMouseLeave = {() => setContinueHover(false)} onClick = {goToProducts} style = {{fontSize: '16px', border: 'none', alignSelf: 'center', fontWeight: '600', color: continueHover ? '#BDE6FF' : 'black', textDecoration: continueHover ? 'underline' : 'none'}}>🡰 CONTINUE SHOPPING</button>
                        <div style = {{display: 'flex', alignItems: 'center'}}>
                            <span style = {{fontSize: '16px', marginRight: '20px'}}>SUBTOTAL     </span>
                            <strong style = {{fontSize: '22px', marginRight: '8px'}}>${cartTotal.toFixed(2)}</strong>
                            <span>USD</span>
                        </div>
                    </div>
                    <div style = {{height: '2px', backgroundColor: 'black', marginBottom: '10px'}}></div>
                    <div style = {{fontSize: '22px', display: 'flex', justifyContent: 'right', marginTop: '10px'}}>
                        <button onMouseEnter = {() => setCheckoutHover(true)} onMouseLeave = {() => setCheckoutHover(false)} onClick = {() => {}} style = {{border: 'none', backgroundColor: checkoutHover ? '#BDE6FF' : 'black', color: 'white'}}>
                            <span style = {{marginRight: '70px'}}>CHECKOUT</span>🡲
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div style = {{textAlign: 'center'}}>
                        <h1 style = {{fontSize: '25px', fontWeight: '600', marginTop: '50px'}}>YOUR CART IS EMPTY!</h1>
                        <p>SOUNDS LIKE A GOOD TIME TO START SHOPPING.</p>
                        <button onMouseEnter = {() => setShopHover(true)} onMouseLeave = {() => setShopHover(false)} onClick = {goToProducts} style = {{fontSize: '18px', fontWeight: '600', marginTop: '20px', border: 'none', width: '250px', height: '50px', background: shopHover ? '#BDE6FF' : 'black', color: 'white'}}>START SHOPPING</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart