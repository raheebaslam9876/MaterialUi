import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
    return (
        <Box bgcolor={'red'} flex={2} sx={{ display: { xs: 'none', sm: 'block' } }} p={2}>Rightbar</Box>
    )
}

export default Rightbar