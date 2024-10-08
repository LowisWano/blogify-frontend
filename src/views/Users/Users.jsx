import { useUsersHook } from "../../hooks/usersHooks"
import { Link } from "react-router-dom"

const Users = () => {

  const users = useUsersHook().getAllUsers()

  if (!users){
    return (
      <div className="flex justify-center items-center m-14" >
        <span className="loading loading-spinner loading-lg">loading</span>
      </div>
    )
  }

  console.log(users)
  return (
    <>
      <div className='flex justify-center items-center flex-col p-10 gap-7  '>
        <h1 className='text-center font-bold text-4xl'>Users</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra text-base">
            {/* head */}
            <thead className="text-base" >
              <tr>
              <th>users</th>
              <th>blogs created</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map((user) => (
                  <tr key={user.id} >
                    <td>
                      <Link className="underline text-blue-600 hover:text-blue-800" to={`/users/${user.id}`} >{user.name}</Link>
                    </td>
                    <td>{user.blogs.length}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Users