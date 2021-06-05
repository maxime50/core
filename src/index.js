import './utils/polyfill';
import React from 'react';
import { defaultProps } from './defaults';
import { propTypes } from './prop-types';
import MaterialTable from './material-table';
import { withStyles } from '@material-ui/styles';

MaterialTable.defaultProps = defaultProps;
MaterialTable.propTypes = propTypes;

const styles = {
  paginationRoot: {
    width: '100%'
  },
  paginationToolbar: {
    padding: '0 !important',
    width: '100%'
  },
  paginationCaption: {
    display: 'none'
  },
  paginationSelectRoot: {
    margin: 0
  }
};

export default withStyles(styles, { withTheme: true })((props) => (
  <MaterialTable {...props} ref={props.tableRef} />
));

export {
  MTableAction,
  MTableActions,
  MTableBody,
  MTableBodyRow,
  MTableCell,
  MTableEditCell,
  MTableEditField,
  MTableEditRow,
  MTableFilterRow,
  MTableGroupRow,
  MTableGroupbar,
  MTableHeader,
  MTablePagination,
  MTableSteppedPagination,
  MTableToolbar
} from './components';
