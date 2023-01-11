import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import react from 'react';

export default function PostBlock(){
    return (
        <>
            <Card className='mb-12 mx-28'>
            <CardHeader title= 'Post Title' subheader= 'time category' className='bg-sky-100'/>
            <CardContent>
                <Typography variant="h5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas qui eum iste distinctio hic?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum beatae, magnam ad officiis sed dolore obcaecati esse maiores optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum beatae, magnam ad officiis sed dolore obcaecati esse maiores optio.
                </Typography>
            </CardContent>
            </Card>
        </>
    )
}