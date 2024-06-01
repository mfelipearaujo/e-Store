import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: "catálogo", path: "/catalog" },
    { title: "sobre", path: "/about" },
    { title: "contato", path: "/contact" }
]

const rightLinks = [
    { title: "login", path: "/login" },
    { title: "registrar", path: "/register" }
]

const navStyles = {
    color: "inherit",
    textDecoration: "none",
    typography: "h6",
    "&:hover": {
        textDecoration: "underline"
    },
    "&.active": {
        fontWeight: "bold"
    }
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }} color="primary">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Box display="flex" alignItems="center">
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to="/"
                        sx={navStyles}
                    >
                        e-Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>

                <Box>
                    <List sx={{ display: "flex" }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box display="flex" alignItems="center">
                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                        <Badge badgeContent="4" color="primary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    )
}