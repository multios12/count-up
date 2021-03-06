import './App.css';
import { AppBar, Button, List, ListItem, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Box } from '@mui/system';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "5", items:[] }
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              count-up
            </Typography>
          </Toolbar>
        </AppBar>
        <Box  sx={{ m: 2 }}>
          <TextField id="standard-basic" label="Standard" value={this.state.value} onChange={this.changeValue} />
          <Button variant="contained" color="primary" onClick={this.send}>送信</Button>
        </Box>
        <List>
          {this.state.items.map(v => <ListItem>{v}</ListItem>)}
        </List>
      </div>
    );
  }
  send = () => {
    var items = this.state.items;
    items.push(this.state.value);
    this.setState({items:items});

    const url = "/api/counter?value=" + this.state.value;
    axios.get(url ).then((r) => {
      const s = { value: r.data.value };
      this.setState(s);
    })
  }
  changeValue(newValue) {
    this.setState({ value: newValue });
  }
}

export default App;
