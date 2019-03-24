import React from 'react'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import Owl from './../OWL.jpg'
import './Landing.css'
import NavBar from './../components/nav'
import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
const styles = {
	owlOverlay:{
		backgroundColor:'grey',
		height:'100%',
	},
	Owl:{
		display:'table',
		width: '100%',
		background: ` url(${Owl})`,
		filter:'brightness(50%)',
		backgroundRepeat:'no-repeat',
		backgroundSize:'cover',
		backgroundPosition:'center top',
		height:'100vh',
		marginTop:'-3%',
	},
	owlText:{
		color:'white',
		width:'100vw',
		marginTop:'40%',
		position:'relative',
		fontFamily:"'Merriweather', serif",
	},
	subText:{
		fontSize:'2vw',
		fontFamily:"'Merriweather', serif",
	}
};
const LandingPage = props => {
	const theme = useTheme()
	const width = 
	[...theme.breakpoints.keys].reverse().reduce((output,key) => {
		const matches = useMediaQuery(theme.breakpoints.only(key))
		return !output && matches ? key : output
	},null) || 'xs'
	const small = width === 'sm' || width === 'xs'
	return (
		<div>
			<NavBar/>
			<div className='owl'>
			{
				small?
				<Grid container className='owlText' direction='column' justify='space-between'>
					<Grid item>
						<h1 className='elf'>ELF OWLS</h1>
					</Grid>
					<Grid item>
						<h1 className='subElf'>When home is dangerous,</h1>
						<h1 className=''style={{fontSize:'4vw',color:'#cdcfd3', fontFamily:"'Merriweather', serif "}}>the forest may be safer.</h1>
					</Grid>
				</Grid>
				:
				<Grid container className='owlText' direction='row' justify='center'>
					<Grid item xs={12} md={6}>
						<h1 className='elf'>ELF OWLS</h1>
						<h1 className='subElf'>When home is dangerous, the forest may be safer.</h1>
					</Grid>
				</Grid>
			}
			</div>
		</div>
	)
}
export default withStyles(styles)(LandingPage)
