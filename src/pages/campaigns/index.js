import { useState } from 'react';
// import { Flex, Icon, Text} from "@chakra-ui/react";


// material-ui
import {
  Avatar,
  AvatarGroup,
  // Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import  AppCurrentVisits from './AppCurrentVisits'
import AppWebsiteVisits from './AppWebsiteVisits'
import AppConversionRates from './AppConversionRates'
// project import
// import OrdersTable from './OrdersTable';
// import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
// import ReportAreaChart from './ReportAreaChart';
import { useTheme } from '@mui/material/styles';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
// import Card from "../../../src/components/cards/Card";
// import {
//   barChartDataDailyTraffic,
//   barChartOptionsDailyTraffic,
// } from "../../../src/components/chart/charts";
// import BarChart from "../../../src/components/chart/BarChart";
// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [value, setValue] = useState('today');
  // const [slot, setSlot] = useState('week');
  const theme = useTheme();
  // const { ...rest } = props;
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Leads</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <AnalyticEcommerce title="Total leads generated" count="450" percentage={59.3} extra="" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <AnalyticEcommerce title="Conversational rate" percentage={30} extra="" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <AnalyticEcommerce title="Sales-ready leads" count="90" percentage={27.4} isLoss color="warning" extra="" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <AnalyticEcommerce title="Leads to test drives ratio" count="0.2/1" percentage={7.4} isLoss color="warning" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <AnalyticEcommerce title="Cost per lead" count="$155" percentage={5.4} extra="" />
      </Grid>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Unique Visitor</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid> */}
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Leads by source</Typography>
          </Grid>
          <Grid item />
        </Grid>
        {/* <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard> */}
        <MainCard sx={{ mt: 2 }} content={false}>
          {/* <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box> */}
          <MonthlyBarChart />
        </MainCard>

      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={6} lg={8}>
      <Grid item>
            <Typography variant="h5">Leads Analysis</Typography>
          </Grid>
            <AppWebsiteVisits
              sx={{ mt: 2 }} content={false}
              subheader="(+23%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'total lead',
                  type: 'column',
                  fill: 'solid',
                  data: [68, 76, 69, 81, 98, 75, 67, 88, 73, 61, 87],
                },
                {
                  name: 'leads by client',
                  type: 'column',
                  fill: 'solid',
                  data:  [45, 31, 51, 43, 55, 46, 53, 64, 59, 31, 45],
                },
                {
                  name: 'leads by source',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 45, 18, 42, 44, 29, 16, 24, 14, 30, 42],
                },
                {
                  name: 'returned leads',
                  type: 'area',
                  fill: 'gradient',
                  data: [12, 35, 25, 21, 26, 37, 24, 11, 43, 22, 26],
                },
                {
                  name: 'approved leads',
                  type: 'line',
                  fill: 'solid',
                  data: [60, 66, 68, 78, 88, 79, 65, 77, 77, 67, 69],
                },
                {
                  name: 'pending leads',
                  type: 'line',
                  fill: 'solid',
                  data:  [12, 22, 16, 23, 24, 32, 12, 22, 13, 19, 22],
                },
                {
                  name: 'declined leads',
                  type: 'line',
                  fill: 'solid',
                  data: [5, 5, 6, 7, 8, 7, 9, 8, 6, 10, 5],
                },
                {
                  name: 'tubed leads',
                  type: 'line',
                  fill: 'solid',
                  data: [23, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'deliverd leads',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <Grid item>
                  <Typography variant="h5">Drop-off rate at each stage in the sales funnel</Typography>
                </Grid>
                <Grid item />
            <AppCurrentVisits
              sx={{ mt: 2 }} content={false}
              chartData={[
                { label: 'initial Contact Drop Offs', value: 25 },
                { label: 'Engagement Stage Drop-Offs', value: 30 },
                { label: 'Conversion Stage Drop-Offs', value: 20 },
                // { label: '', value: 25 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
      {/* <Grid item xs={12} md={7} lg={8}>
      <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Daily Traffic
            </Text>
          </Flex>
          <Flex align='end'>
            <Text
              color={textColor}
              fontSize='34px'
              fontWeight='700'
              lineHeight='100%'>
              2.579
            </Text>
            <Text
              ms='6px'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Visitors
            </Text>
          </Flex>
        </Flex>
        <Flex align='center'>
          <Icon as={RiArrowUpSFill} color='green.500' />
          <Text color='green.500' fontSize='sm' fontWeight='700'>
            +2.45%
          </Text>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </Box>
    </Card>
    </Grid> */}
    <Grid item xs={12} md={6} lg={8}>
    <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Conversion rate</Typography>
          </Grid>
          <Grid item />
        </Grid>
            <AppConversionRates
              subheader="Average rate : 25% "
              sx={{ mt: 2 }} content={false}
              chartData={[
                { label: 'Italy', value: 30 },
                { label: 'Japan', value: 22 },
                { label: 'China', value: 26 },
                { label: 'Canada', value: 23 },
                { label: 'France', value: 22 },
                { label: 'Germany', value: 27 },
                { label: 'South Korea', value: 28 },
                { label: 'Netherlands', value: 32 },
                { label: 'United States', value: 26 },
        
              ]}
            />
          </Grid>
        
      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sales Report</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'success.main',
                    bgcolor: 'success.lighter'
                  }}
                >
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'primary.main',
                    bgcolor: 'primary.lighter'
                  }}
                >
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #984947</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'error.main',
                    bgcolor: 'error.lighter'
                  }}
                >
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
