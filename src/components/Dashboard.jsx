const Dashboard = ({ vendor }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {vendor.name}</h1>
        <p className="mb-2">Email: {vendor.email}</p>
        <p className="mb-2">Phone: {vendor.phone}</p>
        <p className="mb-4">OAuth: {vendor.oauthProvider}</p>
        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600" onClick={() => window.location.reload()}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
