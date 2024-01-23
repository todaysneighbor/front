import NavLeftComponent from "../molecules/NavLeftComponent"
import NavRightLoggedOut from "../molecules/NavRightLoggedOut"
import NavRightLoggedIn from "../molecules/NavRightLoggedIn";

export default function Header () {
    let user: boolean = true;

    return (
        <div style={{width: '1024px', height: '39px'}} className="flex justify-between" >
            <NavLeftComponent></NavLeftComponent>

            {/* 로그인 여부 */}
            {user ? (
                <NavRightLoggedIn></NavRightLoggedIn>
            ) : (
                <NavRightLoggedOut></NavRightLoggedOut> 
            )}
        </div>
    )
}