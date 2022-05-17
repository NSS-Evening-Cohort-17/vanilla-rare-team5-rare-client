import react, { useEffect, useState} from "react";
import { getUsers } from "./UserManager";
import { Link } from "react-router-dom";

export const UserList = () => {
    const [ users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(usersData => setUsers(usersData))
    }, [])

    return(
        <div>
            <h1>User List</h1>
            <article className="users">
                {
                    users.map(user => {
                        return <section className="user" key={user.id}>
                            <h2>{user.first_name}{user.last_name}</h2>
                            <div>{user.username}</div>
                            <Link to={`/user/details`}> 
                                <button>View User Details</button>
                            </Link>
                        </section>
                    })
                }

            </article>


        </div>
    )
}