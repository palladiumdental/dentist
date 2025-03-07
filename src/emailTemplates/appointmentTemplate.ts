export type AppointmentTemplateType = {
  form: "appointment";
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  oralHygieneIntervention: string;
  dentalIntervention: string;
  date: string;
  time: string;
  text: string;
};

export const appointmentTemplate = (data: AppointmentTemplateType) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    dentalIntervention,
    oralHygieneIntervention,
    date,
    time,
    text,
  } = data;
  return `
       <p><b>${firstName + " " + lastName}</b> has sent you an application</p>
       <p><b>Mobile: </b> ${mobile}</p>
       <p><b>Email: </b> ${email}</p>
       <p><b>Date And Time: </b> ${date} at ${time}</p>
       <p><b>Reason: </b> </p>
       <p>${dentalIntervention}</p>
       <p>${oralHygieneIntervention}</p>
       
       <p>${text}</p>
   `;
};
