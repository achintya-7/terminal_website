import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

const GET_USER_ARTICLES = `
  query Publication {
    publication(host: "achintya-7.hashnode.dev") {
      isTeam
      title
      posts(first: 10) {
        edges {
          node {
            title
            brief
            url
            subtitle
          }
        }
      }
    }
  }
`;

async function gql(query, variables={}) {
  const data = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query,
          variables
      })
  });

  return data.json();
}



export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    if (req.method === "GET") {
      const result = await gql(GET_USER_ARTICLES, { page: 0 })
      const articles = result.data.publication.posts.edges.map(edge => edge.node);
      return res.json(articles)
    } else {
      return res.status(400).json({ message: "Only GET request allowed" });
    }
  }