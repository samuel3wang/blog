import IconButton from '@mui/material/IconButton';
import NotesIcon from '@mui/icons-material/Notes';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Link() {
  return (
    <div className="h-20 flex items-center justify-center">
      <a href='https://www.linkedin.com/in/samuel3wang/'>
        <IconButton>
          <LinkedInIcon fontSize="large"/>
        </IconButton>
      </a>
      <a href='https://github.com/samuel3wang/'>
        <IconButton >
          <GitHubIcon fontSize="large"/>
        </IconButton>
      </a>
      <a href='https://medium.com/@samuel3wang/'>
        <IconButton>
          <NotesIcon fontSize="large"/>
        </IconButton>
      </a>
    </div>
  );
}