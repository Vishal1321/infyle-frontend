import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [vendor, setVendor] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!vendor ? (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Vendor Portal</h1>
          <Signup onSignup={setVendor} />
          <hr className="my-4"/>
          <Login onLogin={setVendor} />
        </div>
      ) : (
        <Dashboard vendor={vendor} />
      )}
    </div>
  );
};

export default App;
