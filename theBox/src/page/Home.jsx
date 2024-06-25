import { About } from "../component/About"
import { Banner } from "../component/Banner"
import { Contact } from "../component/Contact"
import { Footer } from "../component/Footer"
import Header from "../component/Header"
import { Navbar } from "../component/Navbar"
import { Project } from "../component/Project"
import { Reputation } from "../component/Reputation"
import { Services } from "../component/Services"

export const Home = () => {
  return (
               <>
                              <Navbar/>
                              <Header/>
                              <Reputation/>
                              <About/>
                              <Services/>
                           
                              <Banner/>
                              <Project/>
                              <Contact/>
                              <Footer/>   
               </>
               

  )
}
