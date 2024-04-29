import HeroSection from "@/components/Shared/UI/HomePage/HeroSection/HeroSection"
import Specialist from "@/components/Shared/UI/HomePage/Specialist/Specialist"
import TopRatedDoctors from "@/components/Shared/UI/HomePage/TopRatedDoctors/TopRatedDoctors"
import WhyUs from "@/components/Shared/UI/HomePage/WhyUs/WhyUs"



const HomePage = () => {
  return (
    <>
     <HeroSection/>
     <Specialist/>
     <TopRatedDoctors/>
     <WhyUs/>
    </>
  )
}

export default HomePage