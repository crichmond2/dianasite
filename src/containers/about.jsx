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

const styles = {
	root:{
		height:'50%'
	},
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
	text:{
		fontSize:'2vw'
	},
	pic:{
		width:'40%'
	}
}

const About = props => {
	const {classes} = props
	return (
		<React.Fragment>
			<div className={classes.root}>
				<AppBar position="sticky">
					<Toolbar>
						<Grid container direction='row' justify='space-between' alignItems='center'>
							<Grid item xs={4}>
								<Grid container direction='row' justify='space-between' alignItems='center'>
									<Grid item>
										<Link active={window.location.pathname==='/'} link=''>Home</Link>
									</Grid>
									<Grid item>
										<Link active={window.location.pathname==='/about'} link='about'>ABOUT D.A BISHOP</Link>
									</Grid>
									<Grid item>
										<Link>CONTACT</Link>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<h4>ELF OWLS</h4>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
			<Grid container justify='flex-start'>
				<Grid item>
					<h1>ABOUT D.A BISHOP</h1>
				</Grid>
			</Grid>
			<Grid className={classes.root}container direction='column' justify='space-around'>
				<Grid item>
					<p className={classes.text}>Hi, I'm D.A. Bishop. I'm an author by night and editor and technical writer by day. I've published short literary fiction and nonfiction and Elf Owls is my first novel.</p>
				</Grid>
				<Grid item>
					<p className={classes.text}>Elf Owls grew out of a night-time story I made up for my daughter when she was eight years old. As she grew up, I stopped telling her the story but it stayed with me. Elf Owls soon became a novel, growing darker than the original light-hearted tale, as things sometimes do when we gain knowledge and grow wiser.</p>
				</Grid>
				<Grid item>
					<p className={classes.text}>My hope is that Elf Owls captures the magic all around us, and honors the way we meet life's challenges while making our way forward in the world.</p>
				</Grid>
			</Grid>
			<Grid container justify='flex-end'>
				<Grid item xs={4}>
					<img className={classes.pic} src={AboutPic} alt='AboutPic'/>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(About)
