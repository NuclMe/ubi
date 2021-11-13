import React, { useState, useRef } from 'react';


export default function PostItem(props,title){
    console.log(props)

 
return(
    
    <div className="post" >
    <div className="post__content">
      <strong className="ololo"> {props.post.id}  {props.post.title}</strong>
      <div className="post__btns">
       {props.post.description}
      </div>
    </div>
    <button>удалить</button>
  </div>
)
}
