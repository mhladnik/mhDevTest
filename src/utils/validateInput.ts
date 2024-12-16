export const validateInput = (
  input: string,
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>,
  setShowError: React.Dispatch<React.SetStateAction<boolean>>,
  setValidation: (isValid: boolean) => void,
  required: boolean
) => {
  const trimmedInput = input.trim();

  // Case 1: Empty string
  if (trimmedInput === '') {
    setShowWarning(false);
    setShowError(false);
    setValidation(required ? false : true);
    return;
  }

  const hasText = /[a-zA-Z\s]+/.test(input);
  const hasDigit = /\d/.test(input);
  const hasDigitInBrackets = /\[\d+\]/.test(input);

  // Case 2: Only text (valid)
  if (hasText && !hasDigit) {
    setShowWarning(false);
    setShowError(false);
    setValidation(true);
    return;
  }

  // Case 3: Numbers wrapped in brackets and text (valid)
  if (hasText && hasDigit && hasDigitInBrackets) {
    setShowWarning(false);
    setShowError(false);
    setValidation(true);
    return;
  }

  // Case 4: Text with numbers (without brackets) (warning)
  if (hasText && hasDigit && !hasDigitInBrackets) {
    setShowWarning(true);
    setShowError(false);
    setValidation(false);
    return;
  }

  // Case 5: Numbers without text and not wrapped in brackets (error)
  if (!hasText && hasDigit && !hasDigitInBrackets) {
    setShowWarning(false);
    setShowError(true);
    setValidation(false);
    return;
  }

  // Case 6: Numbers without text and wrapped in brackets (error)
  if (!hasText && hasDigit && hasDigitInBrackets) {
    setShowWarning(false);
    setShowError(true);
    setValidation(false);
    return;
  }
};
