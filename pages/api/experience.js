import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const experience = [
      {
        name: "AfterShoot",
        position: "Go Backend Developer",
        startDate: "February 2023",
        endDate: "Present",
        description:
          "Go Backend Developer in an AI startup. Working on technologies like Go, Docker, Gin, Postgres and GCP",
      },
      {
        name: "The One World",
        position: "Backend Developer",
        startDate: "Sep 2022",
        endDate: "Dec 2022",
        link: "",
        description:
          "Worked with Go and Python. Build a REST API for a social media like dating app in Python and a Chat Server in Go",
      },
      {
        name: "MRK Pvt. Ltd.",
        position: "Flutter Developer",
        startDate: "June 2022",
        endDate: "Oct 2022",
        description: "Worked with Flutter and Firebase to build a Instgram Like Social Media App for Businesses Proffesionals",
      }
    ];

    return res.json(experience);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
