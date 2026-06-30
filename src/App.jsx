import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FeeCalculator from './components/FeeCalculator';
import PaymentSimulator from './components/PaymentSimulator';
import Confirmation from './components/Confirmation';

export default function App() {
  // PHASE 1: Form State
  const [currentStep, setCurrentStep] = useState(1); // 1: Form/Calc, 2: Gateway, 3: Ticket Receipt
  const [registrationId, setRegistrationId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    college: '',
    cityState: '',
    workshop: '',
    isIITP: null, // 'yes' or 'no'
    rollNumber: '',
    requireAccommodation: 'no'
  });

  // PHASE 2: Live Fee Calculator (Pure Derived State)
  const BASE_FEE = 1200;
  const isIITPStudent = formData.isIITP === 'yes';

  const discount = isIITPStudent ? 400 : 0; // ₹400 discount for IITP
  const accommodationFee = (!isIITPStudent && formData.requireAccommodation === 'yes') ? 500 : 0; // ₹500 for stay
  const subtotal = BASE_FEE - discount + accommodationFee;
  const gst = Math.round(subtotal * 0.18); // 18% GST
  const finalAmount = subtotal + gst;

  const feeSummary = { baseFee: BASE_FEE, discount, accommodationFee, gst, finalAmount };

  // PHASE 3: Strict Validation Logic
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isMobileValid = /^\d{10}$/.test(formData.mobile);
  const isRollValid = !isIITPStudent || formData.rollNumber.trim() !== '';

  const isFormValid =
    formData.fullName.trim() !== '' &&
    isEmailValid &&
    isMobileValid &&
    formData.college.trim() !== '' &&
    formData.cityState.trim() !== '' &&
    formData.workshop !== '' &&
    formData.isIITP !== null &&
    isRollValid;

  // PHASE 4: Payment Bridge Handshake
  const handlePaymentSuccess = (generatedId) => {
    setRegistrationId(generatedId);
    setCurrentStep(3); // Route straight to Phase 5
  };

  return (
    <div style={{ maxWidth: '750px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>Celesta 2026</h1>
        <p style={{ color: '#64748b', margin: 0, fontSize: '1.1rem' }}> Workshop Registration</p>
      </header>

      <main>
        {/* PHASE 1 & 2: Form Input View with Live Sidecar Calculator */}
        {currentStep === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <RegistrationForm formData={formData} setFormData={setFormData} validations={{ isEmailValid, isMobileValid }} />
            <FeeCalculator formData={formData} feeSummary={feeSummary} />

            <button
              disabled={!isFormValid}
              onClick={() => setCurrentStep(2)}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                backgroundColor: isFormValid ? '#2563eb' : '#cbd5e1',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: isFormValid ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s ease',
                boxShadow: isFormValid ? '0 4px 6px -1px rgba(37, 99, 235, 0.2)' : 'none'
              }}
            >
              {isFormValid ? `Pay ₹${finalAmount} & Complete Registration` : 'Please Fill All Required Fields'}
            </button>
          </div>
        )}

        {/* PHASE 4: Live Simulated Processing Gateway */}
        {currentStep === 2 && (
          <PaymentSimulator finalAmount={finalAmount} onPaymentSuccess={handlePaymentSuccess} />
        )}

        {/* PHASE 5: Receipt Confirmation Panel */}
        {currentStep === 3 && (
          <Confirmation registrationId={registrationId} formData={formData} feeSummary={feeSummary} />
        )}
      </main>
    </div>
  );
}
