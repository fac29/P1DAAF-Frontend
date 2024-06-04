import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaQuestionCircle } from 'react-icons/fa'; // Importing icons
// import { FaClipboardList } from 'react-icons/fa'; // Importing quiz icon

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-700 p-4 w-full top-0 z-50">
      <ul className="flex space-x-8">
        <li>
          <Link to="/home" className="text-white flex items-center space-x-2 hover:text-gray-400">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/quiz" className="text-white flex items-center space-x-2 hover:text-gray-400">
            <FaClipboardList />
            <span>Quiz</span>
          </Link>
        </li> */}
        <li>
          <Link to="/questionbank" className="text-white flex items-center space-x-2 hover:text-gray-400">
            <FaQuestionCircle />
            <span>Question Bank</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
