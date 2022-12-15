import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Campaigns from "../../scenes/campaigns";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SPIRITS NETWORK USA" />
      </Box>

    {/* BOX STATS */}
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
    {/* ROW 1 */}
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="Sessions:  "
        currentYear="2022"
        cyData="1,941,512"
        previousYear="2021"
        pyData="1,557,215"
        icon={
          <PeopleIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="Members:  "
        total="219,035"
        currentYear="2022"
        cyData="45,552"
        previousYear="2021"
        pyData="144,299"
        icon={
          <PeopleIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="Rev:  "
        total="$964,805.80"
        currentYear="2022"
        cyData="$481,611.11"
        previousYear="2021"
        pyData="$405,260.72"
        icon={
          <AttachMoneyIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>


        <Box
          gridColumn="span 12"
          gridRow="span 6"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
            <Campaigns />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
