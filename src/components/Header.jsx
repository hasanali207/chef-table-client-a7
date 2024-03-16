import bannerImageUrl from "../assets/images/banner.png";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-1">
          <ul className="flex gap-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="relative h-[90vh] overflow-hidden flex justify-center items-center rounded-3xl bg-no-repeat bg-cover " style={{
        background: `linear-gradient(0.00deg, rgba(21, 11, 43, 0.9), rgba(21, 11, 43, 0) 70%),url(${bannerImageUrl})  `,
               
      }}>
      
    
      <div className="relative z-20 px-4 py-8 text-white text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-[rgb(255, 255, 255)]">Discover an exceptional cooking <br></br> class tailored for you!</h1>
        <p className="my-6 font-sm lg:font-xl text-[rgb(255, 255, 255)] font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br></br> problems to become an exceptionally well world-class Programmer.</p>
        <div className="flex gap-5 justify-center items-center">
        <button className="btn btn-accent bg-[rgb(11, 229, 138)]">Explore Now</button>
        <button className="px-4 py-3 text-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-white/10">Our FeedBack</button>
        </div>

      </div>
       </div>
      
    </div>
  );
};


export default Header;
