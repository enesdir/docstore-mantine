import users from '../data/users.json'
import { UsersStack } from './UsersStack'

export const AppUser = () => {
  return (
    <div>
      <UsersStack data={users.data} />
    </div>
  )
}
