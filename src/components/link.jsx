import React from 'react'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import {Link as RouteLink} from 'react-router-dom'

const styles = {
	flat:{
		color:'white',
		fontFamily:"'Merriweather', serif",
	},
	but:{
		fontFamily:"'Merriweather', serif",
	}
}

const Link = props => {
	const {classes} = props
	return (
		<React.Fragment>
		{
			props.active?
				<Button className={classes.but} variant='contained' color='secondary'>{props.children}</Button>
			:
				<RouteLink style={{textDecoration:'none'}}to={`/${props.link}`}>
					<Button variant='text' className={classes.flat} color='primary'>{props.children}</Button>
				</RouteLink>
		}
		</React.Fragment>
	)
}
export default withStyles(styles)(Link)
