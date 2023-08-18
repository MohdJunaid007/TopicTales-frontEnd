
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://media.istockphoto.com/id/1209030907/vector/abstract-triangular-background.jpg?s=612x612&w=0&k=20&c=WL6sXFy_wr1z7Yk_lPbJ2Zhd2EjoM1eomgCN8C05Q6U=) ;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>TopicTales</Heading>
            <br/>
            <SubHeading>Dive into the Ocean of Expertise</SubHeading>
        </Image>
    )
}

export default Banner;