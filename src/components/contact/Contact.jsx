
import { Box, styled, Typography, Link } from '@mui/material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://i.pinimg.com/originals/18/40/62/1840622c9b594ca0e7f67000b313cd53.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #000000;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Feel Free to contact me </Typography>    
                <Text variant="h5">
                    Reach out to me on{ "  "}
                    <Link href="https://www.instagram.com/mohd___junaid_/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    { "  "}or send me an Email { "  "}
                    <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>
                    { "  "}  or connect on LinedIn { "  "}
                    <Link href="https://www.linkedin.com/in/junaid001/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;