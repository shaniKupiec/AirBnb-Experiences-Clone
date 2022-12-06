import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  const name = "shani kupiec"
  const profession = "fullstcak developer"
  const about = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
  const interests = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."

  return (
    <main className="app">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}

export default App
