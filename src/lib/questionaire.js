export const questionaire = {
  ground: {
    title: "Ground search",
    questions: [
      {
        type: "SAR operation risk score",
        title: "Operational complexity",
        question: "How complex & complicated is the task?",
        explainers: {
          low: [
            "Simple operation, requiring one or two single activities (e.g. Locate and Escort to safety)",
            "1-8 hour duration",
            "Minor subject injuries",
          ],
          moderate: [
            "More complex operation, requiring multiple activities (e.g. Locate and evacuate using a litter) with some challenges both in access and egress",
            "8-24 hour duration",
            "Significant non-life-threatening injuries",
          ],
          high: [
            "Very complex operation involving multiple teams, convergent volunteers",
            "Difficult access and egress",
            "Helicopter transport",
            "Multi-day or multi-organization response",
            "Life-threatening injuries",
          ],
        },
      },
      {
        type: "SAR operation risk score",
        title: "Activity hazards",
        question: "How high are the hazards in the activities?",
        explainers: {
          low: [
            "Simple basic GSAR activities; orienteering, tracking,  and/or sweep searching",
            "Simple terrain",
            "Hazards are low probability and low severity",
          ],
          moderate: [
            "Potential for several disciplines",
            "Challenging terrain",
            "Hazard probability high but severity manageable",
          ],
          high: [
            "Response may require use of several technical disciplines; rope rescur, swiftwater and/or avalanche assessment",
            "Difficult terrain",
            "Hazards are high probability and high severity",
          ],
        },
      },
      {
        type: "SAR operation risk score",
        title: "Envionmental conditions",
        question: "How high are the environmental hazards?",
        explainers: {
          low: [
            "Minimal hazards",
            "Good weather, stable forecast, daylight, warm temperatures and/or good visibility",
            "Low elevation",
          ],
          moderate: [
            "Moderate hazards",
            "Uncertain forecast, low light, freezing temperature, moderate precipitation, and/or broken visibility",
          ],
          high: [
            "Extreme hazards",
            "Impending forecast, drastic weather system, darkness, cold temperatures, heavy precipitation, high wind ando/or obscured visibility",
            "High elevation",
          ],
        },
      },
      {
        type: "SAR operation risk score",
        title: "Vulnerability",
        question: "How exposed and vulnerable are the team members",
        explainers: {
          low: [
            "Minimal exposure to personal",
            "Good searching terrain",
            "<1 hour exposure",
            "<3 searchers exposed",
            "Full 2-way communications",
          ],
          moderate: [
            "Moderate exposure to personnel due to activity/environmental hazards and/or weather",
            "Moderate terrain hazards",
            "1-4 hours exposure",
            "3-12 searchers exposed",
            "Intermittent communications and/or relay available if required",
          ],
          high: [
            "High exposure due to extreme activity/environmental hazards and/or weather",
            "Broken terrain, talus slopes and/or cliff bands",
            ">6 hours exposure",
            ">12 searchers exposed",
            "Poor or no communications with field personnel",
          ],
        },
      },
      {
        type: "SAR operation risk score",
        title: "External influence",
        question:
          "What is the level of pressure due to survivability, media, family, and/or other?",
        explainers: {
          low: [
            "Little to no degree of urgency due to either confirmed survivability or confirmed deceased (recovery)",
            "Little or no pressure from family, media or agency",
          ],
          moderate: [
            "Some degree of urgency due to subject survivability factors",
            "Local publicity",
            "Family on scene",
            "Agency and/or press asking questions",
          ],
          high: [
            "High degree of urgency due to subject survivability factors",
            "High profile subject",
            "Family on scene",
            "Agency, national media influence and/or political pressure to resolve",
          ],
        },
      },
      {
        type: "Response capability score",
        title: "Personnel training",
        question: "What level of experience do personnel have?",
        explainers: {
          high: [
            "Basic GSAR training",
            "Minimal experience",
            "No formal training",
          ],
          moderate: [
            "Advanced GSAR training",
            "Moderate experience",
            "Some formal training",
          ],
          low: [
            "Advanced GSAR training",
            "Extensive experience",
            "Formal training",
          ],
        },
      },
      {
        type: "Response capability score",
        title: "Personnel experience",
        question: "What level of experience do personnel have?",
        explainers: {
          high: [
            "Extensive experience appropriate for the activities required",
            "Routinely respond to the incident site/area",
            ">20 similar responses",
            "Many years of recreational experience",
            "Professional experience",
          ],
          moderate: [
            "Some experience related to the activities required",

            "Some previous responses to the site/area",
            "5-20 similar responses",
            "Significant recreational experience",
          ],
          low: [
            "Little to no experience related to the activities required",
            "Completely unfamiliar with the location",
            "<5 similar responses",
            "Little to no recreational experience",
          ],
        },
      },
      {
        type: "Response capability score",
        title: "Personnel mental & physical preparedness",
        question: "How mentally & physically prepared are personnel?",
        explainers: {
          high: [
            "Personnel are in good spirits, well-rested and exhibit characteristics of a cohesive team",
            "Excellent personal fitness",
          ],
          moderate: [
            "Personnel are generally positive although some are tiring",
            "Adequate physical condition",
          ],
          low: [
            "Personal are negative and question decisions (This is not intended to imply that SAR volunteers should not express concerns regarding their safety)",
            "Resources have been on task through several assignments and are showing signs of exhaustion",
            "Searchers have been involved for multi-operational periods",
            "Unfit/does not excercise on a regular basis",
          ],
        },
      },
      {
        type: "Response capability score",
        title: "Planning",
        Question: "How much planning has there been?",
        explainers: {
          high: [
            "Plans (and/or pre-plans) are in places, including contingencies, all documented",
          ],
          moderate: [
            "Overall plan is in place, with some consultation",
            "Basic notes taken about the site",
          ],
          low: [
            "Basic discussion on overall strategies and tactics",
            "Nothing in writing for this site",
          ],
        },
      },
      {
        type: "Response capability score",
        title: "Resources",
        question: "What is the level of resources available?",
        explainers: {
          high: [
            "Appropriate resources are in place to cover all anticipated eventualities, contingencies and multi-operational periods",
          ],
          moderate: [
            "Basic resources are in place to cover response",
            "Back-up is available, but not on site",
          ],
          low: [
            "Resources are barely adequate",
            "No back-up or contingency available",
          ],
        },
      },
    ],
  },
  ropeRescue: {
    title: "Rope rescue",
  },

  mountainRescue: {
    title: "Mountain rescue",
  },
  swiftwaterRescue: {
    title: "Swiftwater rescue",
  },
};
