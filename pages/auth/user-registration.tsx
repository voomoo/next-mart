import type { NextPage } from "next"

const UserRegistrationPage:NextPage = () => {
    return(
        <div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <input type="submit" value="submit" />
        </div>
    )
}

export default UserRegistrationPage;