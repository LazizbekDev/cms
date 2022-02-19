import { request, gql } from "graphql-request";

const graphqlAPI = 'https://api-eu-west-2.graphcms.com/v2/ckzpojszc51vw01xk4od17w2o/master'

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

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges
}

export const getRecentPosts = async () => {
    const query = gql`
        query getPostDetails() {
            posts(
                orderBy: createdAt_ASC
                last: 3
            ) {
                title
                coverImage {
                    url
                }
                createdAt
                slug
            }
        }
    `

    const results = await request(graphqlAPI, query);

    return results.posts
}

export const getRelatedPosts = async() => {
    const query = gql`
        query getPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                last: 3
            ) {
                title
                coverImage {
                    url
                }
                createdAt
                slug
            }
        }
    `

    const results = await request(graphqlAPI, query);

    return results.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
        posts {
            slug
            tags
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};