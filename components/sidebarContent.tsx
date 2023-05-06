import Image from 'next/image';
import { Form } from 'react-bootstrap';

interface Props {
  isClicked: boolean;
  handleClick: () => void;
  imgSrc: string;
  caption: string;
}

const SidebarContent: React.FC<Props> = ({
  isClicked,
  handleClick,
  imgSrc,
  caption,
}) => {
  return (
    <>
      <div
        onClick={handleClick}
        style={
          isClicked
            ? {
                display: 'flex',
                gap: '10px',
                marginTop: '40px',
                cursor: 'pointer',
                padding: '10px',
                background: 'rgb(237, 247, 148)',
                height: '40px',
                borderRadius: '8px',
              }
            : {
                display: 'flex',
                gap: '10px',
                marginTop: '40px',
                cursor: 'pointer',
              }
        }
      >
        <Image
          style={{
            width: '20px',
            maxWidth: '100%',
            cursor: 'pointer',
          }}
          src={imgSrc}
          width="20"
          height="20"
          alt="logo"
        />
        <Form.Label
          style={
            isClicked
              ? {
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'black',
                  cursor: 'pointer',
                  marginTop: '3px',
                }
              : {
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'black',
                  cursor: 'pointer',
                  marginTop: '3px',
                }
          }
        >
          {caption}
        </Form.Label>
      </div>
    </>
  );
};

export default SidebarContent;
