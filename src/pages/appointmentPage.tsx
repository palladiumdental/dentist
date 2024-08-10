import React from "react";
import Appointment from "../components/feature/appointment";
import SecondaryWrapper from "../components/ui/secondaryWrapper";

function AppointmentPage() {
  return (
    <SecondaryWrapper title="Appointment">
      <Appointment />
    </SecondaryWrapper>
  );
}

export default AppointmentPage;
