import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [vendor, setVendor] = useState(null);

  if (!vendor) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">Vendor Portal</h1>
        <div className="w-full max-w-md bg-white p-6 rounded shadow">
          <Signup onSignup={setVendor} />
          <hr className="my-6" />
          <Login onLogin={setVendor} />
        </div>
      </div>
    );
  }

  return <Dashboard vendor={vendor} />;
};

export default App;
