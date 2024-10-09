

const Hero = () => {
  return (
    <section className="bg-gray-500 text-white py-8 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img src="images/7pic1.png" alt="Makeup Artist" className="border-4 border-primary"/>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-primary">Best Aesthetic and Cosmetic Courses</h1>
          <p className="text-lg leading-relaxed">
            Designing beauty, fashion with professional makeup courses and professional makeup artist course since 1997, FashionTV has introduced the FTV Salon Academies in India...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
