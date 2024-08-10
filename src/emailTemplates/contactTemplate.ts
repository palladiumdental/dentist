export type ContactTemplateType = {
  form: "contact";
  subject: string;
  name: string;
  email: string;
  text: string;
};

export const contactTemplate = (data: ContactTemplateType) => {
  const { name, email, subject, text } = data;
  return `
       <p>You have a new email from <b>${name}</b></p>
       <p>Email: ${email}</p>
       <p>Subject: ${subject}</p>
       <br/>
       <p>${text}</p>
   `;
};
