import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type CustomNavLinkProps = {
  dropdownItems?: { route: string; title: string }[];
  children: React.ReactNode;
  redirectTo: string;
  subDropdownItems?: any;
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  dropdownItems,
  children,
  redirectTo,
  subDropdownItems,
}) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const isDropdown = dropdownItems && dropdownItems.length > 0;

  return (
    <Link
      to={redirectTo}
      className={`nav-item nav-link ${
        activeLink.split("/")[2] === redirectTo.split("/")[2] && "active"
      } ${isDropdown && "dropdown-toggle"}`}
      onClick={() => handleLinkClick(redirectTo)}
    >
      {children}
      {isDropdown && (
        <div
          className="dropdown-menu rounded-0 rounded-bottom m-0"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#EFF5FF",
            textAlign: "center",
          }}
        >
          {dropdownItems?.map(({ route, title }) => (
            <div
              key={route}
              className="col-12 col-lg-4"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <h5
                className="dropdown-header"
                style={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  height: "65px",
                }}
              >
                <Link
                  to={`${redirectTo}/${route}`}
                  className="dropdown-header"
                  onClick={() => handleLinkClick(redirectTo)}
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                >
                  {title}
                </Link>
              </h5>
              {subDropdownItems
                ?.filter((sub: any) => sub.category.route === route)
                .map((subb: any) =>
                  subb.services.map((s: any) => (
                    <h6
                      key={s.route}
                      className="dropdown-header"
                      style={{
                        whiteSpace: "normal", // Wrap normally for sub-items
                        wordWrap: "break-word",
                      }}
                    >
                      <Link
                        to={`${redirectTo}/${route}/${s.route}`}
                        className="dropdown-item"
                        onClick={() => handleLinkClick(redirectTo)}
                        style={{
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }}
                      >
                        {s.title}
                      </Link>
                    </h6>
                  ))
                )}
            </div>
          ))}
        </div>
      )}
    </Link>
  );
};

export default CustomNavLink;
