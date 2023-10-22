export default function Land() {
  return (
    <main>
      <div className="font-Inter display-table-row bg-ourBlue h-28">
        <div className="flex flex-row">
          <div className="w-pl-6 static pl-6 pt-6 text-6xl text-white">
            RPGenius
          </div>
          <div className="mt-8 flex w-full justify-end scroll-smooth">
            <a
              href="http://localhost:3000/land"
              className="bg-ourBlue text-3xl text-black hover:text-slate-600 sm:hidden md:inline-block md:pr-8 lg:pr-16"
            >
              Home
            </a>
            <a
              href="#aboutus"
              className="bg-ourBlue scroll-smooth text-3xl text-black hover:text-slate-600 sm:hidden md:inline-block md:pr-8 lg:pr-16"
            >
              About Us
            </a>
            <a
              href="#ourteam"
              className="bg-ourBlue text-3xl text-black hover:text-slate-600 sm:hidden md:inline-block md:pr-8 lg:pr-16"
            >
              Our Team
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <h1 className="mb-8 mt-6 pt-10 text-center font-sans text-8xl drop-shadow-md">
          School, Done <span className="text-ourBlue italic">Our</span> Way
        </h1>
      </div>

      <hr className="align-center m-auto mb-20 h-12 w-4/5 "></hr>

      <div className="align-center bg-beige relative m-auto flex h-64 w-1/2 justify-center rounded-3xl">
        <img
          className="float-center relative object-scale-down"
          src="../../public/photos/harnake1.gif"
        />

        <span className="static pb-4 pt-12 text-4xl">Access Your Account</span>

        <span className="float-center absolute mt-32 h-1/6 content-center">
          <a
            href=""
            className="hover:bg-teal bg-ourBlue m-4 mr-6 rounded-2xl px-20 py-5 font-sans text-2xl text-white"
          >
            Log In
          </a>
          <a
            href=""
            className="hover:bg-teal bg-ourBlue m-4 ml-6 rounded-2xl px-20 py-5 font-sans text-2xl text-white"
          >
            Sign Up
          </a>

          {/*
            <button className="bg-ourBlue hover:bg-teal m-4 mr-6 rounded-2xl px-20 py-5 font-sans text-2xl text-white">
              Log In
            </button>
  
            <button className="bg-ourBlue hover:bg-teal m-4 ml-6 rounded-2xl px-20 py-5 font-sans text-2xl text-white">
              Sign Up
            </button>
  
            */}
        </span>
      </div>

      <hr className="align-center m-auto mb-20 mt-20 h-12 w-4/5 "></hr>

      <div
        id="aboutus"
        className="align-center bg-beige m-auto w-1/2 justify-center rounded-3xl border-none p-8"
      >
        <h1 className="text-center font-sans text-6xl">About Us</h1>
        <p className="p-8">
          Welcome to RPGenius, School Done Our Way. We know that students have a
          hard time staying focused while studying, so we have gamified it! We
          have implemented an achievement-based system that allows users to
          upgrade and improve their characters through focused studying
          sessions.
        </p>
      </div>

      <hr className="align-center m-auto mb-20 mt-20 h-12 w-4/5 "></hr>

      <div
        id="ourteam"
        className="align-center bg-beige m-auto w-1/2 justify-center rounded-3xl border-none p-8"
      >
        <img src="" alt="" />
        <h1 className="text-center font-sans text-6xl">Our Team</h1>
        <p className="p-8">
          Harnake Reehal, Rohan Daves, Jaden Zhang, Jake Lauzon, Avery Lor, Jack
          Martin, Ryan Cornell. We are aspiring grade 12 students representing
          Sacred Heart High School in Ottawa who are interested in careers in
          STEM.
        </p>
      </div>

      <div className="bg-ourBlue mt-32 h-20 w-full"></div>
    </main>
  );
}
