import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] mt-2 px-8 py-3 flex items-center justify-between 
      border border-white/50 rounded-3xl shadow-2xl z-50 backdrop-blur-sm bg-white/10">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold tracking-wide pl-2">
        ethan mckissic
      </Link>
      
      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center space-x-8 pr-2">
        <Link 
          to="/about" 
          className="text-lg hover:underline transition-colors"
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className="text-lg hover:underline transition-colors"
        >
          Projects
        </Link>
        <Link 
          to="/experience" 
          className="text-lg hover:underline transition-colors"
        >
          Experience
        </Link>
        <Link 
          to="/skills" 
          className="text-lg hover:underline transition-colors"
        >
          Skills
        </Link>
      </nav>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden pr-2">
        <Menu className="w-8 h-8 text-white cursor-pointer" />
      </div>
    </header>
  );
}
