import {
  QuestionMarkCircleIcon,
  FolderOpenIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-red-500 bg-slate-300 grid grid-cols-3 gap-x-4 px-4 py-4 fixed bottom-0 w-screen drop-shadow-2xl">
      <NavLink className="flex flex-col items-center" to="/archive">
        <FolderOpenIcon className="w-12" />
        <p>archive</p>
      </NavLink>
      <NavLink className="flex flex-col items-center" to="/assess">
        <PlusCircleIcon className="w-12" />
        <p>Assess</p>
      </NavLink>
      <NavLink className="flex flex-col items-center" to="/about">
        <QuestionMarkCircleIcon className="w-12" /> <p>about</p>
      </NavLink>
    </footer>
  );
}

export default Footer;
