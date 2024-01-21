import NavLeftComponent from "../molecules/NavLeftComponent"
import NavRightLoggedOut from "../molecules/NavRightLoggedOut"

export default function Header () {
    return (
        <div style={{width: '1024px', height: '39px'}} className="flex justify-between" >
            <NavLeftComponent></NavLeftComponent>
            <NavRightLoggedOut></NavRightLoggedOut>
        </div>
    )
}