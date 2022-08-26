import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const Category = ({ quizQuestions, activeStep }) => {
    Category.propTypes = {
        quizQuestions: PropTypes.array.isRequired,
        activeStep: PropTypes.number.isRequired
    };

    return (
        <Typography>{quizQuestions?.[activeStep]?.category}</Typography>
    );
};

export default Category;