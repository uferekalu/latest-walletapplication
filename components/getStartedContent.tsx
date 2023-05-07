import Image from 'next/image';
import { Form, Button } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  signUp: boolean;
  setSignUp: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export default function GetStartedContent(props: Props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '212px',
        }}
      >
        <Image
          style={{
            width: '100px',
            maxWidth: '100%',
          }}
          src="/img/logo.png"
          width="100"
          height="130"
          alt="logo"
        />
        <Form.Label
          style={{
            fontSize: '13px',
            fontWeight: '400',
            color: 'white',
            marginTop: '115px',
          }}
        >
          The best way to <b>Transfer Money</b> safely
        </Form.Label>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          marginTop: '30px',
          marginBottom: '100px',
        }}
      >
        <Button
          className={styles.btnCreateAccount}
          onClick={() => props.setSignUp(true)}
          style={{
            background: '#1A87DD',
            borderRadius: '10px',
            color: 'white',
            fontSize: '14px',
            height: '40px',
            fontWeight: '500',
            marginTop: '301px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Create new account
        </Button>
        <Form.Label
          onClick={() => props.setLogin(true)}
          style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#1A87DD',
            marginTop: '20px',
            cursor: 'pointer',
          }}
        >
          Already have an account?
        </Form.Label>
      </div>
    </>
  );
}
