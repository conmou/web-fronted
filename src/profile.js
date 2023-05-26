import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  const [user, setUser] = useState([])

  const [updateuser, setupdateUser] = useState({
    username: "",
    sex: null,
    phone: "",
    des: "",
  });

  const id = localStorage.getItem('id')

  const navigate = useNavigate()

  useEffect(()=>{
    const fecthUser = async ()=>{
      try{
        const res = await axios.get("http://localhost:5001/user/"+id, {
          headers: {
            'access-token' : localStorage.getItem("account")
          }
        })
        setUser(res.data[0]);
      }catch(err){
        console.log(err);
      }
    }
    fecthUser();
  }, [])

  const handleUpdateChange = (e) =>{
    const { name, value } = e.target
    // setupdateUser((prev)=>({
    //   ...prev, 
    //   [name]: value,
    //   // [username]: e.target.value,
    //   // [sex]: name === "sex" ? parseInt(value) : value,
    //   // [phone]: e.target.value,
    //   // [des]: e.target.value,
    // }))
    setupdateUser((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const handleUpdateClick = async (id) =>{
    try{
      await axios.put("http://localhost:5001/user/"+id, updateuser, {
        headers: {
          'access-token' : localStorage.getItem("account")
        }
      })
      // window.location.reload()
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  console.log(updateuser)

  return (
    <div className="isolate bg-bg px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">個人檔案</h2>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="Name" className="block text-md font-semibold leading-6 text-gray-900">
              姓名
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                // value={user.name || ""}
                defaultValue={user.name}
                onChange={handleUpdateChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-md font-semibold leading-6 text-gray-900">
              性別
            </label>
            <div defaultValue={user.name} className="mt-2.5 flex">
                <div class="flex items-center basis-1/3 justify-center">
                  <input 
                    type="radio" 
                    id="sex0" 
                    value="0" 
                    name="sex" 
                    class="form-radio text-indigo-600" 
                    checked={user.sex === 0}
                    onChange={handleUpdateChange}
                  />
                  <label for="option0" class="ml-2 font-bold">男</label>
                </div>
                <div class="flex items-center basis-1/3 justify-center">
                  <input 
                    type="radio" 
                    id="sex1" 
                    value="1" 
                    name="sex" 
                    class="form-radio text-indigo-600" 
                    checked={user.sex === 1}
                    onChange={handleUpdateChange}
                  />
                  <label for="option1" class="ml-2 font-bold">女</label>
                </div>
                <div class="flex items-center basis-1/3 justify-center">
                  <input 
                    type="radio" 
                    id="sex2" 
                    value="2" 
                    name="sex" 
                    class="form-radio text-indigo-600" 
                    checked={user.sex === 2}
                    onChange={handleUpdateChange}
                  />
                  <label for="option2" class="ml-2 font-bold">其他</label>
                </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-md font-semibold leading-6 text-gray-900">
              電話
            </label>
            <div className="mt-2.5">
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="phone"
                // value={user.phone || ""}
                defaultValue={user.phone}
                onChange={handleUpdateChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-md font-semibold leading-6 text-gray-900">
              描述
            </label>
            <div className="mt-2.5">
              <textarea
                name="des"
                id="des"
                rows={4}
                onChange={handleUpdateChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                // value={user.des || ""}
                defaultValue={user.des}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-gray' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            onClick={ () => handleUpdateClick(user.id) }
            className="block w-full rounded-md bg-gray-dark px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            更新
          </button>
        </div>
      </form>
    </div>
  )
}