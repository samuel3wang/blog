import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import "/src/index.css"
// database
function PostBlock() {
    return (
        <Card>
          <CardHeader title="Post Title" subheader="time category" className="bg-sky-100"/>
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptas qui eum iste distinctio hic?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum beatae, magnam ad officiis sed dolore obcaecati esse maiores optio.
            </Typography>
          </CardContent>
        </Card>
    );
}

export default PostBlock