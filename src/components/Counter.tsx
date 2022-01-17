import React from 'react';
type Props = {
  number: number;
  diff: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
};
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type='number' value={diff} min='1' onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
