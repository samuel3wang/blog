import { Card, CardHeader, CardContent, Grid, Typography } from '@material-ui/core';
// database
function PostBlock() {
    return (
        <Card>
          <CardHeader title="Post Title" subheader="Post Subtitle" />
          <CardContent>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas qui eum iste distinctio hic?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum beatae, magnam ad officiis sed dolore obcaecati esse maiores optio.
            </Typography>
          </CardContent>
        </Card>
    );
}

export default PostBlock