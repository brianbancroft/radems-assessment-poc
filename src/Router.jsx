import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageAbout from "./pages/PageAbout";
import PageAssessmentArchive from "./pages/PageAssessmentArchive";
import PageHome from "./pages/PageHome";
import PageAssessmentLayout from "./pages/PageAssessmentLayout";
import PageNewAssessmentLayout from "./pages/PageNewAssessmentLayout";
import PageNewAssessmentSelector from "./pages/PageNewAssessmentSelector";
import PageNewAssessmentIntro from "./pages/PageNewAssessmentIntro";
import PageNewAssessmentEnd, {
  action as newAssessmentAction,
} from "./pages/PageNewAssessmentEnd";
import PageNewAssessmentPage from "./pages/PageNewAssessmentPage";
import PageArchiveAssessment, {
  loader as archiveAssessmentLoader,
} from "./pages/PageArchiveAssessment";
import PageArchiveLayout from "./pages/PageArchiveLayout";

import { loader as assessmentPageLoader } from "./pages/PageNewAssessmentPageLoader";
import { AnimatePresence } from "framer-motion";

import LayoutHome from "./pages/LayoutHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/archive",
        element: <PageArchiveLayout />,
        children: [
          {
            path: "/archive",
            element: <PageAssessmentArchive />,
          },
          {
            path: "/archive/:id",
            element: <PageArchiveAssessment />,
            loader: archiveAssessmentLoader,
          },
        ],
      },
      {
        path: "/about",
        element: <PageAbout />,
      },
      {
        path: "/assess",
        element: <PageAssessmentLayout />,
        children: [
          {
            path: "/assess",
            element: <PageNewAssessmentSelector />,
          },
          {
            path: "/assess/new/:assessmentType/",
            element: <PageNewAssessmentLayout />,
            children: [
              {
                path: "/assess/new/:assessmentType/page/new",
                element: <PageNewAssessmentIntro />,
              },
              {
                path: "/assess/new/:assessmentType/page/end",
                element: <PageNewAssessmentEnd />,
                action: newAssessmentAction,
              },
              {
                path: "/assess/new/:assessmentType/page/:page",
                element: <PageNewAssessmentPage />,
                loader: assessmentPageLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function Router() {
  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}

export default Router;
