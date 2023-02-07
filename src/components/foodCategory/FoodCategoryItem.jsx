import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FoodCategoryList from "./FoodCategoryList";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";

export default function FoodCategoryItem({ category }) {
  const { loading } = useSelector((state) => state.categoriesReducer);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {!loading ? (
            category?.map((ct) => (
              <Grid item key={ct.idCategory} xs={12} sm={6} md={4}>
                <FoodCategoryList category={ct} />
              </Grid>
            ))
          ) : (
            <Loading />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
