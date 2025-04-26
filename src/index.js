import "./index.css"
import ReactDOM from "react-dom/client"
import App from "./App"
import Success from "./success"
import Signup from "./signup"
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Layout from "./layout"
const app = ReactDOM.createRoot(document.getElementById("root"))

app.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<App/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)