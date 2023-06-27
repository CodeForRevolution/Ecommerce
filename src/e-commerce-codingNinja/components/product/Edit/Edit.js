import React, { useEffect, useState } from 'react'
import styles from './Edit.module.css'
import { useSelector } from 'react-redux'
import { EdlitSelector } from '../../redux/Reducer/EditReducer'
import { useDispatch } from 'react-redux'
import { productAction } from '../../redux/Reducer/productReducer'
import { EditAction } from '../../redux/Reducer/EditReducer'


const Edit = () => {
    const[title,setTitle]=useState('')
    const[id,setId]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
   const editProduct=useSelector(EdlitSelector);
   const dispatch=useDispatch();

useEffect(()=>{
    console.log('heee i am calling')
    setTitle(editProduct.title ||'')
    setPrice(editProduct.price ||'');
    setDescription(editProduct.description ||'');
    setId(editProduct.id ||'');
},[editProduct])

   console.log('you got the data fromm edit reducer',editProduct)


    const handleSubmmit=(event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(productAction.edit({id,title,price,description}))
        dispatch(EditAction.eidtToogle(false));
        
    }




  return (
    <div className={styles.editMain}>
      <form action="" className={styles.editform}>
      <span>Name</span>
       <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
       <span>Price</span>
       <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
       <span>Description</span>
       <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>  
        <button onClick={(e)=>{handleSubmmit(e)}}>Add product</button>
      </form>
    </div>
  )
}

export default Edit
