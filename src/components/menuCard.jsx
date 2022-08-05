import React from "react";
import { Grid, Typography, Box } from "@mui/material";
function MenuCard({ title, src, handleOpen }) {
  return (
    <Grid
      item
      md={4}
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "0.5rem",
        position: "relative"
      }}>
      <Box
        className="imageContainer"
        sx={{
          height: "90%",
          width: "80%",
          overflow: "hidden",
          borderRadius: "1rem"
        }}>
        <img
          src={src}
          alt="image2"
          style={{
            height: "100%",
            width: "100%",
            transition: "transform 1s",
            display: "block",
            cursor: "pointer",
            overflow: "hidden"
          }}
          onClick={handleOpen}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "13%",
            left: "0",
            width: "90%",
            padding: "15px"
          }}>
          <Typography variant="h3">{title}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default MenuCard;
