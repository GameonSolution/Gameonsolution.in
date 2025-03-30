import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DropdownProps {
  trigger: React.ReactNode; // The element that toggles the dropdown
  items: {path:string;label:string}[]; // Dropdown options
  onClick:(value:string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, items ,onClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePositioning = () => {
      if (dropdownRef.current) {
        const { bottom } = dropdownRef.current.getBoundingClientRect();
        setPosition(window.innerHeight - bottom < 400 ? 'top' : 'bottom');

      }
    };

    if (isOpen) {
      handlePositioning();
      window.addEventListener('resize', handlePositioning);
    }

    return () => {
      window.removeEventListener('resize', handlePositioning);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: position === 'bottom' ? -10 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === 'bottom' ? -10 : 10 }}
          transition={{ duration: 0.2 }}
          className={`absolute ${
            position === 'bottom' ? 'top-full' : 'bottom-full'
          } left-0  rounded-md shadow-lg w-48 my-2`}
        >
         
               <ul className="flex flex-col backdrop-blur-md bg-gray-400/40 rounded-lg">
                  {items.map((item) => (
                    <li key={item.label}>
                      <button
                        className="block px-4 w-full py-2  text-white hover:bg-secondary font-medium uppercase rounded-md"
                        onClick={() => {
                          onClick(item.path)
                          setIsOpen(false)}}

                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
