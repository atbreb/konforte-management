import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/Home";
import { PropertiesPage } from "./pages/Properties";
import { PropertyDetailPage } from "./pages/PropertyDetail";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { FAQPage } from "./pages/FAQ";
import { BlogPage } from "./pages/Blog";
import { ContactPage } from "./pages/Contact";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "properties", Component: PropertiesPage },
      { path: "properties/:propertyId", Component: PropertyDetailPage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "faq", Component: FAQPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
