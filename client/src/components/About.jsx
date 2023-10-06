import Navbar from "./Navbar";
import Footer from "./Footer";
import pachange from "../assets/pachange.png";
import Akansha from "../assets/bhavsar.png";
import Laxmikant from "../assets/laxmi.png";
import Swayam from "../assets/swym.png";
const About = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen mt-20 bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">
            Meet Our <span className="text-blue-500">ParkMate Team</span>
          </h1>
          {/* Intro */}
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-300 text-lg">
            A fusion of FullStack and IoT Developers, alongside creative Figma
            Designers. We&apos;re reshaping parking solutions for a smarter,
            user-friendly urban experience. Stay tuned for innovation in motion.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            
            {/* Swayam Terode */}
            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl group hover:bg-blue-600 border-gray-700 hover:border-transparent">
              <div className="flex flex-col sm:-mx-4 sm:flex-row">
                {/* Swayam's Image */}
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                  src={Swayam}
                  alt=""
                />
                {/* Swayam's Title */}
                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-xl font-semibold  capitalize md:text-2xl text-white group-hover:text-white">
                    Swayam Terode
                  </h1>

                  <p className="mt-2 capitalize text-gray-300 group-hover:text-gray-300">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              {/* Swayam Intro */}
              <p className="mt-4 capitalize text-gray-300 group-hover:text-gray-300">
                A proficient Full Stack Developer with a focus on innovative
                digital solutions. I strive for seamless user experiences and
                robust functionality. Made Parkmate with love and passion.
              </p>
              {/* swayam socials */}
              <div className="flex mt-4 gap-6">
                {/* Gmail Link */}
                <a
                  rel="noopener noreferrer"
                  href="mailto:swayamterodex@gmail.com"
                  target="_blank"
                  title="Email"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                {/* X logo */}
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/swayamterode"
                  target="_blank"
                  title="X"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                    className="w-5 h-5"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/swayamterode/"
                  target="_blank"
                  title="LinkedIn"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                {/* Github */}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/swayamterode"
                  target="_blank"
                  title="GitHub"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* Laxmikant */}
            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl group hover:bg-blue-600 border-gray-700 hover:border-transparent">
              <div className="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                  src={Laxmikant}
                  alt="Laxmikant"
                />

                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-xl font-semibold capitalize md:text-2xl text-white group-hover:text-white">
                    Laxmikant Yelgandrawar
                  </h1>

                  <p className="mt-2 capitalize text-gray-300 group-hover:text-gray-300">
                    IoT Developer
                  </p>
                </div>
              </div>

              <p className="mt-4 capitalize text-gray-300 group-hover:text-gray-300">
                IoT Developer of the ParkMate, driving innovation and impactful
                solutions. With a strong track record, he excels in pioneering
                advancements in the IoT field.
              </p>

              <div className="flex mt-4 gap-6">
                {/* Gmail Link */}
                <a
                  rel="noopener noreferrer"
                  href="mailto:laxmikant.yelgandrawar7114@gmail.com"
                  target="_blank"
                  title="Email"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                {/* X logo */}
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/_Lucky_7114"
                  target="_blank"
                  title="X"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                    className="w-5 h-5"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/laxmikant-yelgandrawar-42272623b/"
                  target="_blank"
                  title="LinkedIn"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                {/* Github */}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/laxmikant7114"
                  target="_blank"
                  title="GitHub"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Pachnage Data Here! */}
            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl group hover:bg-blue-600 border-gray-700 hover:border-transparent">
              <div className="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                  src={pachange}
                  alt="Prathmesh"
                />

                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-xl font-semibold capitalize md:text-2xl text-white group-hover:text-white">
                    Prathamesh Pachange
                  </h1>

                  <p className="mt-2 text-white capitalize group-hover:text-white">
                    Figma Designer
                  </p>
                </div>
              </div>

              <p className="mt-4 text-white capitalize group-hover:text-white">
                Skilled Figma Designer, creating captivating, sleek interfaces
                with a blend of design aesthetics and strong technical expertise
                for exceptional digital experiences.
              </p>

              <div className="flex mt-4 gap-6">
                {/* Gmail Link */}
                <a
                  rel="noopener noreferrer"
                  href="pachangeprathmesh@gmail.com  "
                  target="_blank"
                  title="Email"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                {/* X logo */}
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/imPpachange?t=MMfslhd3g97ChBzttuGnsw&s=09 "
                  target="_blank"
                  title="X"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                    className="w-5 h-5"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/prathmesh-pachange-15b083190"
                  target="_blank"
                  title="LinkedIn"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                {/* Github */}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Prathmeshpachange "
                  target="_blank"
                  title="GitHub"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* Bavsar Data here! */}
            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl group hover:bg-blue-600 border-gray-700 hover:border-transparent">
              <div className="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                  src={Akansha}
                  alt=""
                />

                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-xl font-semibold  capitalize md:text-2xl text-white group-hover:text-white">
                    Akansha Bhavsar
                  </h1>

                  <p className="mt-2 capitalize text-gray-300 group-hover:text-gray-300">
                    Figma Designer
                  </p>
                </div>
              </div>

              <p className="mt-4 capitalize text-gray-300 group-hover:text-gray-300">
                Figma Designer crafting captivating user interfaces, driven by a
                passion for design and enhancing user engagement.
              </p>

              <div className="flex mt-4 gap-6">
                {/* Gmail Link */}
                <a
                  rel="noopener noreferrer"
                  href="mailto:akankshasujal007@gmail.com"
                  target="_blank"
                  title="Email"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                {/* X logo */}
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/AkankshaBh0909"
                  target="_blank"
                  title="X"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                    className="w-5 h-5"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/akanksha-bhavsar-7b2630223/"
                  target="_blank"
                  title="LinkedIn"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                {/* Github */}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/KANKSHA09"
                  target="_blank"
                  title="GitHub"
                  className="text-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
