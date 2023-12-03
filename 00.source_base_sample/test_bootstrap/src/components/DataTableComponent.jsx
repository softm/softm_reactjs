import React from 'react';
import DataTable, { defaultThemes } from 'react-data-table-component';
// import styled from 'styled-components';

// const StyledDataTable = styled(DataTable)`
// .rdt_TableHead {
//   width: ${(props) => props.screenWidth};
// }
// .rdt_TableHeadRow {
//   width: ${(props) => props.screenWidth};
// }
// `;
/**
 * Custom Grid Component that customizes DataTable
 * @param {DataTable columns} columns
 * @param {DataTable data} data
 */
const DataTableComponent = ({
  columns,
  data,
  pagination = true,
  responsive = true,
  onRowClicked,
  conditionalRowStyles,
  noDataMessage = '',
  fontSize = '12px',
  height = '36px',
  screenWidth = '100%',
  selectableRows = false,
  selectableRowDisabled = () => {},
  selectableRowSelected = () => {},
  onSelectedRowsChange = () => {},
}) => {
  const customStyles = {
    rows: {
      style: {
        fontSize: fontSize,
        minHeight: height,
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderLeftColor: defaultThemes.default.divider.default,
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: defaultThemes.default.divider.default,
      },
    },
    header: {
      style: {
      },
    },
    headRow: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: defaultThemes.default.divider.default,
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderLeftColor: defaultThemes.default.divider.default,
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
        background: 'var(--zodiac-lighter-gray)',
        minHeight: height,
      },
    },
    headCells: {
      style: {
        fontSize: fontSize,
        justifyContent: 'center',
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };
  const paginationOptions = {
    paginationPerPage: 10,
    rowsPerPageText: '',
    noRowsPerPage: true,
    rangeSeparatorText: '/',
    selectAllRowsItem: false,
  };
  const NoData = () => {
    return (
      <div style={{
        width: '100%',
        height: height,
        fontSize: fontSize,
        lineHeight: height,
        textAlign: 'center',
        border: '1px solid var(--zodiac-gray)',
      }}
      >
        {noDataMessage || 'There is no data'}
      </div>
    );
  };
  return (
    <DataTable
      noHeader
      persistTableHead
      customStyles={customStyles}
      columns={columns}
      data={data}
      pagination={pagination}
      paginationComponentOptions={paginationOptions}
      onRowClicked={onRowClicked}
      noDataComponent={NoData()}
      compact
      responsive={responsive}
      conditionalRowStyles={conditionalRowStyles}
      style={{ width: screenWidth }}
      selectableRows={selectableRows}
      selectableRowDisabled={selectableRowDisabled}
      selectableRowSelected={selectableRowSelected}
      onSelectedRowsChange={onSelectedRowsChange}
    />
  );
};

export default DataTableComponent;
