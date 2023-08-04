
import './App.css';
import {Link, useNavigate, useParams} from "react-router-dom"

export function Dennys() {
  return <>DENNY</>
}

export function DennysJuice() {
  const { params} = useParams
  return <>DENNY</>
}

export function Albertos() {
  return <>ALBERTOS</>
}

export function ChicFilA() {
  return <>CHIC-FIL-A</>
}

function App() {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <div className="App">
      <h1>HOME</h1>
      <Link to="/dennys"> Denny's</Link>
      <Link to="/albertos"> Albertos</Link>
      <Link to="/chic-fil-a"> Chic-Fil-A</Link>
      <button onClick={()=>navigate("/dennys")} >Denny's</button>

      
    </div>
  );
}

export default App;

