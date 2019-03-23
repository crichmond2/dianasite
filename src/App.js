import React from 'react';
import LandingPage from './containers/landing'
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider,makeStyles } from '@material-ui/styles'
import { BrowserRouter,Switch,Route,withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from './components/link'
import Grid from '@material-ui/core/Grid'
import About from './containers/about'
import AboutEO from './containers/abouteo'
import Contact from './containers/contact'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const theme = createMuiTheme({
	palette:{
		primary:{main:'#282829'},
		secondary:{main:'#000000'},
	}
})


const App = props => {
	const {classes} = props
	return (
	<ThemeProvider theme={theme}>
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={LandingPage}/>
					<Route path='/about' exact component={About}/>
					<Route path='/elfowls' exact component={AboutEO}/>
					<Route path='/contact' exact component={Contact}/>
				</Switch>
			</BrowserRouter>
		</MuiThemeProvider>
	</ThemeProvider>
	);
}

export default withStyles(styles)(App);
