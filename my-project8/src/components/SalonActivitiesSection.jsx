
// Example images (replace with your actual image URLs)
const imageUrls = {
  haircut: 'https://via.placeholder.com/50?text=Haircut',
  coloring: 'https://via.placeholder.com/50?text=Coloring',
  styling: 'https://via.placeholder.com/50?text=Styling',
  manicure: 'https://via.placeholder.com/50?text=Manicure',
  pedicure: 'https://via.placeholder.com/50?text=Pedicure',
  facial: 'https://via.placeholder.com/50?text=Facial',
  waxing: 'https://via.placeholder.com/50?text=Waxing',
  massage: 'https://via.placeholder.com/50?text=Massage',
  consultation: 'https://via.placeholder.com/50?text=Consultation',
};

const activities = [
  { text: "Haircut", img: imageUrls.haircut },
  { text: "Hair Coloring", img: imageUrls.coloring },
  { text: "Styling", img: imageUrls.styling },
  { text: "Manicure", img: imageUrls.manicure },
  { text: "Pedicure", img: imageUrls.pedicure },
  { text: "Facial", img: imageUrls.facial },
  { text: "Waxing", img: imageUrls.waxing },
  { text: "Massage", img: imageUrls.massage },
  { text: "Consultation", img: imageUrls.consultation }
];

const SalonActivitiesSection = () => {
  return (
    <section className="p-6 bg-gray-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Salon Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-primary p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img src={activity.img} alt={activity.text} className="w-12 h-12 object-cover rounded-full" />
              <p className="text-lg font-medium">{activity.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonActivitiesSection;
