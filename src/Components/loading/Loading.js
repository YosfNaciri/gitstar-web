import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';


function CardLoad(props) {

 const style = {
    card : {
        
        maxWidth: "100%", 
        borderRadius : 25,
        margin : "1%",
        color : "#ffffff",
      }
  }

  return (
    <Card style = {style.card} >
      <CardHeader
        avatar={
            <Skeleton variant="circle" width={40} height={40} />
        }
       
        title = {<Skeleton height={10} width="80%" style={{ marginBottom: 6 }} />} 
        subheader ={ <Skeleton height={10} width="40%" />}
      />
      <CardContent>
          <React.Fragment>
            <Skeleton height={10} style={{ marginBottom: 6 }} />
            <Skeleton height={10} width="100%" />
          </React.Fragment>
      </CardContent>
    </Card>
  );
}

export default function Loading() {
  return (
    <div>
      <CardLoad />
    </div>
  );
}
