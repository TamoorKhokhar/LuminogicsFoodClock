import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import Typography from '@mui/material/Typography';
// import { getTableData } from "../services/tableDataServices";
// import { v4 as uuidv4 } from "uuid";
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
    field: 'Item Description',
    headerName: 'Item Description',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'Rotti:',
    headerName: 'Rotti:',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'Amount Paid:',
    headerName: 'Amount Paid:',
    flex: 1,
    key: 3,
    headerClassName: 'super-app-theme--header'
  }
];
export default function LunchRecords({ heading }) {
  //   const [data, setData] = useState([]);
  //   const fetchData = async () => {
  //     const DataApi = await getTableData();
  //     setData(DataApi);
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //   const modifiedRows = data.map((element, index) => {
  //     return {
  //       ...element,
  //       name: element.name,
  //       index: index,
  //       categories: element.categories
  //     };
  //   });
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
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                // key={(row) => (row.id = uuidv4())}
                rows=""
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // getRowId={(row) => (row.id = uuidv4())}
              />
            </div>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
