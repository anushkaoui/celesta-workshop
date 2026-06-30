import { useEffect, useState } from 'react';

export default function PaymentSimulator({ finalAmount, onPaymentSuccess }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Increment loading message statuses
        const interval = setInterval(() => {
            setProgress((p) => (p < 3 ? p + 1 : p));
        }, 900);

        // Simulate completion return at 3 seconds
        const gatewayTimeout = setTimeout(() => {
            const mockId = `WS2026-${Math.floor(10000 + Math.random() * 90000)}`;
            onPaymentSuccess(mockId);
        }, 3200);

        return () => {
            clearInterval(interval);
            clearTimeout(gatewayTimeout);
        };
    }, [onPaymentSuccess]);

    const messages = [
        "Contacting node payment processing servers...",
        "Verifying ledger balance and validation keys...",
        "Securing token handshake confirmations...",
        "Success! Finalizing record entries..."
    ];

    return (
        <div style={{ border: '1px solid #e2e8f0', padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div className="spinner-box" style={{ margin: '0 auto 1.5rem auto', width: '45px', height: '45px', border: '4px solid #f3f3f3', borderTop: '4px solid #2563eb', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Processing ₹{finalAmount}</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', minHeight: '1.5rem' }}>{messages[progress]}</p>

            {/* Dynamic Keyframes injected right into runtime header inside JSX */}
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}