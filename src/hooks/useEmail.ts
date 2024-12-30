import { useState } from "react";
import axios from "axios";
import {
  contactTemplate,
  ContactTemplateType,
} from "../emailTemplates/contactTemplate";
import {
  appointmentTemplate,
  AppointmentTemplateType,
} from "../emailTemplates/appointmentTemplate";

type EmailFormType = ContactTemplateType | AppointmentTemplateType;

const useEmailForm = (initialState: EmailFormType) => {
  const [emailData, setEmailData] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setEmailData(initialState);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios({
      method: "post",
      url: process.env.REACT_APP_MAIL_SERVICE_API,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        to: process.env.REACT_APP_EMAIL_RECEIVER,
        subject: `${emailData.form.toUpperCase()} FORM:  ${
          emailData.form === "contact"
            ? emailData.name + ": " + emailData.subject
            : emailData.firstName + " " + emailData.lastName
        }`,
        text:
          emailData.form === "contact"
            ? contactTemplate(emailData)
            : appointmentTemplate(emailData),
      },
    })
      .then(() => {})
      .catch((error) => {
        console.error("There was an error sending the email!", error);
      });

    // Clear the form after submission
    resetForm();
  };

  return {
    emailData,
    handleChange,
    handleSubmit,
  };
};

export default useEmailForm;
