import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState, useRef, useEffect } from 'react';

const CollapsibleSection = ({ title, isOpen, onToggle, children }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight); // Get dynamic height of content when expanded
    } else {
      setHeight(0); // Collapse content
    }
  }, [isOpen]);

  return (
    <div className='flex flex-col'>
      {/* Collapsible Header */}
      <div
        className='flex justify-between items-center text-lg text-gray-100 font-semibold cursor-pointer p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 ease-in-out shadow-md'
        onClick={onToggle}
      >
        <span>{title}</span>
        {isOpen ? <MdExpandLess className="text-xl" /> : <MdExpandMore className="text-xl" />}
      </div>

      {/* Collapsible Content with smooth transition */}
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px`, opacity: isOpen ? 1 : 0 }}
        className={`overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}
      >
        <div className='mt-2 pl-4 text-gray-200'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;