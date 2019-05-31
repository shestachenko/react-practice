import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';
import {ContactInterface} from '../../../../interfaces/contact.interface';

const styles = (theme: any): any => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function ContactGrid(props: any) {
  const { classes, list, isLoading, clickRow, selectRow} = props;

  return (
    <Paper className={classes.root}>
      <MaterialTable
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Phone Number', field: 'phone_number' },
          { title: 'Email', field: 'email', type: 'numeric' },
        ]}
        data={list}
        isLoading={isLoading}
        options={{
          selection: true,
          showSelectAllCheckbox: false,
          paging: false,
          showTitle: false,
          searchFieldAlignment: 'left',
        }}
        onSelectionChange = {(selected: ContactInterface[]) => selectRow(selected)}
        onRowClick = {(event, contact: ContactInterface) => clickRow(contact.id)}
      />
    </Paper>
  );
}

ContactGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array,
  isLoading: PropTypes.bool,
  clickRow: PropTypes.func,
  selectRow: PropTypes.func,
};

export default withStyles(styles)(ContactGrid);
