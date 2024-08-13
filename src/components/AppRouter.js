import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "routes/Auth";
import Chan1 from "routes/Chan1";
import Chan2 from "routes/Chan2";
import ChanMe from "routes/ChanMe";
import Home from "routes/Home";
import Register from "routes/Register";

const AppRouter = ({ isLoggedIn }) => {

return (
  <BrowserRouter basename="/">
    <div>
      <Routes>
      {
        isLoggedIn ? (
          <Route path='/' element={<Home />}/>
          ) : (
          <Route path='/' element={<Auth />}/>
        )
      }
      <Route path='/register' element={<Register />}/>
      <Route path='/channels/@me' element={<ChanMe />}/>
      <Route path='/channels/1' element={<Chan1 />}/>
      <Route path='/channels/2' element={<Chan2 />}/>


      {/* Default route to Home component */} 
      {/* <Route path="/" element={<Navigate to="/home" />} />  */}
      {/* Catch all unmatched routes and redirect to Home */} 
      {/* <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
      {/* <ScrollToTop smooth width="20" height="20" color="white" style={{background : '#473DCE', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none'}}/> */}
    </div>
  </BrowserRouter>
  )
}

export default AppRouter;