import react from 'react';
import Header from '../Header'
import Grid from '../Grid'
import Category from './Category';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

export default function Categories(){
    return (
        <>
            <Card className='mb-10'>
            <CardHeader title= 'Post Title' subheader= 'time category' className='bg-sky-100'/>
            <CardContent>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas qui eum iste distinctio hic?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum beatae, magnam ad officiis sed dolore obcaecati esse maiores optio.
                </Typography>
            </CardContent>
            </Card>
        </>
    )
}