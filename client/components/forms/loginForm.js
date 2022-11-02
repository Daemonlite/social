const LoginForm = (props)=>{

    
    return(
        <div className="col-md-6 offset-md-3">
     <form onSubmit={props.handleSubmit}>
     <div className="form-group p-2">
            <small><label className="text-muted ">E-mail address</label></small>
            <input type='email' className='form-control' placeholder="Enter e-mail"
                value={props.email}
                onChange={(event) => { props.setEmail(event.target.value) } } />
        </div>
        <div className="form-group p-2">
                <small><label className="text-muted ">Your password</label></small>
                <input type='password' className='form-control' placeholder="Enter password"
                    value={props.password}
                    onChange={(event) => { props.setPassword(event.target.value) } } />
            </div>

            <div className="form-group p-2">
              <button disabled={!props.email||!props.password} className="btn btn-primary col-12" >submit</button>
            </div>
     </form>
            </div>
    )
}
export default LoginForm