import TextInput from '@stories/TextInput/TextInput';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

describe('TextInput Component', () => {
  const mockOnChange = vi.fn();
  const mockSetValidation = vi.fn();

  const defaultProps = {
    label: 'Test Label',
    value: '',
    onChange: mockOnChange,
    setValidation: mockSetValidation,
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the label and input field', () => {
    render(<TextInput {...defaultProps} />);
    const label = screen.getByText(/test label/i);
    const input = screen.getByRole('textbox');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('applies the primary color class by default', () => {
    render(<TextInput {...defaultProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(/mhuiTextInput__primary/i);
  });

  it('applies the secondary color class when color prop is set to secondary', () => {
    render(<TextInput {...defaultProps} color="secondary" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(/mhuiTextInput__secondary/i);
  });

  it('calls onChange and updates the validation state when input changes', () => {
    render(<TextInput {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalledWith('test');
    expect(mockSetValidation).toHaveBeenCalled();
  });

  it('shows the warning message when input validation triggers a warning', () => {
    render(
      <TextInput
        {...defaultProps}
        value="[123]"
        warningMessage="Custom warning message"
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Coding is fun! 1234' } });
    const warningMessage = screen.queryByText(/custom warning message/i);
    expect(warningMessage).toBeInTheDocument();
  });

  it('shows the error message when input validation triggers a error', () => {
    render(
      <TextInput
        {...defaultProps}
        value="Coding is fun! [1234]"
        errorMessage="Custom error message"
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1234' } });
    const errorMessage = screen.queryByText(/custom error message/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('does not show error or warning messages when validation passes', () => {
    render(<TextInput {...defaultProps} value="Coding is fun!" />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Coding is fun!' } });

    const errorMessage = screen.queryByText(
      /hey! only numbers are still not allowed!/i
    );
    const warningMessage = screen.queryByText(
      /please wrap numbers into \[brackets\]/i
    );

    expect(errorMessage).not.toBeInTheDocument();
    expect(warningMessage).not.toBeInTheDocument();
  });

  it('applies warning/error styling when validation fails', () => {
    render(<TextInput {...defaultProps} value="Coding is fun! [234]" />);
    const inputWrapper = screen.getByRole('textbox').parentElement;

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Coding is fun! 1234' },
    });
    expect(inputWrapper).toHaveClass(/mhuiTextInput__warning/i);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '234' },
    });
    expect(inputWrapper).toHaveClass(/mhuiTextInput__error/i);
  });

  it('marks the input as invalid when a warning/error is displayed', () => {
    render(<TextInput {...defaultProps} value="Coding is fun!" />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Coding is fun! 1234' } });
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not mark the input as invalid when validation passes', () => {
    render(<TextInput {...defaultProps} value="Coding is fun!" />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Coding is fun!' } });
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });
});
