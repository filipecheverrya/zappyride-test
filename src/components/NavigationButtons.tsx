import { FormattedMessage } from "react-intl";

type TNavigationButtons = {
  onClickPrevButton: () => void;
  onClickNextButton: () => void;
  disableNextButton?: boolean;
};

const NavigationButtons = ({ onClickNextButton, onClickPrevButton, disableNextButton }: TNavigationButtons) => {
  return (
    <div className="app-navigation-buttons">
      <button type="button" className="btn-secondary" onClick={onClickPrevButton}>
        <FormattedMessage id="app.body.prev.button" />
      </button>
      <button type="button" className="btn-primary" onClick={onClickNextButton} disabled={disableNextButton}>
        <FormattedMessage id="app.body.next.button" />
      </button>
    </div>
  );
}

export default NavigationButtons;