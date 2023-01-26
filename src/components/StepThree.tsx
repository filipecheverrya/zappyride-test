import { FormattedMessage } from "react-intl";
import Dropdown, { Option as IDropdownOption } from "react-dropdown";
import NavigationButtons from "./NavigationButtons";
import FormHeader from "./FormHeader";
import { useState } from "react";

type TStepThree = {
  onClickNextStep: (n: number) => void;
  formSubmit: (s: string) => void;
}

const StepThree = ({ onClickNextStep, formSubmit }: TStepThree) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const options = [
    { value: 'home-garage', label: 'Home (garage)' },
    { value: 'small-office', label: 'Small Office' },
    { value: 'large-office', label: 'Large Office' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'depot', label: 'Depot' },
    { value: 'school', label: 'School' },
    { value: 'apartment-building', label: 'Apartment Building' },
  ];

  const onChangeDropdown = (event: IDropdownOption) => {
    setDisableButton(!event.value);
    formSubmit(event.value);
  }

  return (
    <div>
      <FormHeader />
      <div className="app-dropdown-field">
        <label htmlFor="buildtype">
          <FormattedMessage id="app.body.information.type.label" />
        </label>
        <Dropdown options={options} placeholder="Select an option" onChange={onChangeDropdown} />
        <small>
          <FormattedMessage id="app.body.information.type.helper" />
        </small>
      </div>
      <NavigationButtons
        onClickNextButton={() => onClickNextStep(1)}
        onClickPrevButton={() => onClickNextStep(2)}
        disableNextButton={disableButton}
      />
    </div>
  );
}

export default StepThree;