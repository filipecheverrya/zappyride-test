import { FormattedMessage } from "react-intl";

type TNavigationButtons = {
  onClickPrevButton: () => void;
  onClickNextButton: () => void
};

const NavigationButtons = ({ onClickNextButton, onClickPrevButton }: TNavigationButtons) => {
  return (
    <div className="app-navigation-buttons">
      <button type="button" className="btn-secondary" onClick={onClickPrevButton}>
        <FormattedMessage id="app.body.prev.button" />
      </button>
      <button type="button" className="btn-primary" onClick={onClickNextButton}>
        <FormattedMessage id="app.body.next.button" />
      </button>
    </div>
  );
}

export default NavigationButtons;