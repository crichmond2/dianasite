import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import Link from './../components/link'
import {withStyles} from '@material-ui/core/styles'
import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};
const NavBar = props => {
	const { classes } = props
	const theme = useTheme()
	const width = 
	[...theme.breakpoints.keys].reverse().reduce((output,key) => {
		const matches = useMediaQuery(theme.breakpoints.only(key))
		return !output && matches ? key : output
	},null) || 'xs'
	const small = width === 'sm' || width === 'xs'
	return (
		<div className={classes.root}>
			{
				small?
				<AppBar position="static">
					<Toolbar>
						<Grid container direction='row' justify='space-between' alignItems='center'>
							<Grid item xs={12}>
								<Grid container direction='row' justify='space-between' alignItems='center'>
									<Grid item>
										<Link active={window.location.pathname==='/'} link=''>Home</Link>
									</Grid>
									<Grid item>
										<Link active={window.location.pathname==='/about'} link='about'>ABOUT D.A BISHOP</Link>
									</Grid>
									<Grid item>
										<Link active={window.location.pathname==='/contact'} link='contact'>CONTACT</Link>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container direction='row' justify='center'>
									<Grid item>
										<Link active={window.location.pathname==='/elfowls'} link='elfowls'>Elf Owls</Link>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
				:
				<AppBar position="static">
					<Toolbar>
						<Grid container direction='row' justify='space-between' alignItems='center'>
							<Grid item xs={12} sm={8} md={4}>
								<Grid container direction='row' justify='space-between' alignItems='center'>
									<Grid item>
										<Link active={window.location.pathname==='/'} link=''>Home</Link>
									</Grid>
									<Grid item>
										<Link active={window.location.pathname==='/about'} link='about'>ABOUT D.A BISHOP</Link>
									</Grid>
									<Grid item>
										<Link active={window.location.pathname==='/contact'} link='contact'>CONTACT</Link>
									</Grid>
								</Grid>
							</Grid>
							<Grid item md={4}>
								<Grid container direction='row' justify='flex-end'>
									<Grid item>
										<Link active={window.location.pathname==='/elfowls'} link='elfowls'>Elf Owls</Link>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			}
		</div>
	)
}

export default withStyles(styles)(NavBar)
