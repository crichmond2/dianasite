import React from 'react'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import AboutPic from './../DianaAbout.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from './../components/link'
import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import NavBar from './../components/nav'

const styles = {
	info:{
		height:'80vh',
	},
	about:{
		marginLeft:'20px',
		fontFamily:"'Merriweather', serif",
	},
	text:{
		fontSize:'2vw',
		marginLeft:'20px',
		marginRight:'20px',
		fontFamily:"'Merriweather', serif",
	},
	bigText:{
		fontSize:'5vw',
		marginLeft:'10px',
		marginRight:'10px',
		fontFamily:"'Merriweather', serif",
	},
	picContainer:{
		overflow:'auto'
	},
	pic:{
		width:'40vw',
	}
}

const About = props => {
	const {classes} = props
	const theme = useTheme()
	console.log(theme)
	const width = 
	[...theme.breakpoints.keys].reverse().reduce((output,key) => {
		const matches = useMediaQuery(theme.breakpoints.only(key))
		return !output && matches ? key : output
	},null) || 'xs'
	const small = width === 'sm' || width === 'xs'
	console.log(small)
	return (
		<React.Fragment>
			<NavBar/>
			<Grid container justify={small?'center':'flex-start'}>
				<Grid item>
					<h1 className={classes.about}>ABOUT D.A BISHOP</h1>
				</Grid>
			</Grid>
			<Grid className={classes.info}  container direction='column' justify='flex-start'>
				<Grid item xs={12} md={6}  style={{height:'100%'}}>
					<Grid container  style={{height:'100%'}}direction='column' justify='center'>
						<Grid item>
							<p className={small?classes.bigText:classes.text}>Hi, I'm D.A. Bishop. I'm an author by night and editor and technical writer by day. I've published short literary fiction and nonfiction and Elf Owls is my first novel.</p>
							<p className={small?classes.bigText:classes.text}>Elf Owls grew out of a night-time story I made up for my daughter when she was eight years old. As she grew up, I stopped telling her the story but it stayed with me. Elf Owls soon became a novel, growing darker than the original light-hearted tale, as things sometimes do when we gain knowledge and grow wiser.</p>
							<p className={small?classes.bigText:classes.text}>My hope is that Elf Owls captures the magic all around us, and honors the way we meet life's challenges while making our way forward in the world.</p>
						</Grid>
					</Grid>
				</Grid>
				{
					small?
						<div/>
					:
						<Grid item xs={12} md={5} style={{height:'100%'}}>
							<Grid container direction='column' justify='center' style={{height:'100%'}} >
								<Grid item className={classes.picContainer}>
									<img className={classes.pic} src={AboutPic} alt='AboutPic'/>
								</Grid>
							</Grid>
						</Grid>
				}
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(About)

/*

*/
