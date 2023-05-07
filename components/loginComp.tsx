import { Dispatch, SetStateAction, useState } from 'react';
import Heading from './heading';
import SocialComp from './socialComp';
import ReusableSignupContent from './reusableSignupContent';
import { Form } from 'react-bootstrap';
import LinkComp from './linkComp';

interface Props {
  setSignUp: Dispatch<SetStateAction<boolean>>;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export default function LoginComp(props: Props) {
  const [isPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Heading caption1="Login and start" caption2="transfering" />
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Form.Label
          style={{
            fontSize: '13px',
            fontWeight: 400,
            color: '#1A87DD',
            marginTop: '20px',
          }}
        >
          Forgot password?
        </Form.Label>
      </div>
      <LinkComp
        caption1="Login"
        caption2="Create new account"
        setSignUp={props.setSignUp}
        setLogin={props.setLogin}
      />
    </>
  );
}
