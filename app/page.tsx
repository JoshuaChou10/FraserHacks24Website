import Image from 'next/image';
import styles from "../styles.module.css"
import Faq from '../components/Faq';

import Footer from '../components/Footer';
import Description from '../components/Description'


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-10 space-y-12">
      <div>
        <Image
          id="hero-logo"
          src="/hero-logo.png"
          alt="FraserHacks Logo: Blue circular logo"
          width={500}
          height={500}
          className={`${styles.blink} ${styles.glow}`}
        />
      </div>

      <div className="text-center max-w-[800px] mx-auto">
        <h2 className={`${styles.arcadeStyle} text-white text-4xl font-semibold mt-4`}>May 2024</h2>
        <h3 className="text-gray-400 text-xl font-normal mt-2 mb-5">John Fraser Secondary School, Mississauga</h3>
        <div id="mc_embed_signup" >
          <label>
            <span className="label">
              Sign up for our mailing list to be notified of when applications are open.
            </span>
            <div className="mt-4">
              <button id="register" className="bg-purple-600 text-white py-3 px-6 text-lg font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-purple-700">
                Register
              </button>
            </div>
          </label>
          {/* Hidden input for bot protection */}
          <div className="absolute left-[-5000px]" aria-hidden="true">
            <input type="text" name="b_a50dd0c50b611bd5e179d9b85_36ad7a17fc" value="" />
          </div>
          <div className="info"></div>

        </div>
      </div>

      <Description />
     

      <Faq />



      <Footer />
      
    </main>
  );
}
