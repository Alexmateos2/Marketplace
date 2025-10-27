// ProfilePage.jsx

import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";

import AsideProfile from "../components/asideProfile";
import FormProfile from "../components/formProfile";


const ProfilePage = () => {


  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navbar />
      <div className="flex min-h-screen  font-display bg-background-light dark:bg-background-dark text-text-light dark:text-white transition-colors">
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
