import React from "react";
import PropTypes from "prop-types";
import { StatsArea,StatsText} from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, positivePercentage,total }) => {
  return <StatsArea >
        <StatsText >Good: {good}</StatsText>
        <StatsText >Neutral: {neutral}</StatsText>
      <StatsText >Bad: {bad}</StatsText>
      <StatsText>Total: { total}</StatsText>
        <StatsText>Positive: {positivePercentage}%</StatsText>
    </StatsArea>
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
      
}