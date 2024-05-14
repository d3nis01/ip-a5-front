import React from 'react';

const useClickAway = (ref: React.RefObject<HTMLElement>, callback: () => void): React.RefObject<HTMLElement> => {
  React.useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      if (ref.current && 'contains' in ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback, ref]);

  return ref;
};

export default useClickAway;
