import Header from '../Header'
import Main from '../Main'
import Nav from '../Nav'
import Footer from '../Footer'
import Popup from '../Popup'
import dataContext from '../../context'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import restAPI from '../../functions/restAPI'
import styles from './style.module.css'

function Layout() {
  let { setData } = useContext(dataContext)
  let nav = useNavigate()


  // useEffect(() => {
  //   // Take token fron localStorage
  //   let token = localStorage.token
  //   console.log('token = ', token)

  //   // Check token and if the token expired the user redirected to login
  //   if (!token || !checkToken(token)) {
  //     // TODO = delete return
  //     return

  //     // Delete token from localStorage
  //     delete localStorage.token

  //     // Initializing the data of user in context
  //     setData(null)

  //     // Redirecting the user to the login page
  //     nav('/login')
  //   }
  // }, [])

  // function checkToken(token) {
  //   // TODO  =   API request to server to check token
  //   let response = restAPI(token)
  //   return response
  // }
  return (
    <div className="Layout">
      <Header />
      <Main />
      <Nav />
      <Footer />
      <Popup />
    </div>
  )
}
export default Layout
