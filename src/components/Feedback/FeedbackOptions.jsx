import { BtnList,BtnItem,Btn } from "./Feedback.styled";

export const FeedbackOptions = ({ options, onFeedClick,name }) => {
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

