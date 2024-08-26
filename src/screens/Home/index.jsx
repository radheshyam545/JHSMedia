import React from 'react'
import Header from '../../Component/Navbar/index'
import MostMediaExperienced from '../../Component/MostMediaExperienced'
import InfluencerMarketingSection from '../../Component/influencerMarkteing'
import OurMilestonesSection from '../../Component/OurMilestones'
import BrandGrid from '../../Component/Brands'
import FeaturedIn from '../../Component/Featured'
import GetInTouch from '../../Component/footer2/GetInTouch'

const Home = () => {
  return (
    <>
    <Header/>
    <MostMediaExperienced/>
    <InfluencerMarketingSection/>
    <OurMilestonesSection/>
    <BrandGrid/>
    <FeaturedIn/>
    </>
  )
}

export default Home
