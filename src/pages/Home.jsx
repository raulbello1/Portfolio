import { AboutMe } from "../components/home/AboutMe"
import { HeroSection } from "../components/home/HeroSection"
import { HighLatedProjects } from "../components/home/HighLatedProjects"

export const Home = ({setSelectedPage}) => {
    return (
        <>
            <HeroSection setSelectedPage={setSelectedPage}/>
            <AboutMe/>
            <HighLatedProjects/>
        </>
    )
}