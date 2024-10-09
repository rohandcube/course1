const ShortTermCoursesSection = () => {
    return (
      <section className="bg-gray-background text-white py-16 px-8 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center max-w-7xl">
          {/* Left Image Section */}
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://i.ibb.co/KbdFb59/pic4.png" 
              alt="Makeup Artistry" 
              className="rounded-lg border-4 border-primary shadow-lg mx-auto"
            />
          </div>
  
          {/* Right Text Section */}
          <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">
              International Makeup Artistry Short Term Courses
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between border-b border-gray-400 pb-2">
                <span>LEARNER MAKEUP ARTISTRY & HAIR DESIGNING CERTIFICATE</span>
                <span>15 DAYS</span>
              </li>
              <li className="flex justify-between border-b border-gray-400 pb-2">
                <span>INTERNATIONAL CERTIFICATE IN PRO- MAKEUP ARTISTRY</span>
                <span>1 MONTH</span>
              </li>
              <li className="flex justify-between border-b border-gray-400 pb-2">
                <span>INTERNATIONAL CERTIFICATE IN ADVANCED MAKEUP ARTISTRY</span>
                <span>2 MONTHS</span>
              </li>
              <li className="flex justify-between border-b border-gray-400 pb-2">
                <span>INTERNATIONAL CERTIFICATE IN ADVANCED CREATIVE EFFECTS ARTISTRY</span>
                <span>15 DAYS</span>
              </li>
              <li className="flex justify-between border-b border-gray-400 pb-2">
                <span>INTERNATIONAL CERTIFICATE IN PAGE -3 MAKEUP ARTISTRY</span>
                <span>15 DAYS</span>
              </li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded">
              Enquiry Now
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default ShortTermCoursesSection;
  