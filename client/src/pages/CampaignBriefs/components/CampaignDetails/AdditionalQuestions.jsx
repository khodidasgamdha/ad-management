import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import InputBox from "../../../../components/InputBox";
import { ADDITIONAL_QUESTIONS } from "../../../../constant";

const AdditionalQuestions = ({ ...props }) => {
    return (
        <Box bg="green.50" p={4}>
            <Heading fontSize="md" mb={4} color="green.500">
                Additional Questions
            </Heading>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                {ADDITIONAL_QUESTIONS.map((question) => (
                    <GridItem colSpan={6} key={question.id}>
                        <InputBox name={question.name} label={question.label} />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default AdditionalQuestions;
