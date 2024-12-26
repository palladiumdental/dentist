import React from "react";
import ContentWrapper from "../contentWrapper";
import about1 from "../../../assets/about-1.jpg";
import about2 from "../../../assets/about-2.jpg";

const TeethWhiteningEn: React.FC = () => {
  const mainContent = {
    title: "At-Home Teeth Whitening",
    description: `At-home teeth whitening is a convenient and effective way to achieve a brighter smile in the comfort of your own home. Using custom-made trays and professional-grade whitening gel provided by your dentist, you can gradually whiten your teeth to the desired shade, with noticeable results in just a few weeks.`,
  };
  const subContetnt = [
    {
      title: "What Is At-Home Teeth Whitening?",
      description: `At-home teeth whitening involves using a personalized whitening kit provided by your dentist. This kit includes custom-made trays designed to fit your teeth perfectly and a professional-strength whitening gel. The gel contains a safe concentration of bleaching agents that help remove stains and discoloration from the teeth, resulting in a brighter and more youthful smile.`,
    },
    {
      title: "How Does At-Home Teeth Whitening Work?",
      description: (
        <div>
          <p>
            <b>Custom Trays:</b> The first step is taking an impression of your
            teeth at the dental clinic. This impression is used to create
            custom-fitted whitening trays that are comfortable and ensure even
            application of the whitening gel.
          </p>
          <p>
            <b>Application of Whitening Gel:</b> Your dentist will provide you
            with a whitening gel and detailed instructions on how to apply it.
            You simply place the gel in the trays and wear them over your teeth
            for the recommended amount of time each day, usually for 30 minutes
            to a few hours, depending on the concentration of the gel.
          </p>
          <p>
            <b>Gradual Whitening:</b> Over the course of a few weeks, the
            bleaching agents in the gel will break down stains on the enamel and
            dentin layers of your teeth, gradually lightening their color.
          </p>
        </div>
      ),
    },
    {
      title: "Benefits of At-Home Teeth Whitening",
      description: (
        <div>
          <p>
            <b>Convenient and Flexible:</b> You can whiten your teeth at your
            own pace and in the comfort of your home, making it easy to fit into
            your daily routine.
          </p>
          <p>
            <b>Customizable Results:</b> You have control over the level of
            whitening you desire, and the process can be adjusted to achieve the
            desired shade.
          </p>
          <p>
            <b>Cost-Effective:</b> At-home whitening is often more affordable
            than in-office treatments while still providing professional-grade
            results.
          </p>
          <p>
            <b>Reusable Kit:</b> The custom trays can be reused multiple times,
            allowing you to touch up your whitening whenever you like, such as
            after several months or years.
          </p>
        </div>
      ),
    },
    {
      title: "What to Expect from At-Home Teeth Whitening",
      description: (
        <div>
          <p>
            <b>Safe and Controlled Whitening:</b> The whitening gel provided by
            your dentist is formulated to be safe for your teeth and gums,
            minimizing the risk of sensitivity or irritation.
          </p>
          <p>
            <b>Gradual Results:</b> Unlike one-time in-office whitening
            treatments, at-home whitening provides gradual results over time,
            making it easier to control the final shade.
          </p>
          <p>
            <b>Effective Stain Removal:</b> At-home whitening is effective at
            removing surface stains caused by food, drinks, tobacco, and natural
            aging.
          </p>
        </div>
      ),
    },
    {
      title: "How to Use Your At-Home Whitening Kit",
      description: (
        <div>
          <p>
            <b>Prepare Your Trays:</b> Ensure your teeth are clean and dry.
            Apply a small amount of the whitening gel into each custom-made
            tray.
          </p>
          <p>
            <b>Wear the Trays:</b> Place the trays over your teeth and wear them
            for the recommended time. Avoid eating, drinking, or smoking during
            this period.
          </p>
          <p>
            <b>Remove and Rinse:</b> After the treatment time, remove the trays
            and rinse your mouth and trays with water. Brush your teeth gently
            to remove any remaining gel.
          </p>
          <p>
            <b>Repeat as Directed:</b> Follow the whitening schedule recommended
            by your dentist until you achieve the desired results.
          </p>
        </div>
      ),
    },
    {
      title: "Tips for Maintaining Your Whitened Smile",
      description: (
        <div>
          <p>
            <b>Avoid Staining Foods and Drinks:</b> Limit consumption of coffee,
            tea, red wine, and foods that can stain your teeth.
          </p>
          <p>
            <b>Practice Good Oral Hygiene:</b> Brush and floss daily to maintain
            your results and prevent new stains from forming.
          </p>
          <p>
            <b>Use Touch-Up Treatments:</b> Keep your whitening trays and gel to
            perform occasional touch-ups to maintain your bright smile.
          </p>
        </div>
      ),
    },
    {
      description: (
        <b>Achieve a Brighter Smile with At-Home Teeth Whitening!</b>
      ),
    },
  ];

  return (
    <ContentWrapper
      mainContent={mainContent}
      subContents={subContetnt}
      firstImage={about1}
      secondImage={about2}
    />
  );
};

export default TeethWhiteningEn;
