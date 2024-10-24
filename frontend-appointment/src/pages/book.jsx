import { useContext, useState } from 'react';
import { ServiceContext } from '../components/Layout'; // Import your context

const Book = () => {
  const { service , setService } = useContext(ServiceContext); // Get the selected service from context
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [service1, setService1] = useState(service || ''); // If service exists, use it; else, allow selection
  const [timing , setTiming] = useState('')
    const availableServices = ['Haircut', 'Facial', 'Manicure', 'Pedicure', 'Massage'];
    const availableTime = ['9-11 AM' , '2-4 PM' , '6-8 PM']
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      name,
      email,
      date,
      timing,
      service:  service || service1,
     // Either the pre-selected or chosen service

    };
    console.log('Booking details: ', bookingDetails);
    // Here you would typically send bookingDetails to your server or API
  };

  return (
    <form onSubmit={handleSubmit} className=" sm:mt-20 max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
        <select
            id="timings"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a Timing</option>
            {availableTime.map((s, index) => (
              <option key={index} value={s} >
                {s}
              </option>
            ))}
          </select>
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
        {service ? (
          <input
            type="text"
            id="service"
            value={service.title}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
          />
        ) : (
          <select
            id="service"
            value={service}
            onChange={(e) => setService1(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a service</option>
            {availableServices.map((s, index) => (
              <option key={index} value={s} >
                {s}
              </option>
            ))}
          </select>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default Book;
