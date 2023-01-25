import { FormattedMessage } from "react-intl";
import Dropdown from "react-dropdown";
import NavigationButtons from "./NavigationButtons";
import FormHeader from "./FormHeader";

type TStepThree = {
  onClickNextStep: (n: number) => void;
}

const StepThree = ({ onClickNextStep }: TStepThree) => {
  return (
    <div>
      <FormHeader />
      <div>
        <label htmlFor="buildtype">
          <FormattedMessage id="app.body.information.type.label" />
        </label>
        <Dropdown options={['one', 'two', 'three']} />
        <small>
          <FormattedMessage id="app.body.information.type.helper" />
        </small>
      </div>
      <NavigationButtons
        onClickNextButton={() => onClickNextStep(1)}
        onClickPrevButton={() => onClickNextStep(2)}
      />
    </div>
  );
}

export default StepThree;