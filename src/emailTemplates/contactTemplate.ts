export const contactTemplate = (data: any) => {
  const { name, email, text } = data;
  return `
       <p>You have a new email from <b>${name}</b></p>
       <p>Email: ${email}</p>
       <p>${text}</p>
   `;
};
