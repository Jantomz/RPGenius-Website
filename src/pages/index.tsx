import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="font-Inter bg-ourBlue">
        <div className="flex justify-center">
          <div className="p-8 text-center text-6xl text-white">RPGenius</div>
        </div>
      </div>

      <div className="bg-white">
        <h1 className="mb-8 mt-6 pt-10 text-center font-sans text-8xl drop-shadow-md">
          School, Done <span className="italic text-ourBlue">Our</span> Way
        </h1>
      </div>

      <hr className="align-center m-auto w-4/5 "></hr>

      <div className="flex w-full justify-center p-8">
        <button className=" rounded-md bg-ourBlue p-4 text-3xl text-white hover:bg-blue-200 hover:text-white active:text-black">
          <Link href="/study">
            Start your Revolutionary Study Session (Click Here)
          </Link>
        </button>
      </div>

      <hr className="align-center m-auto w-4/5 "></hr>

      <div className="m-24">
        <div
          id="aboutus"
          className="align-center m-auto w-1/2 justify-center rounded-3xl border-none bg-beige p-8"
        >
          <h1 className="text-center font-sans text-6xl">About Us</h1>
          <p className="p-8 text-xl">
            Welcome to RPGenius, School Done Our Way. We know that students have
            a hard time staying focused while studying, so we have gamified it!
            We have implemented an achievement-based system that allows users to
            upgrade and improve their characters through focused studying
            sessions.
          </p>
        </div>
      </div>

      <hr className="align-center m-auto w-4/5 "></hr>

      <div className="m-24">
        <div
          id="ourteam"
          className="align-center m-auto w-1/2 justify-center rounded-3xl border-none bg-beige p-8"
        >
          <img src="" alt="" />
          <h1 className="text-center font-sans text-6xl">Our Team</h1>
          <p className="p-8 text-xl">
            Harnake Reehal, Rohan Daves, Jaden Zhang, Jake Lauzon, Avery Lor,
            Jack Martin, Ryan Cornell. We are aspiring grade 12 students
            representing Sacred Heart High School in Ottawa who are interested
            in careers in STEM.
          </p>
        </div>
      </div>

      <div className="mt-32 h-20 w-full bg-ourBlue"></div>
    </main>
  );
}
