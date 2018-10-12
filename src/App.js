import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import NameForm from './NameForm';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  {quote: 'HSI EC 1Y 100', strike: 100, expiry: 'Mar19', premium: 1.2},
  {quote: 'HSCEI EC 1Y 100', strike: 100, expiry: 'Mar20', premium: 1.3}
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div>

    <h2>Today's Quotes</h2>
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
              {rows.map(row => {
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

    <br/>
    <br/>
    <h2>New Quote</h2>
    <NameForm />
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);