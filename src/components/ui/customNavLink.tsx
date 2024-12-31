import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Localize from "./localize";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const isDropdown = dropdownItems && dropdownItems.length > 0;

  return (
    <div className="nav-item">
      <Link
        to={isDropdown ? "#" : redirectTo}
        className={`nav-item nav-link ${
          activeLink.split("/")[1] === redirectTo.split("/")[1] && "active"
        } ${isDropdown && "dropdown-toggle"}`}
        onClick={() => {
          if (!isDropdown) {
            handleLinkClick(redirectTo);
          }
          if (isDropdown) {
            setIsDropdownOpen(!isDropdownOpen);
          }
        }}
        onMouseEnter={() => setIsDropdownOpen(true)}
      >
        {children}
      </Link>
      {isDropdown && isDropdownOpen && (
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
                }}
              >
                <Link
                  to={`${redirectTo}/${route}`}
                  className="dropdown-header"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLinkClick(redirectTo);
                    setIsDropdownOpen(false);
                  }}
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                >
                  <Localize text={title} />
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick(redirectTo);
                          setIsDropdownOpen(false);
                        }}
                        style={{
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }}
                      >
                        <Localize text={s.title} />
                      </Link>
                    </h6>
                  ))
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomNavLink;
