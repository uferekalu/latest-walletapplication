import { Dispatch, SetStateAction, useState } from 'react';
import Heading from './heading';
import ReusableSignupContent from './reusableSignupContent';
import SocialComp from './socialComp';
import LinkComp from './linkComp';

interface Props {
  setSignUp: Dispatch<SetStateAction<boolean>>;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export default function SignupComp(props: Props) {
  const [isPassword] = useState(true);
  const [isConfirmPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <Heading caption1="Signup and start" caption2="transfering" />
      <SocialComp />
      <ReusableSignupContent
        caption="Email"
        placeholder="Enter your email"
        type="text"
        setShowPassword={function (): void {
          throw new Error('Function not implemented.');
        }}
        setShowConfirmPassword={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <ReusableSignupContent
        caption="Password"
        placeholder="Enter your password"
        type={showPassword ? 'text' : 'password'}
        isPassword={isPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        setShowConfirmPassword={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <ReusableSignupContent
        caption="Reenter Password"
        placeholder="Enter your password again"
        type={showConfirmPassword ? 'text' : 'password'}
        isConfirmPassword={isConfirmPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
        setShowPassword={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <LinkComp
        caption1="Create new account"
        caption2="Already have an account?"
        setSignUp={props.setSignUp}
        setLogin={props.setLogin}
      />
    </>
  );
}
