type TAppHeader = {
  step: number;
  totalSteps: number;
}

const AppHeader = ({ step, totalSteps }: TAppHeader) => {
  return (
    <header className="app-header">
      <h4>
        {`Step ${step} of ${totalSteps}`}
      </h4>
      <ul className="stepper">
        {Array.apply(null, Array(totalSteps)).map((e, i) =>
          <li key={i} className={step >= (i+1) ? "active" : ""}></li>
        )}
      </ul>
    </header>
  );
}

export default AppHeader;