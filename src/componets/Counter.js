import React, { useState, useRef } from 'react';
import Input from './Input';
function Counter() {
  let [zero, setCount] = useState(0);
  // контролируемый компонент
  let [text, setText] = useState('i am controled component');
  console.log('rerender');
  const inputEl = useRef();

  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus();
    console.log(inputEl.current.value);
  };
  function increm() {
    setCount((zero += 1));
  }
  function decrem() {
    setCount((zero -= 1));
  }
  return (
    <div className="App2">
      <div className="post">
        <div className="post__content">
          <p className="ololo"> {zero}</p>
          <div className="post__btns">
            <button className="decrement" onClick={increm}>
              decrement
            </button>
            <button className="increment" onClick={decrem}>
              increment
            </button>
          </div>
        </div>
      </div>
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
