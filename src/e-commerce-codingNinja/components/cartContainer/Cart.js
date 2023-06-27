import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
import { productContext } from '../../contextApi/contex'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction, cartSelector } from '../redux/Reducer/cartReducer'
import { isDOMComponent } from 'react-dom/test-utils'


function Item(props) {

  const ReduxcartProduct=useSelector(cartSelector)
  const dispatch=useDispatch();
  const increaseQty = (id) => {
    const newcart = ReduxcartProduct.map((element) => {
      if (element.id === id && element.count < 15) {
        console.log('you are looking you object is',element)
        const newboject={...element};
        newboject.count+=1;
        element=newboject;
      }
      return element;
    })
    
    dispatch(cartAction.increase(newcart));
  }

  const decreaseQty = () => {
    const newcart = ReduxcartProduct.map((element) => {
      if (element.id === id && element.count>1) {
        console.log('you are looking you object is',element)
        const newboject={...element};
        newboject.count-=1;
        element=newboject;
      }
      return element;
    })
    
    dispatch(cartAction.decrease(newcart));
  }

  const remove = (id) => {
    console.log('your id is', id)
    const filter = ReduxcartProduct.filter((pro) => {
      return pro.id != id;
    })
    dispatch(cartAction.remove(filter));

  }
  const { title, description, price, rating, count, thumbnail, id } = props.product
  return (
    <>
      <div className={styles.item}>
        <img src={thumbnail} alt="img" />
        <div className={styles.info}>
          <span className={styles.bold}>{title}</span>
          {console.log('your with is',window.innerWidth)}
          <span>{window.innerWidth<500?description.slice(0,40):description}</span>
          <div className={styles.Qtycontrol}><button onClick={() => { decreaseQty(id) }} >-</button><span>Qty:{count}</span><button onClick={() => { increaseQty(id) }}>+</button>  <button onClick={() => { remove(id) }}>Remove</button></div>

        </div>
      </div>
    </>
  )
}



const Cart = () => {
  const [total, setTotal] = useState(0);
  const ReduxCartProduct=useSelector(cartSelector);
  useEffect(() => {
    var grand = 0
    ReduxCartProduct.map((product) => {
      grand += product.price * product.count
    })
    setTotal(grand);
  },[ReduxCartProduct])

  return (
    <div className={styles.Cart_main}>
      <div className={styles.left}>
        {ReduxCartProduct.map((cartPoduct) => {
          return <Item product={cartPoduct} key={cartPoduct.id} />
        })}
      </div>
      <div className={styles.right}>
      <h3>Billing Process wlll Here</h3>
        {ReduxCartProduct.map((cartPoduct) => {
          return <div className={styles.billing} key={cartPoduct.id}>
            <span>{cartPoduct.title}{'\u00A0 \u00A0'}</span>
            <span>Price {cartPoduct.price}</span>
            <span> count {cartPoduct.count}{'\u00A0 \u00A0'}</span>
            <span>{cartPoduct.price * cartPoduct.count}</span>
          </div>
        
        })}
        <span className={styles.bold}>Grand Total:{total}</span>
      </div>
    </div>
  )
}

export default Cart;
