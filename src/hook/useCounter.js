import { useState } from 'react';

export const useCounter = () => {
  const [localCount, setLocalCount] = useState(0);

  const handleAdd = () => {
    setLocalCount(prevLocalCount => prevLocalCount + 1);
  };

  const handleRemove = () => {
    if (localCount > 0) {
      setLocalCount(prevLocalCount => prevLocalCount - 1);
    }
  };

  const resetCount = () => {
    setLocalCount(0);
  };

  return { localCount, handleAdd, handleRemove, resetCount, setLocalCount };
};
