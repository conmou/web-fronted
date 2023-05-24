import React, { useState } from 'react'
import './tailwind.css'
import Validation from './LoginValidation'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import logoicon from "./image/icon.png"

// export const TokenContext = React.createContext(null);

function Login() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  
  const [username, setUsername] = useState('')

  const [id, setId] = useState('')

  const handleInput = (e) =>{
      setValues((prev)=>({...prev, [e.target.name]: e.target.value }))
  }

  const handleAccountSubmit = async e =>{
      e.preventDefault();
        try{
          const res = await axios.post("http://localhost:5001/login", values)
          if(res.data.Login){
            localStorage.setItem("account", res.data.token);
            const username = res.data.data[0].name
            const id = res.data.data[0].id
            localStorage.setItem("username", username);
            localStorage.setItem("id", id);
            navigate("/");
          }
        } catch(err){
          console.log(err)
        }
  }

  const handleAnonymousSubmit = async e =>{
    e.preventDefault();
      try{
        const res = await axios.post("http://localhost:5001/noauth/login")
        if(res.data.is_anonymous_Login){
          localStorage.setItem("anonymous", res.data.token);
          const username = res.data.data[0].name
          const id = res.data.data[0].id
          navigate(`/?username=${username}&id=${id}`);
          console.log(username)
        }
      } catch(err){
        console.log(err)
      }
  }

  // const dispatch = useDispatch()
  // dispatch(username,id);

//   function onSignIn(googleUser) {
//     const url = "http://localhost:5001/auth/google"
//     console.log(googleUser);
//     // 會跳出去要求授權畫面，回來後才達得到token
//     let id_token = googleUser.getAuthResponse().id_token
    
//     //  拿到後傳到後端去驗證，路由可自行設定       
//      axios.post(url, {id_token})
//     .then(res => console.log('send to backend successfully'))
//     .catch(err => console.error('error: send id_token fail!'))
//  }

    return (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white/90 rounded-2xl px-4 py-12 sm:px-6 lg:px-8 xl:px-12 w-96 drop-shadow-2xl">
              <div className="mx-auto w-full max-w-xl">
                <div>
                  <img
                    className="h-10 w-auto mx-auto"
                    src={logoicon}
                    alt="Your Company"
                  />
                  <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    登入你的帳號
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    還沒註冊過?{' '}
                    <a href="/register" className="font-semibold text-indigo-600 hover:text-white">
                      註冊
                    </a>
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Or {' '}
                    <a onClick={handleAnonymousSubmit} href="/" className="font-semibold text-indigo-600 hover:text-white">
                      匿名登入
                    </a>
                  </p>
                </div>
    
                <div className="mt-10">
                  <div>
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleAccountSubmit}>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          電子信箱
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder='Enter Email'
                            required
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={handleInput}
                          />
                          {/* {errors.email && <span class="text-red"> { errors.email } </span>} */}
                        </div>
                      </div>
    
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          密碼
                        </label>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder='Enter Password'
                            required
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={handleInput}
                          />
                          {/* {errors.password && <span class="text-red"> { errors.password } </span>} */}
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-spanbg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          登入
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
}
export default Login;
