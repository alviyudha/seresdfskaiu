import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Dealer from './Pages/Dealer'
import ErrorPage from './Pages/ErrorPage'
import BookingServices from './Pages/BookingServices'
import TestDrive from './Pages/TestDrive'
import Models from './Pages/Models'
import ModelsDetail from './Pages/ModelsDetail'
import Layout from './Layout'
import CookieConsentComp from './Components/CookieConsent'
import PrivacyPolicy from './Pages/PrivacyPolicy'


function App() {

  return (
    <>
    <CookieConsentComp />
    <Router>
      <Routes>
      <Route element={<Layout />}> 
        <Route path='/' element={<Home />} />
        <Route path='/dealer' element={<Dealer />} />
        <Route path='/booking/services' element={<BookingServices />} />
        <Route path='/booking/test-drive' element={<TestDrive />} />
        <Route path='/models' element={<Models />} />
        <Route path='/model/details/:modelName' element={<ModelsDetail />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
