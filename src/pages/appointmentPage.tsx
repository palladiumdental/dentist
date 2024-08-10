import React from "react";
import Appointment from "../components/appointment";
import SecondaryWrapper from "../components/secondaryWrapper";

function AppointmentPage() {
  return (
    <SecondaryWrapper title="Appointment">
      <Appointment />
    </SecondaryWrapper>
  );
}

export default AppointmentPage;
