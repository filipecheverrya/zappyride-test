import { FormattedMessage } from "react-intl";

const FormHeader = () => {
  return (
    <header>
      <h1>
        <FormattedMessage id="app.header.information.title" />
      </h1>
      <p>
        <FormattedMessage id="app.header.information.subtitle" />
      </p>
    </header>
  );
}

export default FormHeader;