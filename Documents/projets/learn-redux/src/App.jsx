import {Routes,Route} from "react-router-dom"
import Accueil from "./pages/accueil";
import Apropos from "./pages/apropos";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/apropos" element={<Apropos />} />
    </Routes>
    // <Switch>
    //   <Route exact path="/">
    //     <Accueil />
    //   </Route>
    //   {/* <Route exact path="/apropos" component={<Apropos/>} /> */}
    // </Switch>

  )
}

export default App