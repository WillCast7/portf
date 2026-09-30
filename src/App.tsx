import Education from './components/segments/education'
import Greeting from './components/segments/greeting'
import Introduction from './components/segments/introduction'
import Technologies from './components/segments/technologies'
import Skills from './components/segments/skills'
import Enterprises from './components/segments/enterprises'
import Proyects from './components/segments/proyects'


function App() {

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#181818] text-white">
      <Greeting/>
      <Introduction/>
      <Education/>
      <Technologies/>
      <Skills/>
      <Enterprises/>
      <Proyects/>
    </div>
  )
}

export default App
