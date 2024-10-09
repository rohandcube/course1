
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ShortTermCoursesSection from './components/ShortTermCoursesSection';
import ShortTermCoursesSection2 from './components/ShortTermCoursesSection2';
// import ShortTermCoursesSection3 from './components/ShortTermCoursesSection3';
import VideoSection from './components/VideoSection';
import SalonActivitiesSection from './components/SalonActivitiesSection';

function App() {
  return (
    <div className="font-sans bg-gray-background min-h-screen">
      <Header />
      <Hero />
      <Section />
      
      <ShortTermCoursesSection />
      <ShortTermCoursesSection2 />
      {/* <ShortTermCoursesSection3 /> */}
      <VideoSection />
      <SalonActivitiesSection />

    </div>
  );
}

export default App;
