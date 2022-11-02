import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from '../components/Nav'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css'
export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <Nav/>
        <ToastContainer position='top-center' />
        <Component {...pageProps} />
        
        </>
    )
  }