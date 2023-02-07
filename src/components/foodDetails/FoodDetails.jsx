import React, { useEffect } from "react";
import { Button, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  foodDetailsFetch,
  foodsFetchError,
  foodsFetchLoading,
} from "../../redux/actionCreator/actionCreator";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const FoodDetails = () => {
  const { allfoods, singleFoodDetials } = useSelector(
    (state) => state.foodsReducer
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(foodsFetchLoading(true));
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(foodDetailsFetch(data.meals[0]));
        dispatch(foodsFetchLoading(false));
        dispatch(foodsFetchError(""));
      })
      .catch((e) => {
        dispatch(foodsFetchLoading(false));
        dispatch(foodsFetchError("Somthing went to wrong!"));
      });
  }, [id]);
  // let o = {
  //   strIngredient1: "Chicken",
  //   strIngredient2: "Salt",
  //   strIngredient3: "Pepper",
  //   strIngredient4: "Ginger Cordial",
  //   strIngredient5: "Ginger",
  //   strIngredient6: "Spring Onions",
  //   strIngredient7: "Rice",
  //   strIngredient8: "Water",
  //   strIngredient9: "Coriander",
  //   strInstructions,
  //   strMeal,
  //   strMeasure7,
  // };
  const handleCart = () => {
    const addCart = allfoods.find((food) => food.idMeal === id);
    dispatch(addToCart(addCart));
  };
  return (
    <Container>
      <Card sx={{ maxWidth: "auto", margin: "auto", marginBottom: "30px" }}>
        <CardHeader title={singleFoodDetials.strMeal} />
        <CardMedia
          component="img"
          height="194"
          image={singleFoodDetials.strMealThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            sx={{ marginBottom: "10px", fontStyle: "italic" }}
            variant="body2"
          >
            {singleFoodDetials.strIngredient4}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {singleFoodDetials.strInstructions}
          </Typography>
        </CardContent>

        <IconButton
          onClick={handleCart}
          color="primary"
          aria-label="add to shopping cart"
        >
          <Button>Add to Cart</Button>
          <AddShoppingCartIcon />
        </IconButton>
      </Card>
    </Container>
  );
};

export default FoodDetails;
