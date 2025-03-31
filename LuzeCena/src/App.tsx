
import './App.css'
import Banner from './components/banner'
import Footer from './components/footer'
import Header from './components/header'
import MovieSection from './components/moviesection'
import NewsLetter from './components/newsletter'

function App() {

  return (
  <>
  <Header/>
  <Banner src="./Imagens/Banner_Desktop_Texto.png" alt="Banner"/>
  <MovieSection/>
  <Banner src="./Imagens/Banner Combo Desktop.png" alt='Combo'/>
  <NewsLetter/>
  <Footer/>
  </>
  )
}

export default App
