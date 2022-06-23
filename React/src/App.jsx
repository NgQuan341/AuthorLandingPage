import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Logos from './components/logos'
import About from './components/about'
import Chapter from './components/chapter'
import Services from './components/services'
import Testimonial from './components/testimonial'

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
       <Footer/>
    </div>
  )
}

export default App
