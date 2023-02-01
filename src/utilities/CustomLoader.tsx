import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Dna } from "react-loader-spinner";
export const Loader = () => {
  return (
    <>
      <Container>
        <Grid
          sx={{ height: "100vh" }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Dna
            visible={true}
            height="110"
            width="110"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </Grid>
      </Container>
    </>
  );
};
