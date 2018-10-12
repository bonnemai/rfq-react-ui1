import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', rows:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('Change: ' + event.target.value)
  }

  handleSubmit(event) {
    // TODO: Use props
    // TODO: Rename value -> quote
    // const url='http://localhost:8080/quote?quote='+this.state.value
    const url='http://quoteservice-env.p9mkn4ivb4.us-west-2.elasticbeanstalk.com/quote?quote='+this.state.value
    console.log('Calling URL: ' + url)
    fetch(url).then(response => response.json()).then(data => this.setState({value: this.state.value, rows:data}));

    event.preventDefault();
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control" placeholder="e.g. HSI EC 1Y 100%"/>
        </label>
        <button type="submit" value="Submit" class="btn btn-primary">Let s do this...</button>
    </form>

    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Query</TableCell>
            <TableCell numeric>Strike</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell numeric>Premium</TableCell>
            <TableCell numeric>Delta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.quote}
                </TableCell>
                <TableCell numeric>{row.strike}</TableCell>
                <TableCell numeric>{row.expiry}</TableCell>
                <TableCell numeric>{row.premium}</TableCell>
                <TableCell numeric>{row.delta}</TableCell>
              </TableRow>
            );
          })
          }
        </TableBody>
      </Table>
    </Paper>
    </div>
    );
  }
}