import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import React from 'react'

interface Props {
	children?: React.ReactNode
}

const SectionTitle = styled(({children}: Props) => (
	<Typography variant="h3" component="h2">
		{children}
	</Typography>
))({
	mt: 2,
	mb: 2
})

export default SectionTitle
