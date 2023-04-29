import React, { useEffect, useState } from 'react';
import './tailwind.css'
import img from "./image/pic.webp"
import './App.css'
import axios from 'axios'
// import { useLocation, useNavigate } from 'react-router-dom';

function About() {
  // const navigate = useNavigate()
  // const location = useLocation()
  // console.log(location)
  const [comments, setComments] = useState([])
  const [addcomments, setaddComments] = useState({
    user_id: null,
    content: "",
    create_time: "",
    update_time: "",
  });
  const [Isshow, setIsshow] = useState(false)
  // const open = () =>{
  //   setIsshow(true);
  // }
  // const close = () =>{
  //   setIsshow(false);
  // }
  const [showupdate, setshowupdate] = useState([])
  const [updatecomments, setupdateComments] = useState({
    user_id: null,
    content: "",
    create_time: "",
    // update_time: "",
  });
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
    fecthAllComment();
  }, [])
// ADD
  const handleChange = (e) =>{
    setaddComments((prev)=>({...prev, [e.target.name]: e.target.value }))
  }
  
  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5001/comment", addcomments)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
// DELETE
  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:5001/comment/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
// UPDATE
  // useEffect(()=>{
    const fecthUpdateComment = async (id)=>{
      try{
        const res = await axios.get("http://localhost:5001/comment/"+id)
        setshowupdate(res.data);
        setIsshow(true)
        console.log(res.data)
      }catch(err){
        console.log(err);
      }
    }
  // }, [])

  // const commentId = location.pathname.split("/")
  const handleUpdateChange = (e) =>{
    setupdateComments((prev)=>({...prev, [e.target.name]: e.target.value }))
  }

  const handleUpdateClick = async (id) =>{
    try{
      await axios.put("http://localhost:5001/comment/"+id, updatecomments)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return [
    <div className="bg-bgcolor">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div id="wrapper" className='px-5 py-10 bg-spanbg drop-shadow-xl'>
          <h2 className="text-3xl font-bold tracking-tight text-titletxt sm:text-4xl bg-titlebg/50 p-2 drop-shadow-md">關於我</h2>
          <ul id="dynamic">
            <li><span className="text-2xl mt-4 text-xl text-white/50 underline underline decoration-dashed">
              Hi ！ I'm YuJin
            </span></li>
          </ul>
          <p className="mt-4 text-txtcolor">
            喜愛小動物 討厭爬蟲類
          </p>
          <p className="mt-4 text-txtcolor font-bold">
            <span className='grid grid-cols-4 px-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </span>
              Student & Front-end Engineer 
            <span className="ml-4 mt-4 text-txtcolor line-through font-normal"> 
              Maybe? 
            </span>
          </p>
          <p className="mt-4 text-txtcolor underline decoration-uderlinecolor">
            我是陳宥蓁，目前就讀於台中科技大學資訊應用菁英班。於學校有開發專案的經驗，保持好奇及野心，目前仍在學習更多面向技術，希望未來能找到自己的定位！！！
          </p>
        </div>
        <div className="grid grid-cols sm:gap-6 lg:gap-8">
          <img
            src={img}
            className="rounded-xl mx-auto item-conter"
            alt='me'
            width="80%"
          />
        </div>
      </div>

      <form>
        <span>輸入留言</span>
        <input type="number" class="w-full border" placeholder='user_id' onChange={handleChange} name='user_id'/>
        <input type="text" class="w-full border" placeholder='content' onChange={handleChange} name='content'/>
        <input type="text" class="w-full border" placeholder='create_time' onChange={handleChange} name='create_time'/>
        <input type="text" class="w-full border" placeholder='update_time' onChange={handleChange} name='update_time'/>
        <button onClick={handleClick}>Submit</button>
        {/* <input class="flex items-stretch rounded-none bg-white" onClick={handleClick} type="submit" value="submit"/> */}
      </form>
      
    </div>,
    <div>
      <h1>comment</h1>
      <div class='comments'>
        {comments.map(comment=>(
          <div class='bg-white'  key={comment.id}>
            <p>{comment.content}</p>
            <span> </span>
            <button class="rounded-none" onClick={()=>fecthUpdateComment(comment.id)}>Edit</button>
            <span> </span>
            <button class="rounded-none" onClick={()=>handleDelete(comment.id)}>Delete</button>
          </div>
        ))}
      </div>
      {/* {console.log(showupdate.user_id)} */}
      {Isshow ? (
      <form>
        <span>更改留言</span>
        <input type="number" class="w-full border" placeholder='user_id' onChange={handleUpdateChange} name='user_id' value={showupdate[0].user_id}/>
        <input type="text" class="w-full border" placeholder='content' onChange={handleUpdateChange} name='content' value={showupdate[0].content}/>
        <input type="text" class="w-full border" placeholder='create_time' onChange={handleUpdateChange} name='create_time' value={showupdate[0].create_time}/>
        {/* <input type="text" class="w-full border" placeholder='update_time' onChange={handleUpdateChange} name='update_time' value={showupdate[0].update_time}/> */}
        <button onClick={()=>handleUpdateClick(showupdate.id)}>Submit</button>
        {/* <input class="flex items-stretch rounded-none bg-white" onClick={handleClick} type="submit" value="submit"/> */}
      </form>
      ) : ''}
    </div>
  ];
}
export default About;
