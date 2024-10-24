
import ServiceCard from '../components/card.component.jsx';


const data_service = [
  {
    title: "Hair Styling",
    description: "Professional haircuts, coloring, and styling services",
    price: "From $50",
    image: "/images/hair-styling.jpg"
  },
  {
    title: "Facial Treatment",
    description: "Rejuvenating facials and skin care treatments",
    price: "From $75",
    image: "/images/facial.jpg"
  },
  {
    title: "Manicure & Pedicure",
    description: "Luxury nail care and treatment",
    price: "From $40",
    image: "/images/nails.jpg"
  },
  {
    title: "Makeup",
    description: "Professional makeup for any occasion",
    price: "From $60",
    image: "/images/makeup.jpg"
  },
  {
    title: "Massage",
    description: "Relaxing therapeutic massages",
    price: "From $80",
    image: "/images/massage.jpg"
  },
  {
    title: "Waxing",
    description: "Full body waxing services",
    price: "From $30",
    image: "/images/waxing.jpg"
  }
];








const SalonHomepage = () => {

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="bg-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Welcome to Glamour Haven
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Experience luxury beauty treatments and professional care
            </p>
            <div className="mt-8">
              <a 
                href="/book" 
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-pink-700"
              >
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data_service.map((data, index) => (
            <ServiceCard key={index} data={data}  />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Glamour Haven</h3>
              <p className="text-gray-400">Making you look and feel beautiful</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Beauty Street</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: info@glamourhaven.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="text-gray-400">Mon-Fri: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-400">Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Sun: Closed</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalonHomepage;