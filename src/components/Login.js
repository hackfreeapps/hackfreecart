import React, {Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/loginActions';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    width_100: {
      width:'100%',
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
    
  });



class Login extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            username:'',
            password:''
        }
    
    }

    handleChange = name => event => {
          this.setState({
          [name]: event.target.value,
        });
    };

    
    render() {


        const {classes, appstate, login} = this.props;

      
        if(appstate.credentials.isLoggedIn){

            return   <Redirect to="/app"  data-test="logged-in"/>

        }else{

            return    <Grid container>
                           <Grid item xs={12} ms={12} lg={12} container>
                            <AppBar position="static" color="primary">
                                            <Toolbar>
                                            <Typography variant="title" color="inherit">
                                                HackFreeCart.com
                                            </Typography>
                                            </Toolbar>
                            </AppBar>         
                            </Grid>

                                                       
                            <Grid item xs={12} ms={12} lg={12} container spacing={24} className="margin-top">
                                           
                                    <Grid container spacing={24} alignContent="center" justify="center" data-test="login-form">
                                    <Paper className={classes.paper} elevation={1}>
                                        <Typography variant="headline" component="h3">
                                         Login
                                        </Typography>
       
       
                                             <Grid item xs={12}>
                                             <TextField
                                                id="id_username"
                                                label="Username"
                                                value={this.state.username}
                                                onChange={this.handleChange('username')}
                                                margin="normal"
                                                className={classes.width_100}
                                                />
                                            </Grid>
                                                                                                                   
                                            <Grid item xs={12}>


                                               <TextField
                                                id="id_password"
                                                label="Password"
                                                type="password"
                                                value={this.state.password}
                                                autoComplete="current-password"
                                                onChange={this.handleChange('password')}
                                                margin="normal"
                                                className={classes.width_100}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                            <Button variant="contained" onClick = {login.bind(null,this.state.username, this.state.password)} 
                                                            color="primary" className={classes.width_100}> Login </Button>
  
                                                   
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                                
                            </Grid>  
                    </Grid>
            
                                    
            
        }
            

    }

}
function mapStateToProps(state){
    return {
              appstate:state
           }
  }
  
  function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
  }
  
  export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(Login));