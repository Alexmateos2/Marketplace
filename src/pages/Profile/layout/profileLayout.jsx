// ProfilePage.jsx
import React, { useState } from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/Footer";

import AsideProfile from "../components/asideProfile";
import FormProfile from "../components/formProfile";


const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen font-display bg-background-light dark:bg-background-dark text-text-light dark:text-white transition-colors">
        <AsideProfile />
        <main className="flex-1 p-4 sm:p-6 lg:p-10">
          <FormProfile />
        </main>
      </div>
     
      <Footer />
    </div>
  );
};

export default ProfilePage;
