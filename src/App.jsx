import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

// Pages
import LandingPage from "./pages/LandingPage";
import UserSignUp from "./pages/UserSignUp";
import UserSignIn from "./pages/UserSignIn";
import Dashboard from "./pages/Dashboard";
import UserForgetPassword from "./pages/UserForgetPassword";
import PlaceholderPage from "./pages/PlaceholderPage";
import Settings from "./pages/Settings";
import SupportPanel from "./pages/Support";
import AdminSupport from "./pages/AdminDashboard";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          {/* <ToastContainer theme="dark" /> */}
          <Toaster />
          <Routes>
            {/* Public Routes */}
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/signup" element={<UserSignUp />} />
            <Route path="/signin" element={<UserSignIn />} />
            <Route path="/forget-password" element={<UserForgetPassword />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/support"
              element={
                <ProtectedRoute>
                  <SupportPanel />
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />

            {/* Dynamic Page Routes */}
            <Route path="/:pageType" element={<PlaceholderPage />} />

            {/* Admin Routes  */}
            <Route path="/admin" element={<AdminSupport />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
