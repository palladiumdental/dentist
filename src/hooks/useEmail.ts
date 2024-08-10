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

const RECEIVER_EMAIL = "baharmailservice@gmail.com";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/send-email", {
        to: RECEIVER_EMAIL,
        subject: `${emailData.form.toUpperCase()} FORM:  ${
          emailData.form === "contact"
            ? emailData.name + ": " + emailData.subject
            : emailData.firstName + " " + emailData.lastName
        }`,
        text:
          emailData.form === "contact"
            ? contactTemplate(emailData)
            : appointmentTemplate(emailData),
      });
    } catch (error) {
      console.error("There was an error sending the email!", error);
    }
  };

  return {
    emailData,
    handleChange,
    handleSubmit,
  };
};

export default useEmailForm;
