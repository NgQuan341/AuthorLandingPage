import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Logos from './components/logos'
import About from './components/about'
import Chapter from './components/chapter'
import Services from './components/services'
import Testimonial from './components/testimonial'
import Books from './components/books'
import Author from './components/author'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Logos/>
       <About/>
       <Chapter/>
       <Services/>
       <Testimonial/>
       <Books/>
       <Author/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
