import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import Button from "../../ui/Button";

// Public nav links
const publicLinks = [
  { id: 1, text: "Home", to: "/" },
  { id: 2, text: "Menu", to: "/menu" },
];

// Protected nav links
const protectedLinks = [
  { id: 3, text: "Cart", to: "/cart" },
  { id: 4, text: "Checkout", to: "/checkout" },
];

const LargeScreenNavbar = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="hidden md:flex items-center gap-2">
      <div className="flex items-center justify-center gap-5">
        {/* Public Links */}
        {publicLinks.map((link) => {
          const { id, text, to } = link;

          return (
            <NavLink
              key={id}
              to={to}
              onClick={() => setShowLinks(false)}
              className={({ isActive }) =>
                isActive ? "text-brand font-black underline" : ""
              }
            >
              {text}
            </NavLink>
          );
        })}

        {/* Protected Links */}
        {isAuthenticated &&
          protectedLinks.map((link) => {
            const { id, text, to } = link;

            return (
              <NavLink
                key={id}
                to={to}
                onClick={() => setShowLinks(false)}
                className={({ isActive }) =>
                  isActive ? "text-brand font-black underline" : ""
                }
              >
                {text}
              </NavLink>
            );
          })}
      </div>

      {/* Login & Register button */}
      {!isAuthenticated && (
        <div className="flex items-center justify-center">
          <Button onClick={() => navigate("/login")} color="white">
            Login
          </Button>
          <Button onClick={() => navigate("/register")} color="light-red">
            Register
          </Button>
        </div>
      )}
    </nav>
  );
};

export default LargeScreenNavbar;
