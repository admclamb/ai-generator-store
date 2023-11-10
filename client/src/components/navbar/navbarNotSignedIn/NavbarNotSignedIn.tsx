import { Link } from "react-router-dom";

const NavbarNotSignedIn = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <Link
          to="/"
          className="font-semibold text-gray-500 hover:text-gray-400 sm:py-3 block"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/create"
          className="font-semibold text-gray-500 hover:text-gray-400 sm:py-3 block"
        >
          Create
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-3 sm:ps-6"
          to="/login"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Log in
        </Link>
      </li>
    </ul>
  );
};

export default NavbarNotSignedIn;
