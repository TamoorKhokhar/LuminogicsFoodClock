import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
// import { getTableData } from "../services/tableDataServices";
import { v4 as uuidv4 } from 'uuid';
const columns = [
  {
    field: 'index',
    headerName: 'No',
    flex: 1,
    key: 1,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'userName',
    headerName: 'User Name',
    flex: 1,
    key: 2,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'teaVolume',
    headerName: 'Tea Volume',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'sugarQuantity',
    headerName: 'Sugar Quantity',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  }
];
export default function TeaRecords({ heading, backgroundColor }) {
  const data = useSelector((state) => state?.allOrder?.record[0]);
  const modifiedRows = data.map((element, index) => {
    return {
      ...element,
      userName: element.employeeName,
      index: index,
      teaVolume: element.teaVolume,
      sugarQuantity: element.sugerQuantity
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: '100%',
          border: '1px solid black ',
          height: '500px',
          backgroundColor: { backgroundColor }
        }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
            <b> {heading} </b>
          </Typography>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fafafa !important'
            }}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                key={(row) => (row.id = uuidv4())}
                rows={modifiedRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => (row.id = uuidv4())}
              />
            </div>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
