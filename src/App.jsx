
import './App.scss'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Greeting from './components/Greeting'
import List from './components/List'


function App() {
   return (
      <>
      <Header  headerText='Props er cool'/>
      <Main/> 
      <Footer/>
      </>
   )
}

export default App