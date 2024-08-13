import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import qr_img from 'assets/qr_img.PNG';
import bg_img from 'assets/background_img.svg'
import bg_logo from 'assets/bg_logo.svg'

const InputComponent = ({content, type, name, onSubmit, value, onChange}) => {
  return (
    <div>
      <p className='text-[12px] font-semibold py-2 text-neutral-400'>{content} <span className='text-red-600'>*</span></p>
      <div className='bg-[#1E1F22] w-full h-10 rounded-sm'>
        <input type={type} placeholder='' required onSubmit={onSubmit} name={name} value={value} onChange={onChange} className='text-neutral-300 placeholder: flex justify-center w-[95%] h-10 mx-auto bg-[#1E1F22] focus:outline-none' />
      </div>
    </div>
  )
}

const Auth = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    // console.log(event.target.name);
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // login
  }

  const onSocialClick = async (event) => {
    // console.log(event.target.name);
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name=="github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(auth, provider);
  }


  return (
    <div className='relative'>
      <img src={bg_img} className='absolute object-cover w-full h-dvh' />
      <img src={bg_logo} className='absolute top-12 left-12' />
      <div className='relative flex w-full h-dvh items-center justify-center'>
        <div className='loginForm w-[780px] h-[420px] flex rounded-md bg-[#313338] text-slate-100'>
          <div className='loginForm-leftSection flex flex-col justify-center gap-4 w-3/5 h-full p-5 mx-2'>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold'>돌아오신 것을 환영해요!</h2>
              <p className='text-neutral-400'>다시 만나다니 너무 반가워요!</p>
            </div>

            <div className='flex flex-col gap-2'>
              <form onSubmit={onSubmit}>
                <InputComponent content="이메일 또는 전화번호" name="email" type="email" value={email} onChange={onChange}/>
                <InputComponent content="비밀번호" name="password" type="password" value={password} onChange={onChange} />
                <p className='text-sm text-sky-500 pb-4'><a href='#'>비밀번호를 잊으셨나요?</a></p>
                <input type="submit" value="로그인" className='bg-[#5865F2] w-full h-11 rounded-sm' />
              </form>
              <p className='text-sm text-neutral-400'>계정이 필요한가요? <span className='text-sky-500'><Link to="register">가입하기</Link></span></p>
              <div className='flex justify-between mx-6'>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
              </div>
            </div>
          </div>
          <div className='loginForm-rightSection flex flex-col justify-center items-center gap-6 w-2/5 h-full p-5'>
            <div className='w-8/12 h-8/12 flex flex-col justify-center'>
              <img src={qr_img} className='rounded-md'></img>
            </div>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold pb-2'>QR 코드로 로그인</h2>
              <p className='text-neutral-400 font-semibold pb-2'>Siinacord 모바일 앱으로 스캔해 바로 로그인 하세요.</p>
              <p className='text-sm text-sky-500'><a href='#'>또는, 패스키로 로그인하세요</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth