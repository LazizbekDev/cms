import { request, gql } from "graphql-request";

// const graphqlAPI = 'https://api-eu-west-2.graphcms.com/v2/ckzpojszc51vw01xk4od17w2o/master'

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            biography
                            id
                            name
                            picture {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        coverImage {
                            url
                        }
                    }
                }
            }
        }
    `

    const result = await request('https://api-eu-west-2.graphcms.com/v2/ckzpojszc51vw01xk4od17w2o/master', query);

    return result.postsConnection.edges
}