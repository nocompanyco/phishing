import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, IconButton, Toolbar, Typography, Tooltip } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  title: {
    flex: '1 auto'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};

class Header extends Component {
  render () {
    const {
      classes,
      onRequestRouteChange
    } = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.title}>
            Phishing
          </Typography>
          <Button onClick={handleClick}>test</Button>
          {/* <Button color='inherit' onClick={() => onRequestRouteChange('/1')}>Menu1</Button>
          <Button color='inherit' onClick={() => onRequestRouteChange('/2')}>Menu2</Button>
          <Button color='inherit' onClick={() => onRequestRouteChange('/3')}>Menu3</Button> */}
          
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  onRequestRouteChange: PropTypes.func.isRequired
}

export default withStyles(styles)(Header)
