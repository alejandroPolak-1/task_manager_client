import React, {useContext} from 'react'
import ProjectContext from '../../context/projects/ProjectContext.context'

const Project = ({project}) => {
      //Get form function
  const projectsContext = useContext(ProjectContext)
  const {actualProject} = projectsContext

  const handleOnClick = ()=>{
    actualProject(project.id)
  }
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={handleOnClick}
            >{project.name}
            </button>
        </li>
     );
}
 
export default Project;