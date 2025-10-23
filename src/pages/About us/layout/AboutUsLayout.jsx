import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/footer";
import { MdVerified, MdThumbUp, MdRocketLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
import GlareButton from "../../../shared/utils/GlareButton";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-background-dark dark:text-content-dark  text-content-light font-display transition-colors">
      <Navbar />
      <main className="flex flex-col flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 text-center px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              Tech, Perfected.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-subtle-dark">
              Tekia is not just a marketplace. It's a statement. We believe in
              the power of expertly chosen technology to enhance life, not
              complicate it.
            </p>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto rounded-md border border-border-light dark:border-border-dark py-12 md:py-24 bg-gray-100 dark:bg-gray-800 px-3 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight leading-tight md:leading-snug">
                Expert Curation, Zero Compromises.
              </h2>
              <p className="text-sm md:text-base leading-relaxed md:leading-loose text-gray-600 dark:text-subtle-dark">
                Forget endless scrolling and sponsored confusion. Every single
                product on Tekia is hand-selected and rigorously tested by our
                dedicated team of tech experts. This is our promise of quality,
                performance, and genuine value.
              </p>
            </div>
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="flex items-start gap-4">
                <MdVerified className="text-4xl text-primary mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Uncompromising Quality
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark">
                    Our curation process means a consistent, high standard of
                    quality you can trust implicitly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdThumbUp className="text-4xl text-primary mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Radical Simplicity
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark">
                    We do the hard work of vetting so you can enjoy a simple,
                    confident shopping experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdRocketLaunch className="text-4xl text-primary mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Future-Proofed
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark">
                    We select innovative products that are not just good for
                    today, but are built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 text-center px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Stop Searching. Start Discovering.
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark mb-8">
              Your journey to better tech begins here. Explore a collection
              where every item is a masterpiece of form and function, chosen to
              bring clarity and quality to your digital life.
            </p>
            <Link to="/products">
              <GlareButton>Explore Collections</GlareButton>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
