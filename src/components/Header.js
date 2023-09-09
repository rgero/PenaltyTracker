import { AppBar, Typography } from "@mui/material"

const Header = () => {
    const style = {
        marginLeft: 10,
        paddingTop: 1,
        paddingBottom: 1 
    }
    
    return (
        <AppBar position="static">
            <Typography variant="h4" color="inherit" sx={style}>
                The Penalty Tracker
            </Typography>
        </AppBar>
    )


}

export default Header;