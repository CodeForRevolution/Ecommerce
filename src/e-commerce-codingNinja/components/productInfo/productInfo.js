import React, { useEffect, useState } from 'react'
import { productSelector } from '../redux/Reducer/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import styles from './productInfo.module.css'
import { cartAction } from '../redux/Reducer/cartReducer'

const ProductInfo = () => {
  const [product, setProduct] = useState({})
  const [loading,setLoading]=useState(true);
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const ReduxProduct = useSelector(productSelector);
  const dispatch=useDispatch()


  useEffect(() => {
    function Fetch() {
      const infoProduct = ReduxProduct.find((element) => {
        if (element.id==id) {
          return element;
        }
      })
      setProduct(infoProduct || {})
      setLoading(false);
   
    }

    Fetch();


  },[id,ReduxProduct])


  const addToCart=()=>{
 
    dispatch(cartAction.addtoCart(product));


  }



  console.log('+++++++Exit from more info++++++')

  if(loading){
    return <div>Loading the component</div>
  }

  return (
 <div className={styles.moreInfo_main} >  

 <div className={styles.container}>
  <img src={product.thumbnail} alt="" />

  <span>{product.description}</span>
<span>price:{product.price}</span>
 
 <button onClick={()=>{addToCart()}}>Add to cart</button>
   </div>   
 
 </div>

  )
}

export default ProductInfo;
