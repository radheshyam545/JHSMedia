import React from 'react'
import Header from '../../Component/Navbar/index'
import MostMediaExperienced from '../../Component/MostMediaExperienced'
import InfluencerMarketingSection from '../../Component/influencerMarkteing'
import OurMilestonesSection from '../../Component/OurMilestones'
import BrandGrid from '../../Component/Brands'
import FeaturedIn from '../../Component/Featured'
import GetInTouch from '../../Component/footer2/GetInTouch'
import ProductWebsites from './productWebsite/product_website'
import ServicesSection from './ServicesSection/services_section'

const Home = () => {
  return (
    <>
    <Header/>
    <MostMediaExperienced/>
    <InfluencerMarketingSection/>
    <OurMilestonesSection/>
    <ProductWebsites/>
    <BrandGrid/>
    <ServicesSection/>
    <FeaturedIn/>
    </>
  )
}

export default Home
