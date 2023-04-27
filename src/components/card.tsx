import Avatar from "@mui/material/Avatar";
import { Link, Stack, Typography } from "@mui/material";

export interface CardInterface {
  id: number;
  name: string;
  avatar_url: string;
  html_url: string;
}

export const Card: any = ({ data }: { data: CardInterface }) => (
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
    onClick={() => window.open(data.html_url)}
  >
    <Avatar src={data.avatar_url} sx={{ width: "8rem", height: "8rem" }} />
    <Typography component="h3" sx={{ flex: "1" }}>
      {data.name}
    </Typography>
  </Stack>
);
