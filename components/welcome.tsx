import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';
import GetStartedContent from './getStartedContent';

interface Props {
  getStarted: boolean;
  setGetStarted: Dispatch<SetStateAction<boolean>>;
  signUp: boolean;
  setSignUp: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export default function Welcome(props: Props) {
  const [step] = useState(0);
  const [addAllAccounts, setAddAllAccounts] = useState(false);
  const [trackAcitvities, setTrackActivities] = useState(false);
  const [sendRequestPayments, setSendRequestPayments] = useState(false);

  const handleAddAllAccounts = () => {
    setAddAllAccounts(true);
    setTrackActivities(false);
    setSendRequestPayments(false);
  };

  const handleTrackActivities = () => {
    setTrackActivities(true);
    setAddAllAccounts(false);
    setSendRequestPayments(false);
  };

  const handleSendRequestPayments = () => {
    setSendRequestPayments(true);
    setAddAllAccounts(false);
    setTrackActivities(false);
  };

  useEffect(() => {
    if (trackAcitvities) {
      setAddAllAccounts(false);
      setSendRequestPayments(false);
    } else if (sendRequestPayments) {
      setAddAllAccounts(false);
      setTrackActivities(false);
    } else {
      setAddAllAccounts(true);
    }
  }, [
    setAddAllAccounts,
    setSendRequestPayments,
    setTrackActivities,
    sendRequestPayments,
    trackAcitvities,
  ]);
  return (
    <>
      {props.getStarted ? (
        <>
          <div
            className={styles.getStartedDesktop}
            style={{
              padding: '20px',
            }}
          >
            <GetStartedContent
              signUp={props.signUp}
              setSignUp={props.setSignUp}
              login={props.login}
              setLogin={props.setLogin}
            />
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '14px',
                  color: 'black',
                  fontWeight: '500',
                }}
              >
                {addAllAccounts
                  ? step + 1
                  : trackAcitvities
                  ? step + 2
                  : sendRequestPayments
                  ? step + 3
                  : undefined}
                /3
              </Form.Label>
              <Form.Label
                onClick={
                  addAllAccounts
                    ? () => handleTrackActivities()
                    : trackAcitvities
                    ? () => handleSendRequestPayments()
                    : undefined
                }
                style={
                  sendRequestPayments
                    ? {
                        display: 'none',
                      }
                    : {
                        fontSize: '14px',
                        color: '#1A87DD',
                        fontWeight: '500',
                        cursor: 'pointer',
                      }
                }
              >
                Skip
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '100px',
              }}
            >
              <Image
                style={{
                  width: '300px',
                  maxWidth: '100%',
                }}
                src={
                  addAllAccounts
                    ? '/img/illustration.png'
                    : trackAcitvities
                    ? '/img/illustration1.png'
                    : sendRequestPayments
                    ? '/img/illustration2.png'
                    : ''
                }
                width="300"
                height="220"
                alt="logo"
              />
              <Form.Label
                style={{
                  fontSize: '16px',
                  color: 'black',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '50px',
                }}
              >
                {addAllAccounts
                  ? 'Add all accounts & manage'
                  : trackAcitvities
                  ? 'Track your activity'
                  : sendRequestPayments
                  ? 'Send & request payments'
                  : undefined}
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '14px',
                  color: '#1A1A1A',
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                {addAllAccounts
                  ? 'You can add all accounts in one place \n and use it to send and request'
                  : trackAcitvities
                  ? 'You can track your income, expenses, activities and all statistics.'
                  : sendRequestPayments
                  ? 'You can send or receive any payments from your accounts'
                  : undefined}
              </Form.Label>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '5px',
                  marginTop: '20px',
                }}
              >
                <Image
                  onClick={handleAddAllAccounts}
                  style={{
                    width: '15px',
                    maxWidth: '100%',
                    cursor: 'pointer',
                  }}
                  src={
                    addAllAccounts
                      ? '/img/rectangle.png'
                      : '/img/rectangle1.png'
                  }
                  width="15"
                  height="5"
                  alt="rectangle"
                />
                <Image
                  onClick={handleTrackActivities}
                  style={{
                    width: '15px',
                    maxWidth: '100%',
                    cursor: 'pointer',
                  }}
                  src={
                    trackAcitvities
                      ? '/img/rectangle.png'
                      : '/img/rectangle1.png'
                  }
                  width="15"
                  height="5"
                  alt="rectangle"
                />
                <Image
                  onClick={handleSendRequestPayments}
                  style={{
                    width: '15px',
                    maxWidth: '100%',
                    cursor: 'pointer',
                  }}
                  src={
                    sendRequestPayments
                      ? '/img/rectangle.png'
                      : '/img/rectangle1.png'
                  }
                  width="15"
                  height="5"
                  alt="rectangle"
                />
              </div>
            </div>
            {sendRequestPayments && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '5px',
                  marginTop: '30px',
                }}
              >
                <Button
                  className={styles.btnStyles}
                  onClick={() => props.setGetStarted(true)}
                  style={{
                    background: '#1A87DD',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '14px',
                    height: '40px',
                    fontWeight: '500',
                    border: 'none',
                  }}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
