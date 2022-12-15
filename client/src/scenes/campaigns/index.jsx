import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { campaignData } from "../../data/campaignData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Campaigns = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "client", 
            headerName: "Client", 
            flex: 1,
            cellClassName: "client-column--cell",
        },
        {
            field: "campaign", 
            headerName: "Campaign",
            flex: 1,
        },
        {
            field: "launch", 
            headerName: "Launch Date",
            flex: 1,
        },
        {
            field: "impressions", 
            headerName: "Impressions",
            flex: 1,
        },
        {
            field: "views", 
            headerName: "Views",
            flex: 1,
        },
        {
            field: "bottles", 
            headerName: "Bottles sold",
            flex: 1,
        },
        {
            field: "gross",
            headerName: "Gross Sales",
            flex: 1,
        },
  ];

  return (
    <Box m="20px">
      <Header
        title="CAMPAIGNS"
        subtitle="since 2021"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={campaignData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Campaigns;