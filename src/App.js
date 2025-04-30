
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import loginImage from "./assets/image/login-image.png"
import MobileHeader from "./assets/image/mobile_header.png"
import MobileFooter from "./assets/image/mobile-footer.png"
import { useOutletContext } from "react-router-dom"

export default function App() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [alert, setAlert] = useState(false)
  const { mode, toggleMode } = useOutletContext()
  const navigate = useNavigate()
  useEffect(() => { setAlert(false) }, [name])
  const handleUserName = (evt) => {
    setName(evt.target.value)
  }
  const handlePass = (evt) => {
    setPass(evt.target.value)
  }
  const handleCheck = () => {
    if (name !== "" && pass !== "") {
      axios.post(process.env.REACT_APP_API_URI, { name: name, password: pass })
        .then((response) => {
          const { data } = response
          if (data === true) {
            navigate('/success')
          }
          else {
            setAlert(true)
          }
        }

        )
    }
  }
  const handleSignup = () => {
    navigate('/signup')
  }

  const darkMode = ()=>{
    toggleMode()
}
  return (
    <div style={{backgroundColor:mode?"white":"black"}} className="smooth-transition flex px-5 py-12 md:h-screen  justify-center items-center">
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="flex  bg-[#09698C]  rounded-xl">
        <div className="justify-center items-center hidden md:flex">
          <img className="rounded-l-xl" style={{ width: "500px" }} src={loginImage} alt="login bg" />
        </div>
        <div className="flex flex-col ">
          <img className="md:hidden w-[100%]  rounded-t-xl" src={MobileHeader} alt="" />
          <div className="flex justify-between">
            <div className="flex gap-2 px-2 items-center pb-4">
              <span style={{backgroundColor:mode?"white":"black", color:mode?"black":"white"}} className="smooth-transition font-medium rounded-b-lg p-1 text-xs md:text-xl">Login</span>
              <button style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="text-white font-medium bg-[#278bb0] rounded-b-xl p-1 text-xs md:text-xl " onClick={handleSignup}>Signup</button>
            </div>
            <div className="px-2 md:px-5 md:py-1 cursor-pointer">
              <button onClick={darkMode}>{mode ? <i class="fa-solid fa-moon text-white md:text-2xl"></i> : <i class="fa-solid fa-sun text-white md:text-2xl"></i>}</button>
            </div>
          </div>
          <div className="md:flex flex-col justify-center items-center h-full  font-medium px-2 md:px-16 py-1">
            <h1 className="text-center text-xl font-bold pb-5 text-white">Welcome Back!</h1>
            <table>
              <tr className="pb-10">
                <td className="pr-5 align-top text-xs md:text-xl text-white">Name</td>
                <td>
                  <div className="pb-3">
                    <input required style={{backgroundColor:mode?"white":"black", color:mode?"black":"white"}}  className="smooth-transition p-1 border border-gray-500 rounded-lg" onChange={handleUserName} type="text" name="name" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pr-5 align-top text-xs md:text-xl text-white">Password</td>
                <td>
                  <div className="pb-5">
                    <input required style={{backgroundColor:mode?"white":"black", color:mode?"black":"white"}}  className="smooth-transition p-1 border border-gray-500 rounded-lg" onChange={handlePass} type="password" name="password" />
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td><button style={{backgroundColor:mode?"white":"black", color:mode?"black":"white"}}  className="smooth-transition mb-3 px-3 py-1 text-xs md:text-xl" onClick={handleCheck}>Login</button></td>
              </tr>
            </table>
            <div style={{ display: alert ? "block" : "none" }} className=" flex border bg-red-100 rounded-xl border-red-500 p-1 md:flex-col gap-1 justify-center text-center mt-2">
              <h1 className="text-xs md:text-xl font-medium text-red-500">Wrong username, password</h1>
              <h1 className="text-xs md:text-xl font-medium text-red-500">Please Try Again!</h1>
            </div>
          </div>
          <img className="md:hidden rounded-b-xl" src={MobileFooter} alt="footer" />
        </div>
      </div>
    </div>
  )
}