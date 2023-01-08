import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import '/src/index.css'

interface MuiCardProps {
  text: string;
  maxWords: number;
}
// database
export default function PostBlock() {

  let text = "在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s";
  const words  = text.split('a');
  console.log(words)
  console.log(typeof(words))

  const Text = words.slice(0, 20);
  // console.log(Text)
  return (
    <>
    {/* <div className='border-gray-800'>
      <div className='bg-sky-100'>
        <p className='2xl'>title</p>
        <h2>time catrgory</h2>
      </div>
      <p>lorem2</p>
      <button>read more</button>
    </div> */}

    <Card className='mb-10'>
      <CardHeader title= 'Post Title' subheader= 'time category' className='bg-sky-100'/>
      <CardContent>
        <div className='h-9'>
          <p className=''>
            {Text}
          </p>
        </div>
        {/* <Typography variant="h5" className='overflow-hidden h-14'> */}
        
        {/* 在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s在第一次認識docker，其實不知道他可以幹嘛，後來才知道可以配合k8s */}
        {/* </Typography>         */}
      </CardContent>
      <p>... keep reading</p>
    </Card>
    </>
  );
}

