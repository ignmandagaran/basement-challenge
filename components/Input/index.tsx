import { forwardRef } from 'react';
import { StyledLabel, StyledInput, ErrorMessege, Container } from './styles';

interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, error, ...props }, ref) => (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} ref={ref} state={error ? 'error' : 'default'} {...props} />
      {error && error.length > 0 && <ErrorMessege>{error}</ErrorMessege>}
    </Container>
  )
);

export default Input;