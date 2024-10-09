const SectionWithImageOnRight = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center bg-gray-800 text-white p-8 min-h-screen">
        {/* Container to center content */}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto">
          {/* Left Side: Text Area */}
          <div className="flex-1 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">International Makeup Artistry Short Term Courses</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex justify-between">
                <span>LEARNER MAKEUP ARTISTRY & HAIR DESIGNING CERTIFICATE</span>
                <span>15 DAYS</span>
              </li>
              <li className="flex justify-between">
                <span>INTERNATIONAL CERTIFICATE IN PRO- MAKEUP ARTISTRY</span>
                <span>1 MONTH</span>
              </li>
              <li className="flex justify-between">
                <span>INTERNATIONAL CERTIFICATE IN ADVANCED MAKEUP ARTISTRY</span>
                <span>2 MONTHS</span>
              </li>
              <li className="flex justify-between">
                <span>INTERNATIONAL CERTIFICATE IN ADVANCED CREATIVE EFFECTS ARTISTRY</span>
                <span>15 DAYS</span>
              </li>
              <li className="flex justify-between">
                <span>INTERNATIONAL CERTIFICATE IN PAGE -3 MAKEUP ARTISTRY</span>
                <span>15 DAYS</span>
              </li>
            </ul>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full">Enquiry Now</button>
          </div>
          {/* Right Side: Image */}
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src="images/4pic3.png"
              alt="Makeup Artistry"
              className="rounded-lg border-4 border-primary shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionWithImageOnRight;
  