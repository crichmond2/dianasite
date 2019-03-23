import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './../components/nav'
import { withStyles } from '@material-ui/core/styles'
import Frog from './../FROG.png'
import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'

const styles = {
	root:{
		height:'100vh'
	},
	contact:{
		height:'50%',
	},
	frog:{
		width:'100%'
	},
	header:{
		marginLeft:'5%',
		fontSize:'4vw',
		fontFamily:"'Merriweather', serif",
	},
	bigHeader:{
		fontSize:'7vw',
		fontFamily:"'Merriweather', serif",
	},
	text:{
		marginLeft:'5%',
		fontSize:'2vw',
		fontFamily:"'Merriweather', serif",
	},
	bigText:{
		marginLeft:'5%',
		fontSize:'5vw',
		fontFamily:"'Merriweather', serif",
	},
	email:{
		marginLeft:'5%',
		fontSize:'1vw',
		fontFamily:"'Merriweather', serif",
	},
	bigEmail:{
		marginLeft:'5%',
		fontSize:'3vw',
		fontFamily:"'Merriweather', serif",
	},
}

const Contact = props => {
	const {classes} = props
	const theme = useTheme()
	const width = 
	[...theme.breakpoints.keys].reverse().reduce((output,key) => {
		const matches = useMediaQuery(theme.breakpoints.only(key))
		return !output && matches ? key : output
	},null) || 'xs'
	const small = width === 'sm' || width === 'xs'
	return (
		<div className={classes.root}>
			<NavBar/>
			<Grid container className={classes.contact}direction='column' justify='space-between' alignItems='stretch'>
				<Grid item>
					<h3 className={small?classes.bigHeader:classes.header}>CONTACT</h3>
				</Grid>
				<Grid item>
					<h3 className={small?classes.bigText:classes.text}>I'd love to hear from you! I am also actively seeking representation /publication for Elf Owls.</h3>
				</Grid>
				<Grid item>
					<h3 className={small?classes.bigEmail:classes.email} >dianabishop@gmail.com</h3>
				</Grid>
			</Grid>
			<Grid container direction='row' justify='flex-end'>
				<Grid item xs={3}>
					<img className={classes.frog} src={Frog} alt='Frog'/>
				</Grid>
				<Grid item xs={1}>
				</Grid>
			</Grid>
		</div>
	)
}

export default withStyles(styles)(Contact)
