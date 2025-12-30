import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [vendor, setVendor] = useState(null);

  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6">
        {/* App Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          Vendor APP
        </h1>

        {/* Forms Container */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl">
          {/* Signup Form */}
          <div className="flex-1">
            <Signup onSignup={setVendor} />
          </div>

          {/* Login Form */}
          <div className="flex-1">
            <Login onLogin={setVendor} />
          </div>
        </div>
      </div>
    );
  }

  return <Dashboard vendor={vendor} />;
};

export default App;
