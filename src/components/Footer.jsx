import {
  QuestionMarkCircleIcon,
  FolderOpenIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white w-full uppercase font-light border-t-black border-t-4 grid grid-cols-3 gap-x-4 px-4 py-4 fixed bottom-0 drop-shadow-2xl lg:px-72">
      <NavLink className="flex flex-col items-center" to="/archive">
        <FolderOpenIcon className="w-8" />
        <p>archive</p>
      </NavLink>
      <NavLink className="flex flex-col items-center" to="/assess">
        <PlusCircleIcon className="w-8" />
        <p>Assess</p>
      </NavLink>
      <NavLink className="flex flex-col items-center" to="/about">
        <QuestionMarkCircleIcon className="w-8" /> <p>about</p>
      </NavLink>
    </footer>
  );
}

export default Footer;
