import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const stages = [
      () => setAnimationStage(1),
      () => setAnimationStage(2),
      () => setAnimationStage(3),
    ];
    stages.forEach((stageFunc, index) => {
      setTimeout(stageFunc, index * 1000); 
    });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCustomerLogin = () => {
    handleCloseModal();
    navigate("/customer-signin");
  };

  const handleMerchantLogin = () => {
    handleCloseModal();
    navigate("/merchant-signin");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white flex flex-col items-center p-64 h-full text-center">
        <h1
          className={`text-4xl font-bold transition-all duration-700 ${
            animationStage >= 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Welcome to AgriMart
        </h1>
        <p
          className={`mt-4 text-lg transition-all duration-700 ${
            animationStage >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          Cultivating Growth, One Seed at a Time!
        </p>
        <button
          className={`mt-8 bg-green-700 text-white font-semibold py-3 px-10 rounded-full transition-all duration-700 ${
            animationStage >= 3
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          } hover:bg-green-600`}
          onClick={handleOpenModal}
        >
          Sign In
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20">
            <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Login Options
              </h2>
              <div className="flex flex-col items-center gap-4">
                <button
                  className="w-full bg-green-600 text-white font-semibold py-3 rounded-full text-lg hover:bg-green-700 transition-colors duration-300"
                  onClick={handleCustomerLogin}
                >
                  Customer Login
                </button>
                <button
                  className="w-full bg-green-600 text-white font-semibold py-3 rounded-full text-lg hover:bg-green-700 transition-colors duration-300"
                  onClick={handleMerchantLogin}
                >
                  Merchant Login
                </button>
              </div>
              <button
                className="mt-6 text-red-600 font-semibold w-full text-center hover:underline"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
