import { Card, CardHeader, CardContent, Grid, Typography } from '@material-ui/core';
// database
function PostBlock() {
    return (
      <Grid container>
        <Card>
          <CardHeader title="Post Title" subheader="Post Subtitle" />
          <CardContent>
            <Typography variant="body1">
              This is the main content of the post. It can include text, images, and other elements.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
}

export default PostBlock