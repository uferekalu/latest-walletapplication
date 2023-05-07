import { Button } from 'react-bootstrap';

export default function SocialComp() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '80px',
        }}
      >
        <Button
          style={{
            background: '#F3F4F5',
            borderRadius: '10px',
            color: 'black',
            fontSize: '14px',
            width: '150px',
            border: 'none',
            height: '40px',
            fontWeight: '500',
          }}
        >
          Google
        </Button>
        <Button
          style={{
            background: '#F3F4F5',
            borderRadius: '10px',
            color: 'black',
            fontSize: '14px',
            width: '150px',
            border: 'none',
            height: '40px',
            fontWeight: '500',
          }}
        >
          Facebook
        </Button>
      </div>
    </>
  );
}
