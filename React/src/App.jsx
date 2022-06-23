import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Logos from './components/logos'
import About from './components/about'
import Chapter from './components/chapter'
import Services from './components/services'

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Logos/>
       <About/>
       <Chapter/>
       <Services/>
       <Footer/>
    </div>
  )
}

export default App
