import React from 'react'
import styles from './productItem.module.css'
// import { useContext } from 'react'
// import { productContext } from '../../contextApi/contex'
import { cartAction } from '../redux/Reducer/cartReducer'
import { productAction, productSelector } from '../redux/Reducer/productReducer'
// import Edit from './Edit/Edit'
import { EditAction } from '../redux/Reducer/EditReducer'
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector } from '../redux/Reducer/cartReducer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const ProductItem = (props) => {
  const dispatch = useDispatch();
  const allProduct = useSelector(productSelector);
  const allCartProduct = useSelector(cartSelector);
  const navigate = useNavigate();

  const AddtoCart = async (event, id) => {
    event.stopPropagation();
    if (allCartProduct.find((element) => element.id === id)) {
           return;

    }
    const newProduct = allProduct.find((element) => {
      if (element.id === id) {
        return element;
      }
    });
    const modifiedObject = { ...newProduct };
    dispatch(cartAction.addtoCart(modifiedObject));
    console.log('your props checking ')
    

  }

  const DeleteProduct = (event, id) => {
    event.stopPropagation()
    console.log('you are deleting the product')
    dispatch(productAction.delete(id))
  

  }

  const editProduct = (event, product) => {

    console.log('you will edit this', product)
    event.stopPropagation();
    dispatch(EditAction.eidtToogle(true));
    const modifiedProduct = { ...product };
    dispatch(EditAction.add(modifiedProduct));

  }

  const MoreInfo = (id) => {
    navigate(`/moreInfo?id=${id}`);

  }
  const { title, id, description, price, thumbnail, rating } = props.products
  const stars = Array.from({ length: Number(rating) }, (_, index) => index + 1);
  return (
    <div className={styles.cartcover} onClick={() => { MoreInfo(id) }}>
      <div className={styles.header}>
        <div className={styles.left}><span>{title}</span>
          <span className={styles.gold}>{stars.map((element) => {
            return <i class="fa-solid fa-star"></i>
          })}</span>
        </div>
        <div className={styles.right}>
          <span className={styles.green} onClick={(event) => { editProduct(event, props.products) }}><i className="fa-regular fa-pen-to-square"></i></span>
        </div>
      </div>
      <img src={thumbnail} alt="img" />
      <div className={styles.middle}>
        <span>{description.slice(0,40)}</span>
        <span className={styles.yellow}>Rs:{price}</span>
      </div>
      <div className={styles.footer}>
        <button onClick={(event) => { DeleteProduct(event, id) }} className={styles.btn_danger}>Delete</button><button onClick={(event) => AddtoCart(event, id)} className={styles.btn_primary}>Add to Cart</button>
      </div>

    </div>
  )
}

export default ProductItem;
