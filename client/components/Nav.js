import Link from "next/link"
export const Nav = () => {
 const Styles=({
    fontSize:'1.1rem',
    marginRight:'auto',
    marginTop:'auto',
    marginBottom:'auto',
   
    
  })
  const link =({
    fontSize:'1.1rem',
   
  })
  return (
    <div>
      
      
<ul className="nav bg-dark d-flex justify-content-end ">
<li className="nav-link text-light" style={Styles}>Daemonlite</li>
  <li className="nav-item">
    <Link href='/' className="nav-link text-light "  style={link}>
      Home
    </Link>

  </li>
  <li className="nav-item">
    <Link href='/login' className="nav-link text-light "  style={link}>
      Login
    </Link>
  </li>
  <li className="nav-item">
  <Link href='/register' className="nav-link text-light " style={link}>
      SignUp
    </Link>
  </li>

</ul>

    </div>
  )
}
