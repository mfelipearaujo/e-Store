import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

  export default function ProductDetails() {
    const {id}= useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
      axios.get(`http://localhost:5000/api/products/${ id }`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    }, [id])

    if (loading) return <h3>Loading ...</h3>

    if(!product) return <h3>Product not found</h3>

    return (
        <Grid container spacing={6} sx={{mt: 2}}>

          <Grid xs={6}>
            <img src={ product.pictureUrl } alt={ product.name } style={{ width: "100%" }} />
          </Grid>

          <Grid xs={6}>
            <Typography variant="h3">{ product.name }</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h4" color="primary">R$ { (product.price / 100).toFixed(2).toLocaleString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }</Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>{ product.name }</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Descrição</TableCell>
                    <TableCell>{ product.description }</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Categoria</TableCell>
                    <TableCell>{ product.type }</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Marca</TableCell>
                    <TableCell>{ product.brand }</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quantidade em estoque</TableCell>
                    <TableCell>{ product.quantityInStock }</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

        </Grid>
    )
  }