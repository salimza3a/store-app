import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Stack } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { formatCurrency } from "../../utilities/FormatCurrency";
import { useGetProductByIdQuery } from "../../services/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import WestIcon from "@mui/icons-material/West";
import { Loader } from "../../utilities/CustomLoader";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: productDetail,
    isSuccess,
    isLoading,
    isError,
  } = useGetProductByIdQuery(id);
  console.log(productDetail, "details product");

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = (
      <>
        {" "}
        <IconButton onClick={() => navigate(-1)}>
          <WestIcon /> go back
        </IconButton>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 2, sm: 1, md: 2 }}
          sx={{ height: "50%" }}
        >
          <ImageListItem sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={productDetail?.image}
              alt={productDetail?.title}
              loading="lazy"
              style={{ objectFit: "contain", width: "50%", maxWidth: "100%" }}
            />
            <ImageListItemBar
              title={productDetail?.category}
              position="bottom"
            />
          </ImageListItem>
          <Card sx={{ width: "50%" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={"bold"}
              >
                {productDetail?.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {productDetail?.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                size="large"
                onClick={() => handleAddToCart(productDetail)}
              >
                Add to Cart
              </Button>
              <Button size="large">
                {formatCurrency(productDetail?.price)}
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </>
    );
  } else if (isError) {
    content = <h2>Something went wrong</h2>;
  }

  return (
    <>
      <Container>
        <h2 style={{ marginTop: "5rem" }}>Product Detail Page</h2>
        {content}
      </Container>
    </>
  );
};

export default ProductDetail;
