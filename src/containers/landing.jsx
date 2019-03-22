import React,{ useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import Link from './../components/link'
import {withStyles} from '@material-ui/core/styles'
import Owl from './../OWL.jpg'
import Cat from './../CAT.png'
import './Landing.css'
const styles = {
  root: {
    flexGrow: 1,
  },
	back:{
		backgroundColor:'grey',
		height:'100vh',
	},
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
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
		marginTop:'30%',
		position:'relative',
	},
	subText:{
		fontSize:'2vw'
	}
};
const LandingPage = props => {
	const {classes} = props
	return (
		<div className={classes.back}>
			<div className={classes.root}>
				<AppBar position="fixed">
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
			<div className='owl'>
				<Grid container className='owlText' direction='column' justify='center'>
					<Grid item>
						<h1 className='elf'>ELF OWLS</h1>
						<h2 className='subElf'>When home is dangerous, the forrest may be safer</h2>
					</Grid>
				</Grid>
			</div>
			<Grid container direction='row' justify='flex-start'>

				<Grid item xs={1}>
				</Grid>
				<Grid item xs={10}>
					<p className={classes.subText}>All 12-year old Alaine wants is for her missing dad to come home and for things to be normal. Her mom thinks Alaine needs help when she tells her she was chased home after school by a giant spider.</p>
				</Grid>
				<Grid item xs={1}>
				</Grid>

				<Grid item xs={1}>
				</Grid>
				<Grid item xs={10}>
					<p className={classes.subText}>
But Alaine knows that her mom’s idea of help won’t make the increasing number of spiders and toads that follow her go away. She already struggles with anxiety. But a mysterious forest map, talking cats, and changes in her own body lead her to trust the world no one else but she sees more and more, including a boy from the forest who’s sometimes an owl.</p>
				</Grid>
				<Grid item xs={1}>
				</Grid>

				<Grid item xs={1}>
				</Grid>
				<Grid item xs={10}>
				<p className={classes.subText}>When her mom disappears, Alaine resolves to face her growing sense of unreality and must rely on new friends, both non-human and somewhere in between. But as she begins the uncertain journey into the other world of the forest next door, facing who she is and what she’s capable of may scare her more than discovering the secrets her parents have kept.
				</p>
				</Grid>
				<Grid item xs={1}>
				</Grid>
			</Grid>
			<Grid container direction='row' justify='center'>
				<Grid item>
					<img src={Cat} alt='CAT'/>
				</Grid>
			</Grid>
		</div>
	)
}
export default withStyles(styles)(LandingPage)
