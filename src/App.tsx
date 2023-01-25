import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import AppHeader from './components/AppHeader';

// TODO: use the URL path to check the current
// step when the component is mounted on useEffect it's a good idea?

// TODO: Add a layout for the FormHeader and NavigationButtons since its
// the same structure of components. Only the form change beetwen input and dropdown

function App() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const totalSteps = 3;

  const onChangeStep = (n: number) => {
    setStep(n);
    navigate(`/${n}`);
  }

  return (
    <div>
      <AppHeader step={step} totalSteps={totalSteps} />
      <Routes>
        <Route path="/" element={<Navigate to="/1" />}  />
        <Route path="/1" element={<StepOne onClickNextStep={onChangeStep} />}/>
        <Route path="/2" element={<StepTwo onClickNextStep={onChangeStep} />} />
        <Route path="/3" element={<StepThree onClickNextStep={onChangeStep} />} />
        <Route path="*" element={<Navigate to="/1" />}/>
      </Routes>
    </div>
  );
}

export default App;
