export const getExperiences = async () => {
	const query = `
    {
      experiencesCollection {
        items {
          title
          company
          cover {
            url
          }
          description {
            json
          }
        }
      }
    }
    `
	const response = await fetch(
		`
      https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/
    `,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`
			},
			body: JSON.stringify({query})
		}
	)

	return await response.json()
}
