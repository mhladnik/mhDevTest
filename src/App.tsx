import './App.scss';

import { useClickOutside } from '@hooks/useClickOutside';
import Send from '@icons/send.svg';
import Button from '@stories/Button/Button';
import TextInput from '@stories/TextInput/TextInput';
import { FC, useRef, useState } from 'react';

const App: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [popupValue, setPopupValue] = useState<string>('');
  const [validation, setValidation] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setClicked((prev) => !prev);
    setPopupValue(inputValue);
    setInputValue('');
  };

  const closePopup = () => {
    setClicked(false);
  };

  useClickOutside({
    element: popupRef,
    callBack: closePopup,
    isOpen: clicked,
  });

  return (
    <div className="app">
      <form className="app__form">
        <div className="app__container">
          <TextInput
            label="Text producer"
            value={inputValue}
            required
            onChange={setInputValue}
            color="primary"
            setValidation={setValidation}
          />
          <Button
            type="submit"
            onClick={submitHandler}
            disabled={!validation}
            setValidation={setValidation}
            trailingIcon={<Send />}
            variant="filled"
            color="primary"
          />
        </div>
        {clicked && !!popupValue && (
          <div ref={popupRef} className="app__popup">
            {popupValue}
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
