import Image from 'next/image';
import { Button } from 'react-bootstrap';

export default function WalletTopNavDesktop() {
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
          <Button
            onClick={() => undefined}
            style={{
              background: '#F8BB18',
              borderRadius: '10px',
              color: '#1A1A1A',
              fontSize: '14px',
              height: '40px',
              fontWeight: '500',
              border: 'none',
              width: '100px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
