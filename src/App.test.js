// App.test.js
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { signUp, signIn } from './API';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

jest.mock('./API');

describe('Sign-Up Form', () => {
  test('should sign up successfully', async () => {
    signUp.mockResolvedValueOnce({ success: true });

    render(<SignUpForm />);

    userEvent.type(screen.getByPlaceholderText('Username'), 'testuser');
    userEvent.type(screen.getByPlaceholderText('Password'), 'testpassword');

    fireEvent.click(screen.getByText('Sign Up'));

    await waitFor(() => expect(signUp).toHaveBeenCalledTimes(1));
    expect(signUp).toHaveBeenCalledWith({ username: 'testuser', password: 'testpassword' });
  });
});

describe('Sign-In Form', () => {
  test('should sign in successfully', async () => {
    signIn.mockResolvedValueOnce({ success: true });

    render(<SignInForm />);

    userEvent.type(screen.getByPlaceholderText('Username'), 'testuser');
    userEvent.type(screen.getByPlaceholderText('Password'), 'testpassword');

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => expect(signIn).toHaveBeenCalledTimes(1));
    expect(signIn).toHaveBeenCalledWith({ username: 'testuser', password: 'testpassword' });
  });
});
