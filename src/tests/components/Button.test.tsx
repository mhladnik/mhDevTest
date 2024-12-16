import Submit from '@icons/submit.svg';
import Button from '@stories/Button/Button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button Component', () => {
  it('renders with the correct default color (primary)', () => {
    render(<Button label="Submit" />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveClass(/mhuiButton__primary/i);
  });

  it('renders with the secondary color variant', () => {
    render(<Button label="Cancel" color="secondary" />);
    const button = screen.getByRole('button', { name: /cancel/i });
    expect(button).toHaveClass(/mhuiButton__secondary/i);
  });

  it('renders with the correct default variant (filled)', () => {
    render(<Button label="Submit" variant="filled" />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveClass(/mhuiButton__filled/i);
  });

  it('renders with the outline variant', () => {
    render(<Button label="Submit" variant="outline" />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveClass(/mhuiButton__outline/i);
  });

  it('disables the button when the disabled prop is true', () => {
    render(<Button label="Submit" disabled />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
  });

  it('fires the onClick event when clicked', () => {
    const onClick = vi.fn();
    render(<Button label="Submit" onClick={onClick} disabled={false} />);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('fires the onClick event when Enter key is pressed', () => {
    const onClick = vi.fn();
    render(<Button label="Submit" onClick={onClick} disabled={false} />);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders a trailing icon when the trailingIcon prop is provided', () => {
    render(<Button label="Submit" trailingIcon={<Submit />} />);
    const button = screen.getByRole('button', { name: /submit/i });
    const icon = button.querySelector('svg');
    expect(button).toContainElement(icon);
  });

  it('does not call onClick when disabled and clicked', () => {
    const onClick = vi.fn();
    render(<Button label="Submit" disabled onClick={onClick} />);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
