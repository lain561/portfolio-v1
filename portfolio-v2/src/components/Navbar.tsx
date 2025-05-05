import { Menu } from "lucide-react";
import { Link } from "react-router-dom"; // Fixed import

export default function Navbar() {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-5xl px-8 py-3 flex items-center justify-between border border-white rounded-3xl shadow-2xl z-50 backdrop-blur-sm">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold tracking-wide pl-2">
          ethan mckissic
        </div>
      </Link>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6 pr-2">
        <Link 
          to="/about" 
          className="text-xl hover:text-underline transition-colors"
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className="text-xl hover:text-underline transition-colors"
        >
          Projects
        </Link>
        <Link 
          to="/experience" 
          className="text-xl hover:text-underline transition-colors"
        >
          Experience
        </Link>
        <Link 
          to="/skills" 
          className="text-xl hover:text-underline transition-colors"
        >
          Skills
        </Link>
      </nav>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden pr-2">
        <Menu className="w-6 h-6" />
      </div>
    </header>
  );
}