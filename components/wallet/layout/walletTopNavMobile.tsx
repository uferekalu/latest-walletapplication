import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';
import SidebarContent from '@/components/sidebarContent';

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
}

const WalletTopNavMobile: React.FC<Props> = ({
  isHome,
  isTransactions,
  isContacts,
  isProfile,
  handleIsHome,
  handleIsTransactions,
  handleIsContacts,
  handleIsProfile,
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          height: '100px',
          background: '#1A87DD',
        }}
      >
        <Image
          style={{
            width: '70px',
            maxWidth: '100%',
          }}
          src="/img/logo.png"
          width="70"
          height="70"
          alt="logo"
        />
        <div>
          <Image
            onClick={() => setShowMobileMenu((prevState) => !prevState)}
            style={{
              width: '20px',
              maxWidth: '100%',
            }}
            src={showMobileMenu ? '/img/close.png' : '/img/hamburger1.png'}
            width="20"
            height="20"
            alt="logo"
          />
        </div>
      </div>
      <div
        className={
          showMobileMenu ? styles.mobileSidebar : styles.mobileSidebarNo
        }
      >
        <div className={styles.mobileSidebar_content}>
          <Form.Label
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#1A1A1A',
            }}
          >
            Register
          </Form.Label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
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
        </div>
      </div>
    </>
  );
};

export default WalletTopNavMobile;
