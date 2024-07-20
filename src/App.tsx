import { MelvinProjects, MelvinProjectsTags } from "./data";
import ListComponent from "./components/ListComponent"

const App = () => {

  return (
    <div>App
      <ListComponent title="projects" data={MelvinProjects} tabs={MelvinProjectsTags} />
    </div>
  )
}

export default App
