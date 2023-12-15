import { useEffect } from "react";
import { Link } from "react-router-dom";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

function PageNewAssessmentIntro() {
  useEffect(() => {}, []);

  return (
    <article className="mx-auto max-w-prose">
      <h1 className="my-2 text-3xl">Getting Started</h1>
      <p className="my-1">
        This is the introduction on how to use this tool to determine risk score
        for a SAR tasking
      </p>
      <p className="my-1">
        Eiusmod quis nostrud enim dolore elit est sunt ad labore. Id commodo et
        fugiat consequat. Voluptate nisi esse nisi deserunt veniam ipsum anim
        aute commodo aliquip dolore laboris. Cillum sint et est adipisicing. Est
        dolor elit culpa esse elit aute aute cupidatat aute velit et non officia
        veniam. Amet elit pariatur do velit quis minim mollit.
      </p>
      <p className="my-1">
        Fugiat aute voluptate consectetur velit nulla consequat est eiusmod
        exercitation velit laborum esse. Est aliquip ut ex amet cupidatat
        cillum. Ea et id tempor aliqua sint nostrud. Ad fugiat minim nisi cillum
        fugiat deserunt excepteur labore labore do. Nisi eu eu velit enim cillum
        proident.
      </p>

      <section className="flex justify-end w-full mt-4">
        <Link
          to="/assess/new/:assessmentType/page/1"
          className="underline text-blue-500 flex flex-row justify-evenly items-center"
        >
          <span>Start Assessment</span>
          <ArrowRightIcon className="h-6 ml-3" />
        </Link>
      </section>
    </article>
  );
}

export default PageNewAssessmentIntro;
