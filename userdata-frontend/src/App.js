import './App.css';
import { Container, AppBar,Typography, Grow, Grid } from "@material-ui/core";
import User from "./components/showUser/showUser";
import Create from "./components/createUser/createUser";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit" style={{backgroundColor:"skyblue",border:'2px solid black', borderRadius:'5px'}}>
          <Typography className={classes.heading} variant="h2" align="center">Create User and Show</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit" style={{color: "blue", backgroundColor:"skyblue", border:'2px solid black', borderRadius: '5px'}}>
                  <User/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit" style={{color: "blue", backgroundColor:"skyblue", border:'2px solid black', borderRadius: '5px'}}>
                <Create/>
              </AppBar>
                </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
