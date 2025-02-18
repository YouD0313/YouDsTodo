import { useEffect, useRef } from 'react';

interface outsideToggleProps {
  onHandleClick: () => void;
}

const useOutsideClick = ({ onHandleClick }: outsideToggleProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleToggleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onHandleClick();
      }
    };

    document.addEventListener('mousedown', handleToggleClick);

    return () => {
      document.removeEventListener('mousedown', handleToggleClick);
    };
  }, [onHandleClick]);

  return ref;
};

export default useOutsideClick;
