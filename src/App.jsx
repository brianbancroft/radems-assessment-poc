import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageAbout from "./pages/PageAbout";
import PageAssessmentArchive from "./pages/PageAssessmentArchive";
import PageHome from "./pages/PageHome";
import PageNewAssessmentLayout from "./pages/PageNewAssessmentLayout";
import PageNewAssessmentSelector from "./pages/PageNewAssessmentSelector";

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
        element: <PageAssessmentArchive />,
      },
      {
        path: "/about",
        element: <PageAbout />,
      },
      {
        path: "/assess",
        element: <PageNewAssessmentLayout />,
        children: [
          {
            path: "/assess",
            element: <PageNewAssessmentSelector />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
