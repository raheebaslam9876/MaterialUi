
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import theme from '../theme'
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
    marginLeft: 'auto',
    marginRight: '20px',
    backgroundColor: "black",
    padding: "0 10px",
    border: '1px solid #A020F0',
    borderRadius: theme.shape.borderRadius,
    width: "8%",
    height: '20px'
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))
const TextTypo = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '80px',
    alignItems: 'center'
}))
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: "0 2px ",
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}))

function Navbar() {
    return (
        // sx={{ bgcolor: 'black', height: '40px' }}
        <AppBar position='sticky' sx={{ bgcolor: 'black' }}>
            <StyledToolbar>
                <TextTypo>
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Home
                    </Typography>
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Wallet
                    </Typography>
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Marketplace
                    </Typography>
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        News
                    </Typography>
                </TextTypo>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search>
                    <SearchIcon sx={{ height: '18px', padding: '3px' }} />
                </Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications color="white" />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ height: '28px', width: '28px' }} />
                </Icons>
                <UserBox>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ height: '28px', width: '28px' }} />

                </UserBox>
            </StyledToolbar>
        </AppBar >
    )
}

export default Navbar