import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

interface Props {
	children?: React.ReactNode
	grey: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
	id?: string
	height?: number
}

const FullContainer = ({children, grey, id, height}: Props) => {
	return (
		<Box
			component={'section'}
			id={id}
			sx={theme => ({
				bgcolor: theme.palette.grey[grey],
				height: height || 500
			})}
		>
			<Container sx={{py: 8}}>{children}</Container>
		</Box>
	)
}

export default FullContainer
