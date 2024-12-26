import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/immediateLoadingImplants1.png";
import about2 from "../../../assets/immediateLoadingImplants2.png";

const ImmediateLoadingImplantsEn: React.FC = () => {
  const mainContent = {
    title: "Immediate Loading Implants",
    description: `Immediate loading implants are an advanced dental solution that allows for the placement of a permanent restoration on dental implants within a short period, often on the same day as the implant surgery. This innovative approach provides a quicker and more convenient way to restore your smile and functionality after tooth loss.`,
  };
  const subContetnt = [
    {
      title: "What Are Immediate Loading Implants?",
      description: `Immediate loading implants involve the placement of a dental implant and a temporary or permanent crown on the same day. Unlike traditional implants, which require a waiting period of several months for the implant to integrate with the jawbone before a final restoration is attached, immediate loading implants allow you to leave the dental office with a complete smile and functional teeth right away.`,
    },
    {
      title: "Benefits of Immediate Loading Implants",
      description: (
        <div>
          <p>
            <b>Quick Restoration:</b> You can receive a temporary or permanent
            crown on the same day as your implant surgery, reducing the waiting
            period and allowing you to enjoy your new smile sooner.
          </p>
          <p>
            <b>Enhanced Comfort:</b> Immediate loading implants eliminate the
            need for a separate temporary denture or bridge, which can be less
            comfortable and less functional than a permanent restoration.
          </p>
          <p>
            <b>Improved Functionality:</b> Immediate loading implants allow you
            to resume normal activities, including eating and speaking, with
            minimal disruption to your daily life.
          </p>
          <p>
            <b>Convenient Treatment:</b> The streamlined process of immediate
            loading implants can save time and reduce the number of dental
            visits required for the restoration.
          </p>
        </div>
      ),
    },
    {
      title: "The Process of Getting Immediate Loading Implants",
      description: (
        <div>
          <p>
            <b>Initial Consultation:</b> Your dentist will evaluate your oral
            health and discuss the suitability of immediate loading implants for
            your case. This may involve imaging and planning to ensure the
            optimal placement of the implants.
          </p>
          <p>
            <b>Implant Placement:</b> During the surgical procedure, the dental
            implants are placed into the jawbone. The implants are designed to
            be stable and capable of supporting a restoration immediately.
          </p>
          <p>
            <b>Attachment of Restoration:</b> A temporary or permanent crown is
            attached to the implants on the same day as the surgery. This crown
            is custom-made to match the appearance and function of your natural
            teeth.
          </p>
          <p>
            <b>Follow-Up Care:</b> Regular follow-up visits will be scheduled to
            monitor the healing process and ensure the implants are integrating
            properly with the jawbone. Your dentist will make any necessary
            adjustments to the restoration.
          </p>
        </div>
      ),
    },
    {
      title: "Caring for Immediate Loading Implants",
      description: (
        <div>
          <p>
            <b>Maintain Good Oral Hygiene:</b> Brush and floss around the
            implants and crown daily to prevent plaque buildup and ensure the
            health of your gums and implants.
          </p>
          <p>
            <b>Avoid Hard Foods:</b> In the initial healing period, avoid
            chewing on very hard foods or objects that could affect the
            stability of the implants or restoration.
          </p>
          <p>
            <b>Regular Check-Ups:</b> Attend scheduled dental visits to monitor
            the health of your implants and the fit of your restoration.
          </p>
        </div>
      ),
    },
    {
      title: "Why Choose Immediate Loading Implants?",
      description: `Immediate loading implants offer a convenient and efficient solution for tooth replacement, allowing you to enjoy a complete smile and restored functionality without a prolonged waiting period. This approach is ideal for patients who are seeking quick results and minimal disruption to their daily lives.`,
    },
    {
      description: (
        <b>Experience the Benefits of Immediate Loading Implants!</b>
      ),
    },
  ];

  return (
    <ContentWrapper
      mainContent={mainContent}
      subContents={subContetnt}
      firstImage={about1}
      secondImage={about2}
      moveSecondSubDown={true}
    />
  );
};

export default ImmediateLoadingImplantsEn;
