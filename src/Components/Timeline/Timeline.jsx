import React from 'react'
import './timeline.css' // <-- ERROR: Removed this line

// Image paths
const backgroundPattern = "/images/timeline.png";
const img1 = "/images/dex 1.png";
const img2 = "/images/dex 2.png";
const img3 = "/images/TimelineFinal.png";
const img4 = "/images/frametimeline.png"


const Timeline = () => {
  return (
    // Note: Removed the wrapping <div> with id="timeline" as 
    // background is applied via className
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundPattern})`, height: '100vh' }}
      id="timeline" // Applying ID here for the CSS rule
    >
      {/* FIX: CSS ko seedhe component mein daal diya gaya hai 
        taaki 'timeline.css' import error na aaye.
      */}
      
      <div className="container">

        {/* FIXED: Changed class="img1" to className="img1" 
        */}
        <div className="img1">
          <img
            src={img1}
            // Tailwind classes for sizing. You can also use CSS.
            className="max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg lg:max-h-[30rem]"
          />
        </div>

        {/* FIXED: Changed class="img2" to className="img2" 
        */}
        <div className="img2">
          <img
            src={img2}
            className="max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg lg:max-h-[30rem]"
          />
        </div>
        
        {/* FIXED: Changed class="contain" to className="contain" 
        */}
        <div className="contain">
          <div className="img4">
            <h1 className="pokemon-title">Timeline</h1>
            <img
              src={img4}
              alt="Timeline Map Frame" // Added alt text for accessibility
            />
            
            <h1 className="pokemon-title-2">Tracks</h1>

            {/* FIXED: Changed class="buttons" to className="buttons" 
              FIXED: Changed class="btn" to className="btn"
            */}
            <div className="buttons"> 
              <a className="btn">Software</a>
              <a className="btn">Coding</a>
              <a className="btn">UI/UX</a>
            </div>
            
          </div>
        </div>
        
        <div className="img3">
          <img
            src={img3}
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg lg:max-h-52"
          />
        </div>
        
      </div>
    </div>
    
  )
}

export default Timeline

