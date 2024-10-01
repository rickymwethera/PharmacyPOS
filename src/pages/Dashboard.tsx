import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CardHeader, Divider } from '@mui/material';


const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good Morning, Ricky!';
    } else if (hour < 18) {
        return 'Good Afternoon, Ricky!';
    } else {
        return 'Good Evening, Ricky!';
    }   
}

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            
            <CardHeader
                title="Dashboard"
                sx={{
                textAlign: 'center',
                textTransform: 'uppercase',
                Underline: 'none',
                }}
            />
            
            <Typography variant="h6" sx={{ ml: 2 }}>
                {greeting()}
            </Typography>
            

            
        </Grid>
      {/* Inventory */}
      <Grid item xs={12} sm={6} >
        <Card>
          <CardContent>
            <Typography variant="h6">Inventory</Typography>
            <Divider style={{ margin: '10px 0' }} />

            <Typography variant="body2">Total no of Medicines: 298</Typography>
            <Typography variant="body2">Medicine Groups: 24</Typography>
            
          </CardContent>
          <Divider style={{ margin: '10px 10px' }} />

          <Button size="small" href="/"
          sx={{ margin: '7px' }}
          >View Inventory</Button>
        </Card>
      </Grid>

      {/* Quick Report */}
      <Grid item xs={12} sm={6} >
        <Card>
          <CardContent>
            <Typography variant="h6">Quick Report</Typography>
            <Divider style={{ margin: '10px 0' }} />

            <Typography variant="body2">Qty of Medicines Sold: 70,856</Typography>
            <Typography variant="body2">Invoices Generated: 5,288</Typography>
          </CardContent>
            <Divider style={{ margin: '10px 10px' }} />
            <Button size="small" href="/"
            sx={{ margin: '7px' }}
            >Download Report</Button>
        </Card>
      </Grid>

      {/* My Pharmacy */}
      <Grid item xs={12} sm={6} >
        <Card>
          <CardContent>
            <Typography variant="h6" >My Pharmacy</Typography>
            <Divider style={{ margin: '10px 0' }} />

            <Typography variant="body2">Total no of Suppliers: 4</Typography>
            <Typography variant="body2">Total no of Users: 5</Typography>
          </CardContent>
          <Divider style={{ margin: '10px 10px' }} />
          <Button size="small" href="/"
            sx={{ margin: '7px' }}
          >Go to User Management</Button>
        </Card>
      </Grid>

      {/* Customers */}
      <Grid item xs={12} sm={6} >
        <Card>
          <CardContent>
          <Typography variant="h6" >Customers</Typography>
          <Divider style={{ margin: '10px 0' }} />
            <Typography variant="body2">Total no of Customers: 845</Typography>
            <Typography variant="body2">Frequently bought item: Adalimumab</Typography>
          </CardContent>
            <Divider style={{ margin: '10px 10px' }} />
          <Button size="small" href="/"
            sx={{ margin: '7px' }}
          >Go to Customers Page</Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
