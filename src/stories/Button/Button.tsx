import classNames from 'classnames';
import { FC, KeyboardEvent } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  onClick?: (event: React.FormEvent) => void;
  trailingIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  setValidation?: (isValid: boolean) => void;
  variant?: 'filled' | 'outline';
  color?: 'primary' | 'secondary' | string;
  ariaLabel?: string;
}

/**
 * A reusable Button component that can be styled and customized.
 *
 * @param type - Specifies the button's behavior (button, submit, or reset).
 * @param label - The text displayed on the button. Defaults to "Submit".
 * @param onClick - Function that gets called when the button is clicked.
 * @param trailingIcon - Icon displayed after the label. Accepts a custom ReactNode for flexibility.
 * @param className - Optional additional CSS class for custom styling.
 * @param disabled - Indicates disabled state, preventing interaction when true.
 * @param setValidation - Function to update validation state
 * @param variant - Button style variant, either 'filled' or 'outline'.
 * @param color - Button color, affects background/border color, default is "primary".
 * @param ariaLabel - Optional alternative text for accessibility. Defaults to the label text if not provided.
 */

const Button: FC<ButtonProps> = ({
  type = 'button',
  label = 'Submit',
  onClick,
  trailingIcon,
  className,
  disabled = true,
  setValidation,
  variant = 'filled',
  color = 'primary',
  ariaLabel,
}) => {
  const handleInteraction = (
    e: KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' && (e as KeyboardEvent).key === 'Enter')
    ) {
      if (!disabled && onClick) {
        onClick(e);

        if (setValidation) {
          setValidation(false);
        }
      }
    }
  };

  const btnClasses = classNames(
    styles.mhuiButton,
    styles[`mhuiButton__${variant}`],
    styles[`mhuiButton__${color}`],
    {
      [styles.mhuiButton__disabled]: disabled,
    },
    className
  );

  return (
    <button
      className={btnClasses}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
      aria-label={ariaLabel || label}
      type={type}
      role="button"
      disabled={disabled}
    >
      {label}
      {trailingIcon && (
        <div aria-hidden="true" className={styles.mhuiButton__icon}>
          {trailingIcon}
        </div>
      )}
    </button>
  );
};

export default Button;
