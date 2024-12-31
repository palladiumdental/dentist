import React, { useEffect } from "react";
import Localize from "../ui/localize";
import useEmailForm from "../../hooks/useEmail";
import { useTranslation } from "react-i18next";
import { ContactTemplateType } from "../../emailTemplates/contactTemplate";

const ContactForm: React.FC = () => {
  const { i18n } = useTranslation();
  const { emailData, handleChange, handleSubmit } = useEmailForm({
    form: "contact",
    subject: "",
    text: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    // Load the saved language from localStorage, default to 'hu'
    const savedLanguage = localStorage.getItem("language") || "hu";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const isCurrentLanguageEn = i18n.language === "en";

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder={isCurrentLanguageEn ? "Your Name" : "Az Ön Neve"}
              name="name"
              value={(emailData as ContactTemplateType).name}
              onChange={handleChange}
            />
            <label htmlFor="name">
              <Localize text="a16" isFirstLetterCapital={true} />
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder={isCurrentLanguageEn ? "Your Email" : "Az Ön E-mail"}
              name="email"
              value={(emailData as ContactTemplateType).email}
              onChange={handleChange}
            />
            <label htmlFor="email">
              <Localize text="a17" isFirstLetterCapital={true} />
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder={isCurrentLanguageEn ? "Subject" : "Tárgy"}
              name="subject"
              value={(emailData as ContactTemplateType).subject}
              onChange={handleChange}
            />
            <label htmlFor="subject">
              <Localize text="subject" isFirstLetterCapital={true} />
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder={
                isCurrentLanguageEn
                  ? "Leave a message here"
                  : "Hagyjon üzenetet itt"
              }
              id="message"
              name="text"
              value={(emailData as ContactTemplateType).text}
              style={{ height: "100px" }}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="message">
              <Localize text="message" isFirstLetterCapital={true} />
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100 py-3" type="submit">
            <Localize text="a13" isFirstLetterCapital={true} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
