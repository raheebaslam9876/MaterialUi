import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
    return (
        <Box bgcolor={'yellow'} flex={1} sx={{ display: { xs: 'none', sm: 'block' } }} p={2}>Sidebar</Box>
    )
}

export default Sidebar