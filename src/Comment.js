import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     name: 'Artwork Tee',
//     href: '#',
//     price: '$32.00',
//     color: 'Mint',
//     size: 'Medium',
//     inStock: true,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg',
//     imageAlt: 'Front side of mint cotton t-shirt with wavey lines pattern.',
//   },
// ]

function formatDateTime(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default function Comment() {
  const location = useLocation()
  // const params = new URLSearchParams(location.search);
  // const id = params.get('id');
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");

  const [count, setCount] = useState([])
  const [comments, setComments] = useState([])
  const [addcomments, setaddComments] = useState({
    user_id: id,
    content: "",
  });
  const [Isshow, setIsshow] = useState(false)
  const [showupdate, setshowupdate] = useState([])
  const [updatecomments, setupdateComments] = useState({
    content: "",
  });

  const [auth, setAuth] = useState(false)

  const [authtoken, setAuthToken] = useState(false)

  const [anonymous, setAnonymous] = useState(false)

  const [value, setValues] = useState(false)

  const navigate = useNavigate()
// READ
  useEffect(()=>{
    const fecthAllComment = async ()=>{
      try{
        const res = await axios.get("http://localhost:5001/comment")
        setComments(res.data);
      }catch(err){
        console.log(err);
      }
    }
    const countComment = async ()=>{
      try{
        const res = await axios.get("http://localhost:5001/comment/count")
        setCount(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fecthAllComment();
    countComment();
  }, [])

  useEffect(() => {
    axios.get("http://localhost:5001/user/"+id, {
      headers: {
        'access-token' : localStorage.getItem("account")
      }
    })
    .then(res => {
      if(res.data[0].token === localStorage.getItem("account") ){
        setAuthToken(true)
      } else {
        return res.data
      }
    })
  })

  // auth驗證登入
  useEffect(() => {
    axios.get("http://localhost:5001", {
      headers: {
        'access-token' : localStorage.getItem("account")
      }
    })
    .then(res => {
      if(res.data.Status === "Success" || localStorage.getItem("anonymous")){
        setAuth(true)
      }
      else {
        return res.data
      }
    })
  })

// ADD
  const handleChange = (e) =>{
    setaddComments((prev)=>({...prev, [e.target.name]: e.target.value }))
  }
  
  const handleClick = async e =>{
    e.preventDefault();
    // try{
    //   await axios.post("http://localhost:5001/comment", addcomments, {
    //     headers: {
    //       'access-token' : localStorage.getItem("account")
    //     }
    //   })
    //   // window.location.reload()
    // }catch(err){
    //   console.log(err)
    // }
    try {
      const token = localStorage.getItem("account") || localStorage.getItem("anonymous");
      if (token) {
        await axios.post("http://localhost:5001/comment", addcomments, {
          headers: {
            'access-token': token
          }
        });
        window.location.reload();
      } else {
        // 处理未登录的逻辑
      }
    } catch (err) {
      console.log(err);
    }
  }
// DELETE
  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:5001/comment/"+id, {
        headers: {
          'access-token' : localStorage.getItem("account")
        }
      })
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
// UPDATE
  // useEffect(()=>{
    const fecthUpdateComment = async (id)=>{
      try{
        const res = await axios.get("http://localhost:5001/comment/"+id, {
          headers: {
            'access-token' : localStorage.getItem("account")
          }
        })
        setshowupdate(res.data);
        setIsshow(true)
      }catch(err){
        console.log(err);
      }
    }
  // }, [])
  const handleUpdateChange = (e) =>{
    setupdateComments((prev)=>({...prev, [e.target.name]: e.target.value }))
  }

  const handleUpdateClick = async (id) =>{
    try{
      await axios.put("http://localhost:5001/comment/"+id, updatecomments, {
        headers: {
          'access-token' : localStorage.getItem("account")
        }
      })
      // navigate(`/?username=${username}&id=${id}`)
      // navigate('/')
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  const handleCancelClick = () => {
    setValues(false); // 将表单值重置为初始值
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">請多指教 共{count.map(c=>c.count)}則留言</h1>
        { auth || id === 21 || username=== 'guest' ?
            <div>
              <div className="mt-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  輸入留言
                </label>
                <div className="mt-1">
                  <form>
                      <input
                        name="content"
                        type="content"
                        placeholder='Enter Content'
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                      />
                        <button
                          type="submit"
                          onClick={handleClick}
                          className="mt-5 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 font-medium text-gray shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          ＳＥＮＤ
                        </button>
                      {/* <button onClick={handleClick}>Submit</button> */}
                  </form>
                </div>
              </div>
            </div>
        :
          <div className="mt-6 text-center text-sm">
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  登入留言ㄅ
                  <span aria-hidden="true"> &rarr;</span>
                </a>
          </div>
        }
        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="flex py-6 bg-navbarbg p-3 rounded-xl mb-5">
                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-start">
                        <img src="https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg" className="w-20 rounded-full" />
                        <div className="basis-11/12 ml-5 place-self-center flex-col justify-start">
                          <p className='mb-5'>{comment.name}</p>
                          <p className="text-sm font-medium text-gray-900">{formatDateTime(comment.update_time)}</p>
                        </div>
                        { setAuthToken && username === comment.name ?
                        <div>
                          <button type="button" onClick={()=>fecthUpdateComment(comment.id)} className="text-sm font-medium text-indigo-600 hover:text-spanbg">
                            <svg class="w-6 h-6 basis-1/12 justify-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                          </button>
                          <button type="button" onClick={()=>handleDelete(comment.id)} className="text-sm font-medium text-indigo-600 hover:text-red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                        :
                        ''
                        }
                      </div>
                      <div className="flex">
                        <h4 className="text-sm mt-5">
                        {Isshow && authtoken ? (
                          <form>
                            <span>更改留言</span>
                            <input type="text" class="w-full bg-white rounded-md p-1" placeholder='content' name='content' defaultValue={showupdate[0].content} onChange={handleUpdateChange} /> 
                            <div class="mt-2">
                              <button class="bg-white rounded-md p-1 mr-3" onClick={()=>handleUpdateClick(showupdate[0].id)}>更改</button>
                              <button class="bg-white rounded-md p-1" onClick={handleCancelClick}>取消</button>
                            </div>
                          </form>
                          ) : comment.content}
                        </h4>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </form>
      </div>
    </div>
  )
}