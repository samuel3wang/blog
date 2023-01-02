import IconButton from '@mui/material/IconButton';
import NotesIcon from '@mui/icons-material/Notes';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Link() {
  return (
    <div className="text-center">
      <IconButton>
        <LinkedInIcon />
      </IconButton>
      <IconButton>
        <GitHubIcon />
      </IconButton>
      <IconButton>
        <NotesIcon />
      </IconButton>
    </div>
  );
}