import { Dispatch, SetStateAction } from 'react';
import styles from '@/styles/Home.module.css';
import WalletTopNavMobile from './walletTopNavMobile';
import WalletTopNavDesktop from './walletTopNavDesktop';

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

const WalletTopNav: React.FC<Props> = ({
  isHome,
  setIsHome,
  isTransactions,
  setIsTransactions,
  isContacts,
  setIsContacts,
  isProfile,
  setIsProfile,
  handleIsHome,
  handleIsTransactions,
  handleIsContacts,
  handleIsProfile,
}) => {
  return (
    <>
      <div className={styles.walletTopNavMobile}>
        <WalletTopNavMobile
          isHome={isHome}
          setIsHome={setIsHome}
          isTransactions={isTransactions}
          setIsTransactions={setIsTransactions}
          isContacts={isContacts}
          setIsContacts={setIsContacts}
          isProfile={isProfile}
          setIsProfile={setIsProfile}
          handleIsHome={handleIsHome}
          handleIsTransactions={handleIsTransactions}
          handleIsContacts={handleIsContacts}
          handleIsProfile={handleIsProfile}
        />
      </div>
      <div className={styles.walletTopNavDesktop}>
        <WalletTopNavDesktop />
      </div>
    </>
  );
};

export default WalletTopNav;
