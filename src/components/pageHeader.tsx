import React from "react";

interface PageHeaderProps {
  title: string;
  breadcrumb: { name: string; link?: string; active?: boolean }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          {title}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb text-uppercase mb-0">
            {breadcrumb.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${
                  item.active ? "text-primary active" : ""
                }`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.link ? (
                  <a className="text-white" href={item.link}>
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
