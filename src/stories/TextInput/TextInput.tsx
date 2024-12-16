import Error from '@icons/error.svg';
import Warning from '@icons/warning.svg';
import { validateInput } from '@utils/validateInput'; // Import the utility function
import classNames from 'classnames';
import { ChangeEvent, FC, useState } from 'react';

import styles from './TextInput.module.scss';

interface TextInputProps {
  label: string;
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
  color?: 'primary' | 'secondary';
  setValidation: (isValid: boolean) => void;
  warningMessage?: string;
  errorMessage?: string;
  className?: string;
}

/**
 * A reusable TextInput component with validation
 * @param label - The label displayed above the input field
 * @param value - The current value of the input
 * @param required - Whether the input is required (affects validation)
 * @param onChange - Change handler for updating the input value
 * @param color - Optional color theme for the input field, default is 'primary'
 * @param setValidation - Function to update validation state
 * @param warningMessage - Optional custom warning message when input needs update
 * @param errorMessage - Optional custom error message when validation fails
 * @param className - Optional additional CSS class for custom styling
 */

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  required = false,
  onChange,
  color = 'primary',
  setValidation,
  warningMessage = 'Please wrap numbers into [brackets]',
  errorMessage = 'Hey! Only numbers are still not allowed!',
  className,
}) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    validateInput(
      newValue,
      setShowWarning,
      setShowError,
      setValidation,
      required
    );
  };

  const inputClasses = classNames(
    styles.mhuiTextInput__input,
    styles[`mhuiTextInput__${color}`],
    className
  );
  const wrapperClasses = classNames(
    styles.mhuiTextInput,
    showError && styles.mhuiTextInput__error,
    showWarning && styles.mhuiTextInput__warning,
    required && styles.mhuiTextInput__required
  );

  return (
    <div className={wrapperClasses}>
      <label htmlFor="textinput" className={styles.mhuiTextInput__label}>
        {label}
      </label>
      <input
        id="textinput"
        type="text"
        value={value}
        onChange={handleChange}
        className={inputClasses}
        aria-invalid={showWarning || showError}
      />
      {showWarning && (
        <div className={styles.mhuiTextInput__warningMessage}>
          <Warning />
          <span>{warningMessage}</span>
        </div>
      )}
      {showError && (
        <div className={styles.mhuiTextInput__errorMessage}>
          <Error />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default TextInput;
