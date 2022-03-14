import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import Axios from "../../lib/apiConfig";


const LoginPage:NextPage = () => {
    const [payload, setPayload] = useState({email: "", password: ""})
    const handleLogin = async() => {
        try {
            const res = await Axios.post("auth/login", payload)
            console.warn(res)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" value={payload.email} onChange={e => setPayload({...payload, email: e.target.value})}/>
            <input type="password" placeholder="Password" value={payload.password} onChange={e => setPayload({...payload, password: e.target.value})}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;