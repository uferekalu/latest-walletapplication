import { Form } from 'react-bootstrap';

interface Props {
  caption1: string;
  caption2: string;
}

export default function Heading(props: Props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '30px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '19px',
            fontWeight: 600,
            color: 'black',
          }}
        >
          {props.caption1} <br /> {props.caption2}
        </Form.Label>
      </div>
    </>
  );
}
