import { React, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from '@mui/material';
import { Block } from '@mui/icons-material';
const useStyles = makeStyles({
    btn: {
        fontsize: 30,
        bgColor: 'red'
    }
})
const Test = () => {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && detail) {
            console.log(title, detail)
        }
    }
    const classes = useStyles;
    return (
        <div>
            <Container>
                <Typography
                    variant='h6'
                    color="textsecondary"
                    gutterBottom
                    component="h2"
                >
                    Hello world
                </Typography>

                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <TextField
                        onChange={(e) => setTitle(e.target.value)}
                        variant='outlined'
                        label="Enter Text"
                        color='secondary'
                        fullWidth
                        required
                        sx={{ marginBottom: 5, display: "block" }}
                    />
                    <TextField
                        onChange={(e) => setDetail(e.target.value)}
                        variant='outlined'
                        label="Details"
                        color='secondary'
                        fullWidth
                        required
                        multiline
                        rows={4}
                        sx={{ marginBottom: 5, display: "block" }}
                    />
                    <Button
                        // sx={{ background: "red", '&:hover': { background: "green" } }}
                        type='submit'
                        className={classes.btn}
                        variant="outlined"
                        color='primary'
                        startIcon={<SendIcon />}
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        Submit
                    </Button>
                </form>

            </Container>
        </div>
    )
}

export default Test