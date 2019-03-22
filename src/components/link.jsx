import React from 'react'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import {Link as RouteLink} from 'react-router-dom'

const styles = {
	flat:{
		color:'white'
	}
}

const Link = props => {
	const {classes} = props
	return (
		<React.Fragment>
		{
			props.active?
				<Button variant='contained' color='secondary'>{props.children}</Button>
			:
				<RouteLink to={`/${props.link}`}>
					<Button variant='text' className={classes.flat} color='primary'>{props.children}</Button>
				</RouteLink>
		}
		</React.Fragment>
	)
}
export default withStyles(styles)(Link)
