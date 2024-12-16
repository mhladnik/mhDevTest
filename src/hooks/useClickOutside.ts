import { RefObject, useEffect } from 'react';

type UseClickOutsideProps = {
  element: RefObject<HTMLElement>;
  callBack: () => void;
  isOpen: boolean;
};

export const useClickOutside = ({
  element,
  callBack,
  isOpen,
}: UseClickOutsideProps): void => {
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent): void => {
      if (!element.current?.contains(event.target as Node)) {
        callBack();
      }
    };

    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        callBack();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleKeyPress, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [callBack, element, isOpen]);
};
