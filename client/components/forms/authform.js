const AuthForm = (props) =>{
    return (
        <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group p-2">
              <small><label className="text-muted ">Your Name</label></small>
              <input type='text' className='form-control' placeholder="Enter name"
                value={props.name}
                onChange={(event) => {  props.setName(event.target.value) } } />
            </div>

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
              <small><label className="text-muted ">Pick a question</label></small>

              <select className="form-control p-2">
                <option>what is your favorite color</option>
                <option>in what city were you born</option>
                <option>what is the name of your favorite football club</option>
              </select>

              <div className="form-group p-2">
                <small><label className="text-muted ">Answer</label></small>
                <input type='text' className='form-control' placeholder="enter answer"
                  value={props.secret}
                  onChange={(event) => { props.setSecret(event.target.value) } } />
              </div>


            </div>

            <div className="form-group p-2">
              <button disabled={!props.name ||!props.email||!props.password||!props.secret} className="btn btn-primary col-12">submit</button>
            </div>


          </form>
        </div>
      </div>
    )
}
export default AuthForm