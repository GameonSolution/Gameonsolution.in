interface menuProps {
  isClicked: () => void;
  isOpen: boolean;
}

const HamburgerMenu: React.FC<menuProps> = ({ isClicked, isOpen }) => {
  const toggleMenu = () => {
    isClicked();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleMenu}
        className="relative w-5 h-5 flex items-center justify-center"
      >
        {/* Top Line */}
        <div
          className={`w-5 h-[0.15rem] bg-[#D2D2D0] rounded absolute transition-all duration-500 ease-in-out transform ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        ></div>

        {/* Middle Line */}
        <div
          className={`w-5 h-[0.15rem] bg-[#D2D2D0] rounded absolute transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>

        {/* Bottom Line */}
        <div
          className={`w-5 h-[0.15rem] bg-[#D2D2D0] rounded absolute transition-all duration-500 ease-in-out transform ${
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
