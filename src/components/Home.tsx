import { Grid } from '@mui/material';
import React from 'react';
import Card from './Card';
import PostBlock from './Post';

const HomePage = () => {
    return(
        <div>
            <p>Home</p>
            <Grid 
                container spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid xs={8}>
                    <PostBlock></PostBlock>
                </Grid>
                <Grid xs={4}>
                    <Card></Card>
                </Grid>
                <Grid xs={8}>
                    <PostBlock></PostBlock>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage