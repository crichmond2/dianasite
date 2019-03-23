import React from 'react';
import LandingPage from './containers/landing'
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
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
