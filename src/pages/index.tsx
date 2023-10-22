import Link from "next/link";

// Basic function home landing page component
export default function Home() {
  return (
    <main>
      <div className="font-Inter bg-ourBlue">
        <div className="flex justify-center">
          <div className="p-8 text-center text-6xl text-white max-md:text-3xl">
            RPGenius
          </div>
        </div>
      </div>

      <div className="flex h-72 items-center justify-center bg-white bg-school ">
        <h1 className="mb-8 mt-6 rounded-xl bg-slate-100/60 p-4 text-center font-sans text-8xl font-extrabold drop-shadow-md max-md:text-4xl">
          School, Done{" "}
          <span className="font-extrabold italic text-ourBlue">Our</span> Way
        </h1>
      </div>

      <hr className="align-center m-auto w-4/5 "></hr>

      <div className="flex w-full justify-center p-8">
        <Link href="/study">
          <button className=" rounded-md bg-ourBlue p-4 text-3xl text-white hover:bg-blue-200 hover:text-white active:text-black max-md:text-xl">
            Start your Revolutionary Study Session (Click Here)
          </button>
        </Link>
      </div>

      <hr className="align-center m-auto w-4/5 "></hr>

      <div className="m-24 max-md:m-6">
        <div className="align-center m-auto w-1/2 justify-center rounded-3xl border-none bg-beige p-8 max-md:w-full max-md:p-3">
          <img src="" alt="" />
          <h1 className="text-center font-sans text-6xl max-md:text-3xl">
            How RPGenius Works
          </h1>
          <p className="p-8 text-xl max-md:text-sm">
            RPGenius is a web application for students, young and old, to
            embrace the fun side of learning by hacking their brain using
            gamification! Although simple, gamification is a powerful tool that
            aids people in feeling inspired and motivated. With the aid of our
            Juniors (our special critters), students can strive to spend more
            time focused on their tasks and studying for the sake of unlocking
            other Juniors and buying fun gifts from the store. Just like
            Duolingo and IXL, students are much more strongly motivated to learn
            and focus with even small incentives. We hope that with this fun
            minimalistic application, students will gain to benefit a lot!
          </p>
          <div className="flex flex-wrap">
            <img src="base.gif"></img>
            <img src="dog.gif"></img>
          </div>
        </div>
      </div>

      <div className="mt-32 h-20 w-full bg-ourBlue"></div>

      <hr className="align-center m-auto w-4/5 "></hr>

      <div className="m-24  max-md:m-6">
        <div
          id="aboutus"
          className="align-center m-auto w-1/2 justify-center rounded-3xl border-none bg-beige p-8 max-md:w-full max-md:p-3"
        >
          <h1 className="text-center font-sans text-6xl max-md:text-3xl">
            About Us
          </h1>
          <p className="p-8 text-xl max-md:text-sm">
            Welcome to RPGenius, School Done Our Way. We know that students have
            a hard time staying focused while studying, so we have gamified it!
            We have implemented an achievement-based system that allows users to
            upgrade and improve their characters through focused studying
            sessions.
          </p>
        </div>
      </div>

      <hr className="align-center m-auto w-4/5 "></hr>

      <div className="m-24 max-md:m-6">
        <div
          id="ourteam"
          className="align-center m-auto w-1/2 justify-center rounded-3xl border-none bg-beige p-8 max-md:w-full max-md:p-3"
        >
          <img src="" alt="" />
          <h1 className="text-center font-sans text-6xl max-md:text-3xl">
            Our Team
          </h1>
          <p className="p-8 text-xl max-md:text-sm">
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
