import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className='text-black leading-[1.5] w-full h-[50px] border-b-black border-b-[4px] top-0 left-0 z-[20] font-["DM_Sans"] bg-white flex sticky font-medium items-center px-2 sm:px-5'>
      <div className="w-full max-w-7xl flex gap-6 items-center mx-auto">
        {/* Logo and Hamburger/Dropdown */}
        <div className="flex items-center gap-4 sm:gap-10">
          <a
            className="text-[22px] bg-[#5294ff] flex font-bold justify-center items-center cursor-pointer border-black border-[2px] rounded-[5px] size-8"
            href="/"
          >
            C
          </a>
          {/* DropdownMenu for mobile */}
          <div className="sm:hidden flex items-center ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button aria-label="Toggle menu">
                  <span className="block w-6 h-0.5 bg-black mb-1 rounded transition-all" />
                  <span className="block w-6 h-0.5 bg-black mb-1 rounded transition-all" />
                  <span className="block w-6 h-0.5 bg-black rounded transition-all" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 mt-2">
                <DropdownMenuItem asChild>
                  <a href="#about" className="block cursor-pointer py-2">
                    About me
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#experience" className="block cursor-pointer py-2">
                    Experience
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#projects" className="block cursor-pointer py-2">
                    Projects
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#races" className="block cursor-pointer py-2">
                    Running
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* Nav Links (hidden on mobile) */}
        <div className="hidden sm:flex flex-row gap-10 items-center">
          <a href="#about" className="block cursor-pointer py-2">
            About me
          </a>
          <a href="#experience" className="block cursor-pointer py-2">
            Experience
          </a>
          <a href="#projects" className="block cursor-pointer py-2">
            Projects
          </a>
          <a href="#races" className="block cursor-pointer py-2">
            Running
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
