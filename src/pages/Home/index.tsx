import { Button } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { ProductList } from "../../components/ProductList"
import { useFilterProductsByCategoryQuery } from "../../services/products"

const categoryNames = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]

const Home = () => {
    const [categoryName, setCategoryName] = useState<string>('')
    const handleButton = async (e) => {
        setCategoryName(e.currentTarget.value)
    }
    return (<>
        <Container maxWidth="xl" sx={{marginTop: '6rem'}}>
            <h2>category list</h2>
            {categoryNames.map(category => <Button onClick={handleButton} value={category} variant="outlined" key={category} sx={{ marginRight: 2 }}>{category}</Button>)}

            <ProductList categoryName={categoryName} />
        </Container>
    </>)
}


export default Home