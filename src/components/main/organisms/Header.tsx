import NavLeftComponent from '../molecules/NavLeftComponent'
import NavRightLoggedOut from '../molecules/NavRightLoggedOut'
import NavRightLoggedIn from '../molecules/NavRightLoggedIn'

export default function Header() {
  const user: boolean = false

  return (
    <div
      style={{ width: '1024px', height: '39px' }}
      className="flex justify-between"
    >
      <NavLeftComponent />

      {/* 로그인 여부 */}
      <div className="flex">
        {user ? <NavRightLoggedIn /> : <NavRightLoggedOut />}
      </div>
    </div>
  )
}
