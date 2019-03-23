import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import Link from './../components/link'
import Cat from './../CAT.png'
import NavBar from './../components/nav'
import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'

const styles = {
	text:{
		fontSize:'1.7vw',
		fontFamily:"'Merriweather', serif",
	},
	bigText:{
		fontSize:'3.7vw',
		fontFamily:"'Merriweather', serif",
	}
};
const AboutEO = props => {
	const {classes} = props
	const theme = useTheme()
	const width = 
	[...theme.breakpoints.keys].reverse().reduce((output,key) => {
		const matches = useMediaQuery(theme.breakpoints.only(key))
		return !output && matches ? key : output
	},null) || 'xs'
	const small = width === 'sm' || width === 'xs'
	return (
		<React.Fragment>
			<NavBar/>
			<Grid container direction='row' justify='flex-start'>
				<Grid item xs={1}>
				</Grid>
				<Grid item xs={10}>
					<p className={small?classes.bigText:classes.text}>All 12-year-old Alaine wants is for her missing dad to come home and for things to be normal. Her mom thinks Alaine needs help when she tells her she was chased home after school by a giant spider.</p>
				</Grid>
				<Grid item xs={1}>
				</Grid>

				<Grid item xs={1}>
				</Grid>
				<Grid item xs={10}>
					<p className={small?classes.bigText:classes.text}>But Alaine knows that her mom’s idea of help won’t make the increasing number of spiders and toads that follow her go away. She already struggles with anxiety. But a mysterious forest map, talking cats, and changes in her own body lead her to trust the world no one else but she sees more and more, including a boy from the forest who’s sometimes an owl.</p>
				</Grid>
				<Grid item xs={1}>
				</Grid>

				<Grid item xs={1}>
				</Grid>
				<Grid item xs={10}>
					<p className={small?classes.bigText:classes.text}>When her mom disappears, Alaine resolves to face her growing sense of unreality and must rely on new friends, both non-human and somewhere in between. But as she begins the uncertain journey into the other world of the forest next door, facing who she is and what she’s capable of may scare her more than discovering the secrets her parents have kept.</p>
				</Grid>
				<Grid item xs={1}>
				</Grid>
			</Grid>
			<Grid container justify='center'>
				<Grid item xs={3}>
					<img src={Cat} alt='Cat' style={{width:'100%'}}/>
				</Grid>
			</Grid>
			
		</React.Fragment>
	)
}
export default withStyles(styles)(AboutEO)
