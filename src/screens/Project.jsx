import Blog from "../components/project/Blog"
import Journal from "../components/project/Journal"
import ProjectHero from "../components/project/ProjectHero"
import Tour from "../components/project/Tour"

const Project = () => {
  return (
    <div>
      <ProjectHero />
      <Journal />
      <Tour />
      <Blog />
    </div>
  )
}
export default Project