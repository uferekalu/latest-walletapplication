import { Dispatch, SetStateAction } from 'react';
import Welcome from '../welcome';
import SignupComp from '../signupComp';
import styles from '@/styles/Home.module.css';
import LoginComp from '../loginComp';

interface Props {
  getStarted: boolean;
  setGetStarted: Dispatch<SetStateAction<boolean>>;
  signUp: boolean;
  setSignUp: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export default function WalletContentMobile(props: Props) {
  return (
    <div
      style={{
        padding: '20px 0px',
      }}
    >
      {props.signUp ? (
        <div
          className={styles.signup}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '20px',
          }}
        >
          <SignupComp setSignUp={props.setSignUp} setLogin={props.setLogin} />
        </div>
      ) : props.login ? (
        <div
          className={styles.signup}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '20px',
          }}
        >
          <LoginComp setSignUp={props.setSignUp} setLogin={props.setLogin} />
        </div>
      ) : (
        <Welcome
          getStarted={props.getStarted}
          setGetStarted={props.setGetStarted}
          signUp={props.signUp}
          setSignUp={props.setSignUp}
          login={props.login}
          setLogin={props.setLogin}
        />
      )}
    </div>
  );
}
