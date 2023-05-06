import { Dispatch, SetStateAction } from 'react';
import WalletTopNav from './walletTopNav';

interface Props {
  children: React.ReactNode;
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
const WalletLayout: React.FC<Props> = ({
  children,
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        <WalletTopNav
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default WalletLayout;
