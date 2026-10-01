import Navbar from './components/common/Navbar'
import Greeting from './components/segments/greeting'
import Introduction from './components/segments/introduction'
import Enterprises from './components/segments/enterprises'
import Technologies from './components/segments/technologies'
import Skills from './components/segments/skills'
import Proyects from './components/segments/proyects'
import Education from './components/segments/education'
import ContactMe from './components/segments/contactme'

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#0B0F17] text-white selection:bg-teal-500 selection:text-white">
      <Navbar />
      <main>
        <Greeting />
        <Introduction />
        <Enterprises />
        <Technologies />
        <Skills />
        <Proyects />
        <Education />
        <ContactMe />
      </main>
    </div>
  )
}

export default App
