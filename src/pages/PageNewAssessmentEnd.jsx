import AnimatedPage from "../components/AnimatedPage";
import { Form, redirect } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";

export async function action({ request }) {
  let formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");

  const assessments = JSON.parse(localStorage.getItem("assessment"));
  const dateString = new Date().toISOString();

  const id = uuidv4();

  assessments[id] = {
    type: assessments.current.type,
    questions: assessments.current.questions,
    id,
    description,
    name,
    createdAt: dateString,
  };

  delete assessments["current"];

  localStorage.setItem("assessment", JSON.stringify(assessments));

  return redirect(`/archive/${id}?created=true`);
}

function PageNewAssessmentEnd() {
  return (
    <AnimatedPage>
      <article>
        <section>
          <h2>It's over</h2>
          <p>
            Aliqua laborum deserunt elit culpa consequat. Culpa nostrud elit et
            in non enim qui consectetur reprehenderit elit aliquip veniam sint
            proident. Elit ullamco non aliqua pariatur excepteur aliquip aute
            reprehenderit minim non. Nulla amet tempor duis velit eu do laborum
            velit cupidatat est do labore incididunt.
          </p>
        </section>
        <section className="my-2">
          <h2>score</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h4>Operation Risk Score</h4>
              <p>Your score is 1</p>
            </div>
            <div>
              <h4>Response Capability Score</h4>
              <p>your score is 2</p>
            </div>
          </div>
        </section>
        <section className="my-2">
          <h2 className="my-2 text-2xl">Save this assessment</h2>
          <Form method="POST">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <CheckIcon className="h-5 w-5 inline-block" />
              Save
            </button>
          </Form>
        </section>
      </article>
    </AnimatedPage>
  );
}

export default PageNewAssessmentEnd;
