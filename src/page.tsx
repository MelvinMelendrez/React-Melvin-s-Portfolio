import { ListComponent, MelvinComponent, PerksComponent } from "./components";
import { MelvinProjects, MelvinProjectsTags } from "./data";

const App = () => {

    return (
        <div className="container">

            <div className="header">

                <div className="melvin">
                    <MelvinComponent />
                </div>

                <div className="perks">
                    <PerksComponent />
                </div>


            </div>
            <div className="projects">
                <ListComponent title="projects" data={MelvinProjects} tabs={MelvinProjectsTags} />
            </div>

        </div>
    )
}

export default App
