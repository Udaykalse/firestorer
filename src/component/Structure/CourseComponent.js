import React from 'react';
import '../Style/CourseComponent.css'

const CourseComponent = () => {
  return (
    <div className='mainDiv'>
      <h1 style={{color : "black"}} id='mainHeading'>Unlock New Skills with Our Courses</h1>
      <h2 id='mainSubHeading'>Learn and Grow at Your Pace</h2>
      <button id='Button'>Explore More</button>

      <div className="course-cards">
        {/* Card 1 */}
        <div className="card">
          <img src="https://imgs.search.brave.com/1rHd-VA7TWjPABWOnXzVoCjWuHoJmIvIbRKir-VNcGI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MDQ0NDg3Ni9waG90/by9wb3NpdGl2ZS1h/c2lhbi10ZWFjaGVy/LW1hbi1zbWlsaW5n/LXdyaXRpbmctb24t/d2hpdGVib2FyZC1p/bi1jbGFzc3Jvb20u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9M3cxUDAy/a3FwaVcyV3JaSm1l/RjJub09JdVdmVy00/UllwRDNwaXJWTDRD/az0" alt="Course 1" />
          <h3>Web Development Mastery</h3>
          <p>$60,000</p>
          <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
          <button>Learn More</button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="https://imgs.search.brave.com/rjSX8X5Ak-zty3QCqNpzC13WOTu9FqWLhqD_KI7EMKs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NTk0NjU2Ny9waG90/by9jb2xsZWdlLWlu/c3RydWN0b3ItYXNz/aXN0aW5nLWVsZWN0/cmljYWwtZW5naW5l/ZXJpbmctc3R1ZGVu/dHMud2VicD9iPTEm/cz0xNzA2NjdhJnc9/MCZrPTIwJmM9d000/NkNDUVNFUDNobkd2/UmEyQkNlbDZsYlQ0/MUdmZkFrSVV5WURz/ekFCWT0" alt="Course 2" />
          <h3>Course 2 Title</h3>
          <p>$80,000</p>
          <p>Navigate the Digital Landscape. Explore the world of digital marketing. Acquire skills in SEO, social media, and online advertising.</p>
          <button>Learn More</button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="https://imgs.search.brave.com/SnU5an6m221FbOg6Y6SS7JsT2zji4sBgnZDlL_vhcWs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NzgxOTQ2My9waG90/by9tYW4tdGVhY2hl/cy1oaXMtc3R1ZGVu/dHMtaG93LXRvLWRy/YXctaW4tYS1wcmlt/YXJ5LXNjaG9vbC1j/bGFzcy53ZWJwP2I9/MSZzPTE3MDY2N2Em/dz0wJms9MjAmYz02/UUpzTUw4a2FrUWxG/aWhJN1ZLTEFpZGgy/N1FVMlpGQVdLSlZJ/UDBVNzRjPQ" alt="Course 3" />
          <h3>Course 3 Title</h3>
          <p>$60,000</p>
          <p>Unleash your creativity with graphic design. Learn layout, typography, and visual communication.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
