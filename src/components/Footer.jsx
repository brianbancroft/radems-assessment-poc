import {
  QuestionMarkCircleIcon,
  FolderOpenIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-red-500 bg-slate-300 flex justify-evenly py-4">
      <NavLink className="flex flex-col" to="/archive">
        <FolderOpenIcon />
        <p>archive</p>
      </NavLink>
      <NavLink className="flex flex-col" to="/assess">
        <PlusCircleIcon />
        <p>Assess</p>
      </NavLink>
      <NavLink className="flex flex-col" to="/about">
        <QuestionMarkCircleIcon /> <p>about</p>
      </NavLink>
    </footer>
  );
}

export default Footer;
