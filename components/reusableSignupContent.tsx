import { Dispatch, SetStateAction } from 'react';
import { Form } from 'react-bootstrap';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

interface Props {
  caption?: string;
  type?: string;
  placeholder?: string;
  isPassword?: boolean;
  showPassword?: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  isConfirmPassword?: boolean;
  showConfirmPassword?: boolean;
  setShowConfirmPassword: Dispatch<SetStateAction<boolean>>;
}

export default function ReusableSignupContent(props: Props) {
  return (
    <>
      <Form.Label
        style={{
          fontSize: '13px',
          fontWeight: 400,
          color: 'black',
          marginTop: '40px',
        }}
      >
        {props.caption}
      </Form.Label>
      <input
        style={{
          border: '1px solid rgba(27, 42, 59, 0.1)',
          width: '100%',
          height: '49px',
          fontSize: '12px',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
        }}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.isPassword &&
        (props.showPassword ? (
          <BsFillEyeSlashFill
            style={{
              marginLeft: 'auto',
              marginRight: '10px',
              marginTop: '-30px',
              cursor: 'pointer',
            }}
            onClick={() =>
              props.setShowPassword((prevState: boolean) => !prevState)
            }
          />
        ) : (
          <BsFillEyeFill
            style={{
              marginLeft: 'auto',
              marginRight: '10px',
              marginTop: '-30px',
              cursor: 'pointer',
            }}
            onClick={() =>
              props.setShowPassword((prevState: boolean) => !prevState)
            }
          />
        ))}
      {props.isConfirmPassword &&
        (props.showConfirmPassword ? (
          <BsFillEyeSlashFill
            style={{
              marginLeft: 'auto',
              marginRight: '10px',
              marginTop: '-30px',
              cursor: 'pointer',
            }}
            onClick={() =>
              props.setShowConfirmPassword((prevState: boolean) => !prevState)
            }
          />
        ) : (
          <BsFillEyeFill
            style={{
              marginLeft: 'auto',
              marginRight: '10px',
              marginTop: '-30px',
              cursor: 'pointer',
            }}
            onClick={() =>
              props.setShowConfirmPassword((prevState: boolean) => !prevState)
            }
          />
        ))}
    </>
  );
}
