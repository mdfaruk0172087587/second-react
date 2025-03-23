import { use } from "react"

export default function User({fetchUser}) {
   const users = use(fetchUser)
//    console.log(users)
    return(
        <div className="card">
            <h2>Users: {users.length}</h2>
        </div>
    )
}