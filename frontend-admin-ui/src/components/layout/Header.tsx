import { Menu, ChevronDown, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/service" },
  { name: "Therapists", href: "/Experts" },
  { name: "Careers", href: "/careers" },
  { name: "Concerns", href: "/concern" },
  { name: "Payment", href: "/payments" },
  { name: 'Dashboard', href: '/dashboard', },
];

export default function PublicHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // ✅ correct place

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <h1 className="text-lg font-semibold text-yellow-500">
            Nila Health Care
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {

            if (item.name === "Services") {
              return (
                <div key={item.name} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <NavLink className="nav-link" to={item.href}>
                      {item.name}
                    </NavLink>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition" />
                  </div>

                  <div className="dropdown">
                    <NavLink to="/service/individual" className="dropdown-item">Individual Therapy</NavLink>
                    <NavLink to="/service/couple" className="dropdown-item">Couple Therapy</NavLink>
                    <NavLink to="/service/followup" className="dropdown-item">Follow Up Session</NavLink>
                    <NavLink to="/service/sexual-health" className="dropdown-item">Sexual Health</NavLink>
                  </div>
                </div>
              );
            }

            if (item.name === "Concerns") {
              return (
                <div key={item.name} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <NavLink className="nav-link" to={item.href}>
                      {item.name}
                    </NavLink>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition" />
                  </div>

                  <div className="dropdown w-72 max-h-80 overflow-y-auto">
                    <NavLink to="/concern/anxiety" className="dropdown-item">Anxiety & Stress</NavLink>
                      <NavLink to="/concern/depression" className="dropdown-item">Depression & Mood Disorder</NavLink>
                     <NavLink to="/concern/trauma" className="dropdown-item">Trauma & PTSD</NavLink>
                    <NavLink to="/concern/relationship" className="dropdown-item">Relationship Issues</NavLink>
                    <NavLink to="/concern/grief" className="dropdown-item">Grief Counselling</NavLink>
                    <NavLink to="/concern/anger" className="dropdown-item">Anger Management</NavLink>
                    <NavLink to="/concern/queer" className="dropdown-item">Queer Affirmative Therapy</NavLink>
                    <NavLink to="/concern/work-stress" className="dropdown-item">Work Stress & Burnout</NavLink>
                    <NavLink to="/concern/parenting" className="dropdown-item">Parenting & Child Behavioral Issues</NavLink>
                  </div>
                </div>
              );
            }

            return (
              <NavLink key={item.name} to={item.href} className="nav-link">
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* ✅ Right Section */}
        <div className="flex items-center gap-4">

          {/* If NOT logged in */}
          {!user && (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}

          {/* If logged in */}
          {user && (
            <div className="flex items-center gap-3">

              {/* User Info */}
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 capitalize">
                  {user.role?.replace("_", " ")}
                </p>
              </div>

              {/* Logout */}
              <button
                onClick={logout}
                className="p-2 text-gray-500 hover:text-red-500"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Book Button */}
          <button
            onClick={() => navigate("/appointments")}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Book a Therapy
          </button>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

        </div>
      </div>
    </header>
  );
}