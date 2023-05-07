import { Dispatch, SetStateAction } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';

interface Props {
  caption1: string;
  caption2: string;
  setSignUp: Dispatch<SetStateAction<boolean>>;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export default function LinkComp(props: Props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          marginTop: '50px',
        }}
      >
        <Button
          className={styles.link}
          //   onClick={}
          style={{
            background: '#1A87DD',
            borderRadius: '10px',
            color: 'white',
            fontSize: '14px',
            height: '40px',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          {props.caption1}
        </Button>
        <Form.Label
          onClick={
            props.caption2 === 'Create new account'
              ? () => {
                  props.setSignUp(true);
                  props.setLogin(false);
                }
              : props.caption2 === 'Already have an account?'
              ? () => {
                  props.setLogin(true);
                  props.setSignUp(false);
                }
              : undefined
          }
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#1A87DD',
            marginTop: '20px',
            cursor: 'pointer',
          }}
        >
          {props.caption2}
        </Form.Label>
      </div>
    </>
  );
}
