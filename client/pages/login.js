import LoginForm from "../components/forms/loginForm"
import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-toastify'
import {Modal} from  'antd'
import Link from 'next/link'
import { set } from 'mongoose'


const Login = () => {
 const [email,setEmail]=useState('')
 const[password,setPassword] = useState('')
 const[ok,setOk]=useState(false)

 const  handleSubmit = async (e)=>{
  e.preventDefault()
  
  // ${process.env.NEXT_PUBLIC_API}
  axios
  .post(`${process.env.NEXT_PUBLIC_API}/login`,{
    email:email,
    password:password,
   
  })
  .then((res)=>setOk(res.data))
  .catch((err)=>toast.error(err.response.data))



}
    return (
      <>
  <div  className="row  py-4 bg-primary text-light">
  <div className="container">
        <div className="col text-center">
          <h1 className="">Login </h1>
        </div>
      </div>
  </div>
      <LoginForm
          handleSubmit={handleSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword} />

          
   <div className="col text-center">
   Don't have an accout?<Link href="/register"> Register</Link>
   </div>
     <div className='col'>
          <Modal
            title='congrats'
            open={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
              <p>Login successful</p>

              <Link href='/home' className='btn btn-primary btn-sm'>

               Home

             </Link>
            </Modal>
            </div>
          </>
    
    )
  }
  export default Login