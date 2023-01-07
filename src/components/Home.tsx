import Grid2 from '@mui/material/Unstable_Grid2'; 
import Link from './Link';
import PostBlock from './Post';
import Header from './Header'

const HomePage = () => {
    return(
        <>
        <Header/>
        <Link/>
        <Grid2 
            container 
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid2 xs={1} lg={1}></Grid2>
            <Grid2 
                container 
                xs={10} lg={8} 
                direction="column" 
                justifyContent="flex-start" 
                alignItems="center"
                rowSpacing={3}
            >
                <Grid2 xs={10} lg={10}>
                    <PostBlock></PostBlock>
                </Grid2>
                <Grid2 xs={10} lg={10}>
                    <PostBlock></PostBlock>
                </Grid2>
                <Grid2 xs={10} lg={10}>
                    <PostBlock></PostBlock>
                </Grid2>
                <Grid2 xs={10} lg={10}>
                    <PostBlock></PostBlock>
                </Grid2>
            </Grid2>
            <Grid2 
                container
                xs={10} lg={2} 
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {/* categories */}
            </Grid2>
            <Grid2 xs={1} lg={1}></Grid2>
        </Grid2>
        </>
    )
}

export default HomePage