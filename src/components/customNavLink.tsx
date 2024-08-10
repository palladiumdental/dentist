import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type CustomNavLinkProps = {
  children: React.ReactNode;
  redirectTo: string;
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  children,
  redirectTo,
}) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <Link
      to={redirectTo}
      className={`nav-item nav-link ${activeLink === redirectTo && "active"}`}
      onClick={() => handleLinkClick(redirectTo)}
    >
      {children}
    </Link>
  );
};

export default CustomNavLink;
