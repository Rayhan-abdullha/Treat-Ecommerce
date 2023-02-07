import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteToCart } from "./../../redux/actionCreator/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function FoodCardList({ foods, carts = false }) {
  const { cart } = useSelector((state) => state.foodsReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const delToCart = cart.filter((food) => food.idMeal !== id);
    dispatch(deleteToCart(delToCart));
  };
  return (
    <Card
      className="card"
      sx={{ maxWidth: 345, margin: "auto", marginBottom: "30px" }}
    >
      <Link to={`/fooddetails/${foods.idMeal}`}>
        <CardHeader title={foods.strMeal} />
        <CardMedia
          component="img"
          height="194"
          image={foods.strMealThumb}
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {foods.strCategory}
        </Typography>
        {carts && (
          <Button
            sx={{ marginTop: "10px", width: "100%" }}
            onClick={() => handleDelete(foods.idMeal)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Remove to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
