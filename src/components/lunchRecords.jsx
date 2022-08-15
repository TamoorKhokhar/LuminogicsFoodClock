import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
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
    field: 'itemDescription',
    headerName: 'Item Description',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'rotti',
    headerName: 'Rotti:',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'amountPaid',
    headerName: 'Amount Paid:',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  }
];
export default function LunchRecords({ heading }) {
  const result = useSelector((state) => state?.lunch?.record[0]);
  const sumRotti = result?.map((el) => {
    return {
      sumValue: el?.rotiQuantity
    };
  });
  const totalValue = sumRotti.reduce((a, v) => (a = a + v.sumValue), 0);
  var modifiedRows =
    result.length > 0
      ? result?.map((element, index) => {
          return {
            ...element,
            userName: element?.employeeName,
            index: index,
            itemDescription: element?.extras,
            rotti: element?.rotiQuantity,
            amountPaid: element?.amount
          };
        })
      : '';
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: '100%',
          border: '1px solid black ',
          height: '500px'
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
          <Grid item>
            <b>Total Rotti : {totalValue}</b>
          </Grid>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column'
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
