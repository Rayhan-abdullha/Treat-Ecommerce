import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodCategoryItem from "../../components/foodCategory/FoodCategoryItem";
import Typhography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Footer from "./../../components/footer/Footer";
import {
  categoriesFetchError,
  categoriesFetchLoading,
  categoriesFetchSuccess,
} from "../../redux/actionCreator/actionCreator";
const Home = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.categoriesReducer);
  useEffect(() => {
    if (category.length === 0) {
      dispatch(categoriesFetchLoading(true));
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((res) => {
          dispatch(categoriesFetchSuccess(res.categories));
          dispatch(categoriesFetchError(""));
          dispatch(categoriesFetchLoading(false));
        })
        .catch((e) => {
          dispatch(categoriesFetchError("Somthing is Wrong!"));
          dispatch(categoriesFetchLoading(false));
        });
    }
  }, []);

  return (
    <>
      <Container>
        <Typhography
          variant="h5"
          sx={{ fontSize: "30px", textAlign: "center", marginBottom: "50px" }}
        >
          Foods Category
        </Typhography>

        <FoodCategoryItem category={category} />
      </Container>
      {category.length && <Footer />}
    </>
  );
};

export default Home;
