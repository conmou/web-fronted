import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import logoicon from "./image/icon.png"
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import img from "./image/pic.webp"

const navigation = [
    { name: '關於我', href: '/' },
    { name: '參與專案', href: '/project' },
    { name: '專業技能', href: '/language'},
  ]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [auth, setAuth] = useState(false)

  const [anonymous, setAnonymous] = useState(false)

  const navigate = useNavigate()

  const username = localStorage.getItem("username")

  const location = useLocation()
  // 检查当前路由是否等于指定路径
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const params = new URLSearchParams(location.search);
  // const username = params.get('username');

  useEffect(() => {
    // console.log(localStorage.token)
    // console.log(localStorage.getItem("token"))
    axios.get("http://localhost:5001", {
      headers: {
        'access-token' : localStorage.getItem("account")
      }
    })
    .then(res => {
      if(res.data.Status === "Success" || localStorage.getItem("anonymous")){
        setAuth(true)
        // setName(res.data.name)
      } else{
        return "res.data"
      }
    })
  })

  const handleSubmit = () => {
    localStorage.removeItem("account")
    localStorage.removeItem("anonymous")
    localStorage.removeItem("id")
    localStorage.removeItem("username")
    setAuth(false)
    navigate("/login");
    // window.location.reload();
  }
  return (
    <header className="bg-white">
      <Disclosure as="nav" className="bg-gray-dark py-1">
      {({ open }) => (
        <>
          <div className="max-auto px-2 sm:px-6 lg:px-8">
            <div className="flex-col py-3">
              <div className='relative'>
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-col sm:flex sm:flex-col lg:flex lg:flex-col lg:justify-center sm:items-stretch sm:justify-center">
                  <div className='lg:flex lg:flex-row sm:flex sm:flex-row flex flex-row'>
                    <div className="flex lg:basis-1/12 sm:basis-1/6 items-center justify-center basis-1/2">
                      <img
                          className="h-8 w-auto lg:block"
                          src={logoicon}
                          alt="logo"
                      />
                    </div>
                    <div className="justify-center lg:basis-9/12 sm:basis-4/6 hidden sm:ml-6 sm:flex sm:justify-start">
                        <div className='flex items-center space-x-4'>
                            <a href='/' className={isActiveRoute('/') ? 'bg-gray/40 text-white rounded-md px-3 py-2 text-lg font-bold' : 'hover:bg-gray/50 hover:text-white rounded-md px-3 py-2 text-lg font-bold text-titlebg'}>關於我</a>
                            <a href='/project' className={isActiveRoute('/project') ? 'bg-gray/40 text-white rounded-md px-3 py-2 text-lg font-bold' : 'hover:bg-gray/50 hover:text-white rounded-md px-3 py-2 text-lg font-bold text-titlebg'}>參與專案</a>
                            <a href='/language' className={isActiveRoute('/language') ? 'bg-gray/40 text-white rounded-md px-3 py-2 text-lg font-bold' : 'hover:bg-gray/50 hover:text-white rounded-md px-3 py-2 text-lg font-bold text-titlebg'}>專業技能</a>
                          </div>
                    </div>
                    <div class="lg:basis-2/12 sm:basis-1/6 basis-1/2 items-end justify-end">
                      { auth ?
                        <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 bg-gray/60 font-bold text-white shadow-xl">
                               {username} 歡迎回來
                              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="/profile"
                                      className={classNames(
                                        active ? 'hover:bg-gray text-white' : 'hover:text-gray',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      個人資訊
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={classNames(
                                        active ? 'hover:bg-gray text-white' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                      onClick={handleSubmit}
                                    >
                                      登出
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        :
                        <div class="flex max-w-xl items-center rounded-full">
                          <a href='/login' className="flex items-end rounded-md px-3 py-2 text-lg bg-gray/60 font-bold text-white hover:bg-gray/90 hover:text-white">登入</a>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 text-titletxt">
              <Disclosure.Button
                as="a"
                href="/"
                className={isActiveRoute('/') ? 'bg-gray/40 text-white block rounded-md px-3 py-2 text-lg font-bold' : 'text-base font-medium block hover:bg-gray/50 hover:text-white rounded-md px-3 py-2 text-titlebg'}
              >
                關於我
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/project"
                className={isActiveRoute('/project') ? 'bg-gray/40 text-white block rounded-md px-3 py-2 text-lg font-bold' : 'text-base font-medium block hover:bg-gray/50 hover:text-white rounded-md px-3 py-2 text-titlebg'}
              >
                參與專案
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/language"
                className={isActiveRoute('/language') ? 'bg-gray/40 text-white block rounded-md px-3 py-2 text-lg font-bold' : 'text-base font-medium block hover:bg-gray/50 hover:text-white rounded-md px-3 py-2 text-titlebg'}
              >
                專業技能
              </Disclosure.Button>
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'hover:bg-gray/50 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </header>
  )
}