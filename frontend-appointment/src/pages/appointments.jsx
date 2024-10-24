
function Apoint() {
    return (
      <div className="flex flex-col justify-center items-start pl-10 pt-10">
        <div className="flex flex-col  border-2 rounded-xl bg-pink-100 border-slate-300 justify-start gap-4 p-6 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Appointment Details</h3>
  
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium text-gray-700">Name: <span className="font-normal">John Doe</span></p>
            <p className="text-lg font-medium text-gray-700">Email: <span className="font-normal">john@example.com</span></p>
            <p className="text-lg font-medium text-gray-700">Preferred Date: <span className="font-normal">25th October, 2024</span></p>
            <p className="text-lg font-medium text-gray-700">Service: <span className="font-normal">Haircut</span></p>
          </div>
          <button
            className="mt-6 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Check Status
          </button>
        </div>
      </div>
    );
  }
  
export default Apoint