import { useSelector } from 'react-redux'

function UserName() {

  const user = useSelector(state => state.user.user)

  if (!user) return <p>Loading...</p>

  return <p className="userColor">{user.userName}</p>
}

export default UserName