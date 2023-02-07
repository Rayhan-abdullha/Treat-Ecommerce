import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export default function FoodCategoryList({ category }) {
  return (
    <Card
      className="card"
      sx={{ height: 350, maxWidth: 350, margin: "auto", marginBottom: "30px" }}
    >
      <Link to={`/${category.strCategory}`}>
        <CardHeader title={category.strCategory} />
        <CardMedia
          component="img"
          height="194"
          image={category.strCategoryThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            className="categoryDesc"
            variant="body2"
            color="text.secondary"
          >
            {category.strCategoryDescription}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
