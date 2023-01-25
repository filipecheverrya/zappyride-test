import { FormattedMessage } from "react-intl";
import FormHeader from "./FormHeader";
import NavigationButtons from "./NavigationButtons";

type TStepTwo = {
  onClickNextStep: (n: number) => void;
}

const StepTwo = ({ onClickNextStep }: TStepTwo) => {
  return (
    <div>
      <FormHeader />
      <div className="app-text-field">
        <label htmlFor="zipcode">
          <FormattedMessage id="app.body.information.zip.label" />
        </label>
        <input type="text" name="zipcode" id="zipcode" />
        <small>
          <FormattedMessage id="app.body.information.zip.helper" />
        </small>
      </div>
      <NavigationButtons
        onClickNextButton={() => onClickNextStep(3)}
        onClickPrevButton={() => onClickNextStep(1)}
      />
    </div>
  );
}

export default StepTwo;