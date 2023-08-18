import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:566,width:944/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/VbIui0DgTzmz8uzmZmqK);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #000000;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3"> TopicTales </Typography>
        <Text variant="h5">
            A MERN stack website used to create blogs on different topics. <br/>
            I am available for freelance work. 
            For collaboration on any project you can sent a mail at {" "}{" "}

            <Link
            href="mailto:junaid.iiitk@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email /> 
          </Link>
        {/* <Text variant="h5">
          
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/kunaltyagi9"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Text> */}
        
          {/* Need something built or simply want to have chat? Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/codeforinterview/"
              color="inherit"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Box>
          or send me an Email
          <Link
            href="mailto:codeforinterview@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email /> 
          </Link>*/}
          
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
