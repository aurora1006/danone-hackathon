const PRODUCTOS_GRAPHQL_FIELDS = `
title
description
ingredients
nutritionalInfo
content
coverImage {
  url
}
`

async function fetchGraphQL(query, preview = false) {
  preview = false
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.productosCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.productosCollection?.items
}

export async function getAllProducts(preview) {
  const entries = await fetchGraphQL(
    `query {
      productosCollection( order: title_DESC) {
            items {
              ${PRODUCTOS_GRAPHQL_FIELDS}
          }
      }
    }`
  )
  return extractPostEntries(entries)
}


