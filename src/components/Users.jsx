import { useState, useEffect } from "react"


function Users() {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        console.log("Страница загрузилась")

        fetch("https://69ec8be9af4ff533142b1365.mockapi.io/users")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setUsers(data)
        })


    },[])

    return(
        <div>
            <h2>Список пользователей</h2>
            {users.map((user)=>(
                <div>
                    <img width={150} src={user.avatar} alt="" />
                    <p>Имя {user.name}</p>
                    <p>Возраст {user.age}</p>
                    <br />
                </div>
            ))}
        </div>
    )
}


export default Users