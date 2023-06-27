import React, { useState } from 'react'
import styles from './create.module.css'
import { useDispatch } from 'react-redux';
import { productAction } from '../redux/Reducer/productReducer';

const Create = () => {
  const [title,setTitle]=useState('');
  const [price,setPrice]=useState('');
  const [description,setDescription]=useState('');
  const [rating,setRating]=useState('');
  const [thumbnail,setThumbnail]=useState('');
  const [count,setCount]=useState('');
  const [id,setId]=useState('');
const dispatch=useDispatch()
const date = new Date();
const unId = date.getTime().toString();
  
  const handleSubmmit=(event)=>{
    event.preventDefault();
  setId(unId);
    const newProduct={title,id,description,price,rating,thumbnail,count};
    dispatch(productAction.add(newProduct))
    setTitle('');
    setCount('');
    setDescription('');
    setThumbnail('');
    setPrice('');
    setRating('');

  }
  return (
    <div className={styles.create_main}>
      <form  action="" className={styles.create_form}>
       <span>Name</span>
       <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
       <span>Price</span>
       <input type="text"  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
       <span>Rating</span>
       <input type="text"  value={rating} onChange={(e)=>{setRating(e.target.value)}} />
       <span>count</span>
       <input type="text"  value={count} onChange={(e)=>{setCount(e.target.value)}}/>  
       <span>Img url</span>
       <input type="text"  value={thumbnail} onChange={(e)=>{setThumbnail(e.target.value)}}/>  
       <span>Description</span>
       <input type="text"  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>  
        <button onClick={(e)=>{handleSubmmit(e)}}>Add product</button>
      
      </form>

    </div>
  )
}

export default Create
