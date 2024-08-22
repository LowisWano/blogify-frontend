import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useNotify } from "../../context/notificationContext"
import userService from "../../services/userService"

const CreateUser = () => {
  const { displayNotif } = useNotify()
  const navigate = useNavigate()
  
  const handleRegister = async (event) => {
    event.preventDefault()
    
    if(event.target.Password.value !== event.target.Confirm.value){
      displayNotif('error','Passwords do not match. Please make sure both passwords are identical.')
    }else{
      try{
        await userService.createAccount({
          username: event.target.Username.value,
          name: event.target.Name.value,
          password: event.target.Password.value
        })
        navigate('/login')
        displayNotif('success', 'Your account has been successfully created! Please log in to continue.')
      }catch(error){
        displayNotif('error', error.response.data.error)
      }
    }
  }
  
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-9 min-w-full">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <h1 className="text-3xl font-bold text-center">Create an account</h1>
            <p className="text-center" >Already have an account? <Link to="/login" className="underline text-blue-600 hover:text-blue-800">Sign in</Link></p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" name="Username" data-testid="username" ref={null} className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="Name" data-testid="name" ref={null} className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="Password" data-testid="password" ref={null} className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input type="password" name="Confirm" data-testid="confirm" ref={null} className="input input-bordered"/>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateUser