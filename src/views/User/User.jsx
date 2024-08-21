import { useUsersHook } from "../../hooks/usersHooks"
import { useParams } from "react-router-dom"

const User = () => {
  const users = useUsersHook().getAllUsers()
  const id = useParams().id

  if (!users){
    return (
      <div className="flex justify-center items-center m-14" >
        <span className="loading loading-spinner loading-lg">loading</span>
      </div>
    )
  }

  const user = users.find((user) => user.id === id)
  console.log(user)
  return (
    <>
      <h1>{user.name}</h1>
      <h2>added blogs</h2>
      <ul>
        {
          user.blogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default User