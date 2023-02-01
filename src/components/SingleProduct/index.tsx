import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { formatCurrency } from "../../utilities/FormatCurrency";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import { useAppDispatch } from "../../hooks/hooks";
export function SingleProduct({ data }) {
  const dispatch = useAppDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <Grid>
      <Card sx={{ maxWidth: 280, marginBottom: 5 }}>
        <Link
          to={`/productdetails/${data.id}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            alt="product"
            height="240"
            style={{ objectFit: "contain" }}
            image={data.image}
          />
          <CardContent>
            <Typography gutterBottom noWrap variant="h6" component="div">
              {data.title}
            </Typography>
            <Typography
              variant="body2"
              noWrap
              gutterBottom
              color="text.secondary"
            >
              {data.description}
            </Typography>
          </CardContent>
        </Link>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="large">{formatCurrency(data.price)}</Button>
          <Button size="large" onClick={() => handleAddToCart(data)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
