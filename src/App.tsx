import { MelvinProjects, MelvinProjectsTags } from "./data";
import ListComponent from "./components/ListComponent"
import Melvin from "./components/MelvinComponent";
import Perks from "./components/Perks";

const App = () => {

  return (
    <div className="container">
      <div className="header">

        <div className="melvin">
          <Melvin />
        </div>

        <div className="animation">
          <Perks />
        </div>
      </div>

      <div className="projects">
        <ListComponent title="projects" data={MelvinProjects} tabs={MelvinProjectsTags} />
      </div>
    </div>
  )
}

export default App
