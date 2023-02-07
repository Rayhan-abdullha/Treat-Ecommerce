import { Box, Grid } from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  foodsFetchError,
  foodsFetchLoading,
  foodsFetchSuccess,
} from "../../redux/actionCreator/actionCreator";
import Loading from "../loading/Loading";
import EmptyList from "./EmptyList";
import FoodCardList from "./FoodCardList";
import Typhography from "@mui/material/Typography";

const FoodCardItem = () => {
  const { allfoods, loading } = useSelector((state) => state.foodsReducer);
  const { catId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(foodsFetchLoading(true));
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${catId}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(foodsFetchSuccess(res.meals));
        dispatch(foodsFetchLoading(false));
        dispatch(foodsFetchError(""));
      })
      .catch((e) => {
        dispatch(foodsFetchLoading(false));
        dispatch(foodsFetchError("Somthing went to wrong"));
      });
  }, []);

  return (
    <Container>
      {allfoods !== null && (
        <Typhography
          variant="h5"
          sx={{
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Foods List {catId}
        </Typhography>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {!loading ? (
              allfoods?.map((food) => (
                <Grid item xs={12} sm={6} md={4} key={food.idMeal}>
                  <FoodCardList foods={food} />
                </Grid>
              ))
            ) : (
              <Loading />
            )}

            {allfoods === null && !loading && <EmptyList />}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FoodCardItem;
