import { useDispatch, useSelector } from "react-redux"
import NavBar from "../components/navbar"
import { setUser,reenit } from "../userSlice"

function Accueil () {
    const user = useSelector((state)=>state.user.value)
    const dispatch = useDispatch()

    return(
        <div>
            <NavBar />
            <h1> {user}</h1>
            <button onClick={()=>dispatch(setUser("pathy"))}>test</button>
            <button onClick={()=>dispatch(reenit())}>reenit</button>
           
            Accueil</div>
    )
}

export default Accueil