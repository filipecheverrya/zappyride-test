import { FormattedMessage } from "react-intl";

import carSVG from "../assets/car.svg";
import orgSVG from "../assets/organization.svg";
import graphSVG from "../assets/graph.svg";

type TStepOne = {
  onClickNextStep: (n: number) => void;
}

const StepOne = ({ onClickNextStep }: TStepOne) => {
  const pillars: Array<{
    key: string;
    alt: string;
    icon: string;
  }> = [
    {
      key: "app.body.pillar.org",
      alt: "Icon representing the organization",
      icon: orgSVG,
    },
    {
      key: "app.body.pillar.car",
      alt: "Icon representing the vehicle",
      icon: carSVG,
    },
    {
      key: "app.body.pillar.save",
      alt: "Icon representing the graphic",
      icon: graphSVG,
    }
  ];

  return (
    <div>
      <h1>
        <FormattedMessage id="app.header.title" />
      </h1>
      <p>
        <FormattedMessage id="app.header.subtitle" />
      </p>
      <ul className="pillar-list">
        {pillars.map((e, i) =>
          <li key={i}>
            <span>
              <img src={e.icon} alt={e.alt} />
            </span>
            <p>
              <FormattedMessage id={e.key} />
            </p>
          </li>
        )}
      </ul>
      <button type="button" className="btn-primary" onClick={() => onClickNextStep(2)}>
        <FormattedMessage id="app.body.button" />
      </button>
    </div>
  );
}

export default StepOne;
