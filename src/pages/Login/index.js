import React, { useState} from 'react'
import './login.css'
import { MdEmail, MdLock} from "react-icons/md";
import {HiEye, HiEyeOff} from "react-icons/hi"



const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const Click = (a) =>{
        a.preventDefault()
        setShow(!show);
    }

    return(
        <div className='login'>
            <div className='login-logo'>
                
                <img
                src='data:image/png;base64,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'
                alt='Login App'
                />
            </div>

            <div className='login-right'>
                <h1>Login</h1>

                <div className='loginInputEmail'>
                    <MdEmail/>
                    <input
                    style={{color:'white'}}
                    type='text'                    
                    placeholder='Digite Seu E-mail'
                    value={email}
                    onChange={a => setEmail(a.target.value)}
                     />
                </div>
                
                <div className='loginInputPassword'>
                <MdLock/>
                    <input
                    style={{color:'white'}}
                    type={show ? 'text' : 'password'}
                    placeholder='Digite Sua Senha'
                    value={password}
                    onChange={a => setPassword(a.target.value)}                   
                     />
                     <div className='login-eye'>
                         {show ? (
                             <HiEye
                             size={20}
                             onClick={Click}
                             />
                         ) : (
                            <HiEyeOff
                            size={20}
                             onClick={Click}
                            />
                         )}
                     </div>
                </div>
                <button type='submit' style={{color:'white'}}>Entrar</button>                
                <h4>Não tem conta? Cadastre-se!</h4>
                <button type='submit' style={{color:'white'}}>Cadastre-se</button>


                
            </div>
        </div>
    )
}

export default Login