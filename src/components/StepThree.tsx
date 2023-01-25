import { FormattedMessage } from "react-intl";
import Dropdown from "react-dropdown";
import NavigationButtons from "./NavigationButtons";
import FormHeader from "./FormHeader";

type TStepThree = {
  onClickNextStep: (n: number) => void;
}

const StepThree = ({ onClickNextStep }: TStepThree) => {
  const options = [
    { value: 'home-garage', label: 'Home (garage)' },
    { value: 'small-office', label: 'Small Office' },
    { value: 'large-office', label: 'Large Office' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'depot', label: 'Depot' },
    { value: 'school', label: 'School' },
    { value: 'apartment-building', label: 'Apartment Building' },
  ];

  return (
    <div>
      <FormHeader />
      <div className="app-dropdown-field">
        <label htmlFor="buildtype">
          <FormattedMessage id="app.body.information.type.label" />
        </label>
        <Dropdown options={options} placeholder="Select an option" />
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