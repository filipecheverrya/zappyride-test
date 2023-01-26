import { ChangeEvent, useState } from "react";
import { FormattedMessage } from "react-intl";
import FormHeader from "./FormHeader";
import NavigationButtons from "./NavigationButtons";

type TStepTwo = {
  onClickNextStep: (n: number) => void;
  formSubmit: (s: string) => void;
}

const StepTwo = ({ onClickNextStep, formSubmit }: TStepTwo) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const onChangeZipCodeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDisableButton(!event.target.value);
    formSubmit(event.target.value);
  };

  return (
    <div>
      <FormHeader />
      <div className="app-text-field">
        <label htmlFor="zipcode">
          <FormattedMessage id="app.body.information.zip.label" />
        </label>
        <input type="text" name="zipcode" id="zipcode" onChange={onChangeZipCodeInput} />
        <small>
          <FormattedMessage id="app.body.information.zip.helper" />
        </small>
      </div>
      <NavigationButtons
        onClickNextButton={() => onClickNextStep(3)}
        onClickPrevButton={() => onClickNextStep(1)}
        disableNextButton={disableButton}
      />
    </div>
  );
}

export default StepTwo;