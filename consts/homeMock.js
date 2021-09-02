import { Icons } from "components/atoms";
const { WriteFast, FastAndQuality, ContactBack, Teamwork } = Icons;

export const HOME_DATA = {
  section1: {
    heading: "Write better sales emails, together.",
    paragraph1:
      "Skyrocket your outbound email response rates via lightning fast customization.",
    paragraph2:
      "Finally, visibility into how your teammates prospect, move deals forward, and close.",
  },

  section2: {
    rightSideHeading: [
      {
        title: "The",
        color: "text-white",
      },
      {
        title: "old",
        color: "text-green-500",
      },
      {
        title: "way: tribal knowledge",
        color: "text-white",
      },
    ],
    leftSideHeading: [
      {
        title: "The",
        color: "text-white",
      },
      {
        title: "old",
        color: "text-pink-500",
      },
      {
        title: "way",
        color: "text-white",
      },
    ],
    rightSideParagraph:
      "Leverage your entire team's best writing to craft compelling, specific messages that prospects actually want to read.",
    leftSideParagraph:
      "Stare at a blank page, spending 20 minutes trying to figure out what to write for a given prospect. Or, drop a prospect into a generic, uncustomized drip campaign that gets ignored.",
  },

  section4: {
    heading: "Learn from, and re-use, your team's best work",
    paragraphs: [
      "Teamwide visibility",
      "Celebrate your team's work",
      "Managers: coach your sellers on their writing live in feed",
      "Save and re-use your favorite snippets",
      "Share links to collaborate anywhere",
    ],
  },

  section5: {
    heading: "Value we can drive for your sales team",
    boards: [
      {
        // icon: () => <WriteFast />,
        text: "Increase outbound volume by reducing writing time",
      },
      {
        // icon: () => <Teamwork />,
        text: "Improve outbound writing quality",
      },
      {
        // icon: () => <ContactBack />,
        text: "Drive up outbound response rate",
      },
      {
        // icon: () => <FastAndQuality />,
        text: "More outbound pipeline built",
      },
    ],
  },
};
