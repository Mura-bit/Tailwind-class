
import './App.css';

function App() {
  return (
    <>
      <div className=" container mx-auto">
        <nav className=" bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between px-4">
          <p1>Logo</p1>
          <ul className=" flex justify-center gap-4 max-sm:hidden">
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
          <button className=" rounded-full bg-orange-600 px-2 text-slate-300 hover:text-orange-600 hover:bg-slate-300">
            Sign in
          </button>
        </nav>

        <section>
          <div className=" flex items-center py-10 px-5 ">
            <div>
              <h1 className="text-center text-3xl mb-4 bg-clip-text text-transparent">
                Future starts today!
              </h1>
              <p className="text-sm italic w-86">
                You can't connect the dots looking forward; you can only connect
                them looking backwards. So you have to trust that the dots will
                somehow connect in your future. You have to trust in something -
                <span className="underline decoration-sky-500">your gut</span>,{" "}
                <span className="underline decoration-pink-500">destiny</span>,
                life, karma, whatever. This approach has never let me down, and
                it has made all the difference in my life.
              </p>
            </div>
            <div className="rounded-full">
              <img
                className="rounded-full "
                src="https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg"
                alt="steve jobs"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-around gap-4 mb-20">
            <div className=" flex justify-center items-center h-40 w-1/4 bg-red-400 hover:bg-white hover:cursor-pointer hover:text-red-400 hover:font-semibold rounded-lg">
              <h1>Goals</h1>
            </div>
            <div className=" flex justify-center items-center h-40 w-1/4 bg-red-400 hover:bg-white hover:cursor-pointer hover:text-red-400 hover:font-semibold rounded-lg">
              <h1>Target</h1>
            </div>
            <div className=" flex justify-center items-center h-40 w-1/4 bg-red-400 hover:bg-white hover:cursor-pointer hover:text-red-400 hover:font-semibold rounded-lg">
              <h1>Principles</h1>
            </div>
            <div className=" flex justify-center items-center h-40 w-1/4 bg-red-400 hover:bg-white hover:cursor-pointer hover:text-red-400 hover:font-semibold rounded-lg">
              <h1>Statements</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
