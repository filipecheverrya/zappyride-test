import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import AppHeader from './components/AppHeader';
import CardLayout from './components/CardLayout';

// TODO: Add a layout for the FormHeader and NavigationButtons since its
// the same structure of components. Only the form change beetwen input and dropdown

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<number>(1);
  const totalSteps = 3;

  useEffect(() => {
    setStep(Number(location.pathname.replace('/', '')) ?? 1);
  }, [location]);

  const onChangeStep = (n: number) => {
    setStep(n);
    navigate(`/${n}`);
  }

  return (
    <div>
      <div className="app-header-block"></div>
      <AppHeader step={step} totalSteps={totalSteps} />
      <Routes>
        <Route path="/" element={<Navigate to="/1" />}  />
        <Route path="/1" element={
          <CardLayout>
            <StepOne onClickNextStep={onChangeStep} />
          </CardLayout>
        }/>
        <Route path="/2" element={
          <CardLayout>
            <StepTwo onClickNextStep={onChangeStep} />
          </CardLayout>
        }/>
        <Route path="/3" element={
          <CardLayout>
            <StepThree onClickNextStep={onChangeStep} />
          </CardLayout>
        }/>
        <Route path="*" element={<Navigate to="/1" />}/>
      </Routes>
    </div>
  );
}

export default App;
