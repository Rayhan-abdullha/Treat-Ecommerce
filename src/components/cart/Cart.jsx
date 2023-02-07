import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodCardList from "../foodCard/FoodCardList";
import { Container } from "@mui/system";

const Cart = () => {
  const { cart } = useSelector((state) => state.foodsReducer);
  return (
    <>
      {cart && (
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid container item spacing={3}>
                {cart?.map((food) => (
                  <Grid item xs={4} key={food.idMeal}>
                    <FoodCardList foods={food} carts={true} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
      {cart.length === 0 && (
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Empty Cart List!
        </Typography>
      )}
    </>
  );
};

export default Cart;
