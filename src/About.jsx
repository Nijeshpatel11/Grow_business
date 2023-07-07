import React from 'react'
import webs from './images//FSMS-hero-image.svg'
import Common from './Common';

const About = () => {
    return (
        <> 
        <div className='about-section' >
          <Common name='Welcome to About page' 
          imgsrc={webs} 
          visit='/contact' 
          btname='Contact Now' /> 
          </div>
        </>
    );

}
export default About;