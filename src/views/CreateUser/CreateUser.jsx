import { Link } from "react-router-dom"

const CreateUser = () => {
  
  
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-9 min-w-full">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={null}>
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
              <input type="text" name="name" data-testid="name" ref={null} className="input input-bordered"/>
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
              <input type="password" name="Password" data-testid="password" ref={null} className="input input-bordered"/>
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