import { useState } from "react";
import axios from "axios";
import { contactTemplate } from "../emailTemplates/contactTemplate";
import { applicationTemplate } from "../emailTemplates/applicationTemplate";

const RECEIVER_EMAIL = "baharmailservice@gmail.com";

const useEmailForm = (initialState: any, form: any) => {
  const [emailData, setEmailData] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/send-email", {
        to: RECEIVER_EMAIL,
        subject: `${form.toUpperCase()} FORM:  ${
          emailData.form === "contact" ? emailData.subject : emailData.firstName
        } ${emailData.lastName}`,
        text:
          emailData.form === "contact"
            ? contactTemplate(emailData)
            : applicationTemplate(emailData),
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
