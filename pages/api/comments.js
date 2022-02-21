import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = 'https://api-eu-west-2.graphcms.com/v2/ckzpojszc51vw01xk4od17w2o/master'
const GRAPHCMS_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDU0Mjc1MzEsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NrenBvanN6YzUxdncwMXhrNG9kMTd3Mm8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjg0MjYyYTgtODVjNC00OWRkLTlhOGUtZDNlYjQyODkzNjg1IiwianRpIjoiY2t6d2QyZ3MyM2czczAxejhkMXBoYWF0dCJ9.gGHHgTro7QB688mU9_OdWqNsi0IXunt6H9-dkfMTyg1G2C0NH6p9MdKlxet_c2dtFLfJXYltGcgEUTHpMRDGTGI4IWHTq9jVhk-MfZZkSGyVJ-C4iy0v-eJcoSEkOUB3lVh3_kB3BDqEbepWee4w2vYpnQe1J0YzBblycF4oLHCaxjIsMdt9DahGs469VriytS4knAY3DKgmR6zfHJi60NGlwiybOMA-DcgkaGkv_l08ZSuBGUhOs0oYBw3w9nAugslBjDzZ9t4mGYChplxxZBGCLiiDHA7641kGMwBdH-HKTUGpwqiCzuxlFzvUE9QkkXSarwgae3tN-1gkOHUS6ykIj-RMA4Aw43cl-KaVx0_tfLTJrMKBH6De8luTradosgbZQPlHz3cqCO4zM4p3eJ9zSJ0C4JLeg0zuxcI3G2HTOQ2btFR-QJsY29oY5QjTaLUC3hc8WDXrncMaAWroaIXvyh1wuPQRbFUMltWDob4HLYInyLVpxm0Kw0oJSwFclh3vaZX5GUomNTizVWTB4uOl7EAsrlWxHsZe61pdWDVBvGEZ_Hj-1QXhvdla_AXkV9A-vpzk-cN5j322CfDHPZuTPFcurB8gp73-ru_oG2Z4o9VqBG5AarUiRFVzVQYicGJehDHZPwCjU9nlnH64dBM4WRoH4HZEkW6-9fkT4Yo'

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}