import { BtnList,BtnItem,Btn } from "./Feedback.styled";
import PropTypes from "prop-types";


export const FeedbackOptions = ({ options, onFeedClick}) => {
  return (
    <BtnList>
      {options.map((option) =>{
        return (
          <BtnItem key={option}>
            <Btn onClick={() => onFeedClick(option)} type="button">{option.charAt(0).toUpperCase()+option.slice(1) }
            </Btn>
          </BtnItem>
        );
      })}
   </BtnList>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedClick:PropTypes.func.isRequired,
  }