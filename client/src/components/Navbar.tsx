import NavButton from "./ui/NavButton";
import { NavButtons } from "../utils/Helpers";
import LogoutButton from "./ui/LogoutButton";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4 sm:mr-2 pt-12 mr-auto">
      {NavButtons.map((button) => (
        <NavButton key={button.id} followingHref={button.href}>
          {button.icon}
          {button.text}
        </NavButton>
      ))}
      <LogoutButton responsiveClassNames="block sm:hidden" />
    </div>
  );
};

export default Navbar;
