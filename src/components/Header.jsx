import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      id: 1,
      name: "Features",
      link: "#features",
    },
    {
      id: 2,
      name: "Pricing",
      link: "#pricing",
    },
    {
      id: 3,
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background-primary/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-fluid px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-[15px] flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Prepify_Logo"
              className="max-h-[38px] w-auto h-full"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  className="text-black-primary"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
          <button
            type="button"
            className="bg-blue-primary text-white overflow-hidden rounded-lg hidden md:flex h-[45px] w-[158px] "
          >
            <a
              href="https://prepify.win"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-inherit text-inherit h-full w-full flex items-center justify-center text-[15px]"
            >
              Get Started
            </a>
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 ">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    className="text-black-primary"
                  >
                    {item.name}
                  </a>
                );
              })}

              <button
                type="button"
                className="bg-blue-primary text-white overflow-hidden rounded-lg flex items-center justify-center h-[45px]"
              >
                <a
                  href="https://prepify.win"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full w-full flex items-center justify-center"
                >
                  Get Started
                </a>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
