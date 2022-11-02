import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {Modal} from  'antd'
import Link from 'next/link'
import { set } from 'mongoose'
import AuthForm from '../components/forms/authform'

const Register = () => {
 
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [secret,setSecret]= useState('')
    const [ok,setOk]=useState(false)
    const [loading,setLoading]=useState(false)
    

  const  handleSubmit = async (e)=>{
   e.preventDefault()
   
   axios
   .post(`${process.env.NEXT_PUBLIC_API}/register`,{
     name:name,
     email:email,
     password:password,
     secret:secret,
   })
   .then((res)=>setOk(res.data.ok))
   .catch((err)=>toast.error(err.response.data))

   setName('')
   setEmail('')
   setPassword('')
   setSecret('')

   

 
}
  return(
    
  <><div className="row  py-4 bg-primary text-light">
      <div className="col text-center">
        <h1 className="">Register </h1>
      </div>
    </div>

    
     <AuthForm
     
     handleSubmit={handleSubmit}
     name ={name}
     email= {email}
     password={password}
     secret={secret}
     setName={setName}
     setEmail={setEmail}
     setPassword={setPassword}
     setSecret={setSecret}
     />
     
     <div className="col text-center">
   already have an accout?<Link href="/login"> Login</Link>
   </div>
      <div className='row'>
        <div className='col'>
          <Modal
            title='congrats'
            open={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>registration successful</p>

            <Link href='/login' className='btn btn-primary btn-sm'>

              Login

            </Link>

          </Modal>
        </div>
      </div></>
  )}

    
      

export default Register