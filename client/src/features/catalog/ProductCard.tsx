import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                        { product.name.charAt(0).toUpperCase() }
                    </Avatar>
                }
                title={ product.name }
                titleTypographyProps={{
                    sx: { fontWeight: "bold", color: "primary.main" }
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: "contain" }}
                image={ product.pictureUrl }
                title={ product.name }
            />
            <CardContent>
                <Typography gutterBottom  color="primary.main" variant="h5">
                    R$ { (product.price / 100).toFixed(2).toLocaleString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { product.brand } / { product.type }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Adicionar ao carrinho</Button>
                <Button component={ Link } to={ `/catalog/${ product.id }` } size="small">Visualizar</Button>
            </CardActions>
        </Card>
    )
}