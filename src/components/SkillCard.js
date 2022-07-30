import { Box, Text } from "@chakra-ui/react";
import DevIcon from 'devicon-react-svg';

export default function SkillCard({ icon, title, description }) {
    const devIconStyle = {
        fill: "#fff",
        width: "32px",
    };

    return (
        <Box  data-aos="zoom-in" shadow={'md'} bg='white' padding={8} borderRadius={8}>
            <Box bg={'primary.800'} display='inline-block' borderRadius={'32px'} p={3}>

           <DevIcon icon={icon} style={devIconStyle} />
          
            </Box>
            <Text fontSize={'24px'} color={'primary.800'} fontWeight='bold'>
                {title}
            </Text>
            <Text fontSize={'15px'} color={'gray.500'}>
                {description}
            </Text>
        </Box>
    );
}