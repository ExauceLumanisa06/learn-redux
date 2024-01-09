import { useDispatch, useSelector } from "react-redux"
import NavBar from "../components/navbar"
import { setUser,reenit,pushList } from "../userSlice"
import axios from "axios";

function Accueil () {
    

    const user = useSelector((state)=>state.user.value)
    const list = useSelector((state)=>state.user.list)
    const dispatch = useDispatch()

    const  getData = async  () => {
        const newlist = await axios({
            method:"get",
            headers:{
                "cache-control": 'max-age=43200', "content-type": 'application/json; charset=utf-8', expires: '-1', pragma: 'no-cache'
            }
        })
        dispatch(pushList(newlist))
    }

    return(
        <div>
            <NavBar />
            <h1> {user}</h1>
            <button onClick={()=>dispatch(setUser("pathy"))}>test</button>
            <button onClick={()=>dispatch(reenit())}>reenit</button>
            <button onClick={getData}>push</button>
           <br />
           <ul>
            {list?.map((data)=>{
                return <li>data.title</li>
            })}
           </ul>
            Accueil</div>
    )
}

export default Accueil