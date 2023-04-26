import Avatar from "@mui/material/Avatar";
import { Link, Stack, Typography } from "@mui/material";
export const Card: any = ({ data }) => (
  <Stack
    key={data.id}
    direction={"row"}
    spacing={3}
    sx={{
      padding: "1rem",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        backgroundColor: "lightblue",
        cursor: "pointer",
        transition: "background-color 0s",
      },
      "&:not(:hover)": {
        backgroundColor: "transparent",
        transition: "background-color 0.5s ease",
      },
    }}
  >
    <Link href={data.html_url} target="_blank">
      <Avatar src={data.avatar_url} sx={{ width: "8rem", height: "8rem" }} />
    </Link>
    <Typography component="h3" sx={{ flex: "1" }}>
      {data.name}
    </Typography>
  </Stack>
);
