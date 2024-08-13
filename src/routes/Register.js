import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { Link } from 'react-router-dom'
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
const Register = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const onSubmit = async (event) => {
    event.preventDefault();
    // login
    try {
      let data;
      data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data);
    } catch (error) {
      // console.log(error);
      setError(error.message);
    }
  };  

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
        <div className='loginForm w-[480px] h-[400px] flex justify-center rounded-md bg-[#313338] text-slate-100'>
          <div className='loginForm-leftSection flex flex-col justify-center gap-4 w-full h-full p-5 mx-2'>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold'>계정 만들기</h2>
            </div>
            <form onSubmit={onSubmit} className='flex flex-col gap-2'>
              <InputComponent content="이메일" name="email" type="email" value={email} onChange={onChange}/>
              <InputComponent content="비밀번호" name="password" type="password" value={password} onChange={onChange} />
              <input type="submit" value="가입하기" className='bg-[#5865F2] w-full h-11 rounded-sm' />
            </form>
            <div className='flex justify-between mx-6'>
              <button onClick={onSocialClick} name="google">Continue with Google</button>
              <button onClick={onSocialClick} name="github">Continue with Github</button>
            </div>
            <p className='text-sm text-sky-500'><Link to="/">이미 계정이 있으신가요?</Link></p>
            {error && <p className='text-red-600 font-semibold'>error! : {error}</p>}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register