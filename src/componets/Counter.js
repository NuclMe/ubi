import React, { useState, useRef } from 'react';
import Input from './Input';
import PostItem from './PostItem';
import PostList from './PostList';
let myArr = [{item:'kefir'}]
function Counter() {
  // контролируемый компонент
  let [text, setText] = useState('i am controled component');
  console.log('rerender');
  const inputEl = useRef();
const [posts, setPosts] = useState([
  {id:1,title:'title',description:"Description"},
  {id:2,title:'title',description:"Description"},
  {id:3,title:'title',description:"Description"}
])
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus();
    console.log(inputEl.current.value);
  };

  return (
    <div className="App2">
<PostList name='постики по джс22'/>
      {/* {posts.map(post=>
      <PostItem post={post} key={post.id} title='постики по джс'/>

      )} */}
      {/* контролируемый компонент */}
      {text}

      <input
        value={text}
        type="text"
        onChange={(event) => setText(event.target.value)}
      />
      {/* <>
        <input type="text" value={text} />
        <Input ref={inputEl} />
        <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
      </> */}
    </div>
  );
}

export default Counter;
