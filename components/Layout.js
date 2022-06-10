import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'

function Layout({children}) {
    const classes = useStyles();
  return (
    <div>
        <Head>
            <title>Web - Shop</title>
        </Head>
        <AppBar postion='static' className={classes.navbar}>
            <Toolbar>
                <Typography>Web-Shop</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>
            {children}
        </Container>
        <footer className={classes.footer}>
            <Typography>
                All rights reserved.Web-shop
            </Typography>
        </footer>
    </div>
  )
}

export default Layout