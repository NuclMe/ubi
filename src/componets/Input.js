import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="inputWrapper">
      <input ref={ref} type="text" value={'ololo'} />
    </div>
  );
});
export default Input;
