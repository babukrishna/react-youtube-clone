import Grid from '@mui/material/Unstable_Grid2';
import {Box, IconButton, InputBase, Paper} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({onChange}) => {
    return(
        <Grid container sx={{ pt: "20px" }}>
            <Grid xs={1} sx={{ display: "flex" }}>
            <IconButton sx={{ pl: "0" }} aria-label="left menu">
                <MenuIcon />
            </IconButton>
            <Box
                sx={{
                width: "60px",
                height: "42px",
                background:
                    "url(https://www.freepnglogos.com/uploads/youtube-video-logo-png-4.png) no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "center",
                }}
            ></Box>
            </Grid>
            <Grid xs={10}>
            <Paper
                component="form"
                sx={{ display: "flex", alignItems: "center" }}
            >
                <InputBase onChange={(e)=>onChange(e.currentTarget.value)} sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
                </IconButton>
            </Paper>
            </Grid>
        </Grid>
    )
}

export default SearchBar;