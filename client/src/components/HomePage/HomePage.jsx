import React from 'react';
import Slider from './Slider/Slider';
import Schedule from './Schedule/Schedule';
import Pricing from './Pricing/Pricing';
const HomePage = () => {
   return (
       <div>
           <Slider />
           <Schedule />
           <Pricing />
       </div>
   );
};
export default HomePage;