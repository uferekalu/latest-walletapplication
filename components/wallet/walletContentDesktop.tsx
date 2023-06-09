import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import SidebarContent from '../sidebarContent';
import Welcome from '../welcome';
import SignupComp from '../signupComp';
import styles from '@/styles/Home.module.css';
import LoginComp from '../loginComp';

interface Props {
  isHome: boolean;
  setIsHome: Dispatch<SetStateAction<boolean>>;
  isTransactions: boolean;
  setIsTransactions: Dispatch<SetStateAction<boolean>>;
  isContacts: boolean;
  setIsContacts: Dispatch<SetStateAction<boolean>>;
  isProfile: boolean;
  setIsProfile: Dispatch<SetStateAction<boolean>>;
  handleIsHome: () => void;
  handleIsTransactions: () => void;
  handleIsContacts: () => void;
  handleIsProfile: () => void;
  getStarted: boolean;
  setGetStarted: Dispatch<SetStateAction<boolean>>;
  signUp: boolean;
  setSignUp: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const WalletContentDesktop: React.FC<Props> = ({
  isHome,
  isTransactions,
  isContacts,
  isProfile,
  handleIsHome,
  handleIsTransactions,
  handleIsContacts,
  handleIsProfile,
  getStarted,
  setGetStarted,
  signUp,
  setSignUp,
  login,
  setLogin,
}) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '20%',
            padding: '20px',
            background: '#f8bb18',
            height: '150vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Image
              style={{
                width: '90px',
                maxWidth: '100%',
              }}
              src="/img/logo.png"
              width="90"
              height="90"
              alt="logo"
            />
          </div>
          <SidebarContent
            imgSrc={
              isHome ? '/img/selected_home_icon.png' : '/img/home_icon.png'
            }
            caption="Home"
            handleClick={handleIsHome}
            isClicked={isHome}
          />
          <SidebarContent
            imgSrc={
              isTransactions
                ? '/img/selected_transaction_icon.png'
                : '/img/transaction_icon.png'
            }
            caption="Transaction"
            handleClick={handleIsTransactions}
            isClicked={isTransactions}
          />
          <SidebarContent
            imgSrc={
              isContacts
                ? '/img/selected_contacts_icon.png'
                : '/img/contacts_icon.png'
            }
            caption="Contacts"
            handleClick={handleIsContacts}
            isClicked={isContacts}
          />
          <SidebarContent
            imgSrc={
              isProfile ? '/img/selected_user_icon.png' : '/img/user_icon.png'
            }
            caption="Profile"
            handleClick={handleIsProfile}
            isClicked={isProfile}
          />
        </div>
        {signUp ? (
          <div
            className={styles.signup}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
              padding: '20px',
              background: 'white',
            }}
          >
            <SignupComp setSignUp={setSignUp} setLogin={setLogin} />
          </div>
        ) : login ? (
          <div
            className={styles.signup}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
              padding: '20px',
              background: 'white',
            }}
          >
            <LoginComp setSignUp={setSignUp} setLogin={setLogin} />
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
              padding: '20px',
              background: 'white',
            }}
          >
            <Welcome
              getStarted={getStarted}
              setGetStarted={setGetStarted}
              signUp={signUp}
              setSignUp={setSignUp}
              login={login}
              setLogin={setLogin}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default WalletContentDesktop;
