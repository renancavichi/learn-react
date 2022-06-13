import {FaCode} from 'react-icons/fa'
import {styled} from '@mui/system'

const Logo = styled(FaCode)(({theme}) => ({
	color: theme.palette.primary.main,
	width: '2rem',
	height: '2rem'
}))

export default Logo
