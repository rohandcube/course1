
const CoursesSection = () => {
  const courses = [
    {
      title: 'SKIN FUNDAMENTAL',
      items: [
        'Makeup Theory',
        'Face Shapes',
        'Eyes Shapes',
        'Nose Shapes',
        'Lip Shapes',
        'Colour Theory',
        'Base Theory',
        'Brush Theory',
      ],
    },
    {
      title: 'EYEBROW THEORY',
      items: [
        'Natural Look',
        'Matt Look',
        'Night Makeup',
        'Nude Look',
        'Sagan Makeup',
        'Bridal Makeup',
        'Film Makeup',
        'Reception Makeup',
      ],
    },
    {
      title: 'MALE GROOM MAKEUP',
      items: [
        'Portfolio Makeup',
        'Fashion Makeup',
        'Old Era Makeup',
        'Different Eye Makeup',
        'Different Eyeliner',
        'Fantasy Makeup',
        'Airbrush Makeup',
      ],
    },
    {
      title: 'RUNWAY MAKEUP',
      items: [
        'Magazine Makeup',
        'Tan Makeup',
        'Illusion Makeup',
        'Airbrush Theory',
        'Party Makeup',
        'Bridal Makeup',
        'Fantasy Makeup',
      ],
    },
    {
      title: 'SKIN FUNDAMENTAL',
      items: [
        'Makeup Theory',
        'Face Shapes',
        'Eyes Shapes',
        'Nose Shapes',
        'Lip Shapes',
        'Colour Theory',
        'Base Theory',
        'Brush Theory',
      ],
    },
    {
      title: 'EYEBROW THEORY',
      items: [
        'Natural Look',
        'Matt Look',
        'Night Makeup',
        'Nude Look',
        'Sagan Makeup',
        'Bridal Makeup',
        'Film Makeup',
        'Reception Makeup',
      ],
    },
    {
      title: 'MALE GROOM MAKEUP',
      items: [
        'Portfolio Makeup',
        'Fashion Makeup',
        'Old Era Makeup',
        'Different Eye Makeup',
        'Different Eyeliner',
        'Fantasy Makeup',
        'Airbrush Makeup',
      ],
    },
    {
      title: 'RUNWAY MAKEUP',
      items: [
        'Magazine Makeup',
        'Tan Makeup',
        'Illusion Makeup',
        'Airbrush Theory',
        'Party Makeup',
        'Bridal Makeup',
        'Fantasy Makeup',
      ],
    },

  ];

  return (
    <section className="bg-gray-background py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-primary text-white p-6">
            <h3 className="font-bold text-xl mb-2">{course.title}</h3>
            <hr className="border-t border-gray-300 mb-4" />
            <ul className="space-y-1">
              {course.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-white text-center mt-8 px-4 md:px-16">
        These international certified courses provide in-depth knowledge of makeup at various levels.
        Get extensive knowledge of client management, products, makeup techniques & tools, etc., 
        to groom your skills to the highest level.
      </div>
    </section>
  );
};

export default CoursesSection;
