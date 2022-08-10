// import { DataGrid } from "@mui/x-data-grid";
// import Grid from "@mui/material/Grid";
// import { Typography } from "@mui/material";
// import theme from "../theme/theme";
// import { ThemeProvider } from "@emotion/react";
// const columns = [
//   { field: "index", headerName: "Store No", flex: 1, headerClassName: "super-app-theme--header" },
//   { field: "name", headerName: "Store Name", flex: 1, headerClassName: "super-app-theme--header" },
//   {
//     field: "categories",
//     headerName: "Store Category",
//     flex: 1,
//     headerClassName: "super-app-theme--header"
//   },
//   {
//     field: "view",
//     headerName: "View Store",
//     flex: 1,
//     headerClassName: "super-app-theme--header",
//     sortable: false
//   }
// ];
// export default function TeaRecords() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Grid
//         sx={{
//           background: "radial-gradient(81.76% 81.76% at 44.66% 56.57%, #FFFFFF 0%, #D1F0F4 100%)",
//           height: "100vh"
//         }}>
//         <Grid
//           container
//           sx={{
//             display: "flex",
//             justifyContent: "center"
//           }}>
//           <Grid
//             container
//             item
//             xs={10}
//             sx={{
//               color: "secondary.main",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginTop: "2rem"
//             }}>
//             <Typography variant="h2">Morning Tea Details</Typography>
//           </Grid>
//           <Grid
//             container
//             xs={10}
//             item
//             sx={{
//               border: "5px solid #3DAD6A",
//               borderRadius: "5px",
//               marginTop: "2rem"
//             }}>
//             <DataGrid
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 color: "#132F4C",
//                 height: "400px"
//               }}
//               //   rows={rows}
//               columns={columns}
//               pageSize={5}
//               rowsPerPageOptions={[5]}
//             />
//           </Grid>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
