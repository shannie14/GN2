import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, total, currentYear, icon, cyData, previousYear, pyData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="thin"
            sx={{ color: colors.grey[100] }}>
          
          <div style={{ display: "flex", alignItems: "baseline" }}>
            {title}
            {total}
          </div>
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {currentYear}
          <br></br>
          {previousYear}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {cyData}
          <br></br>
          {pyData}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
