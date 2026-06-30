export default function RegistrationForm({ formData, setFormData, validations }) {
    const { isEmailValid, isMobileValid } = validations;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div style={{ border: '1px solid #e2e8f0', padding: '2rem', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '700', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>1. Personal & Academic Details</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.9rem' }}>Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Name" style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.9rem' }}>
                            Email Address * {formData.email && (isEmailValid ? <span style={{ color: '#16a34a' }}>✓</span> : <span style={{ color: '#dc2626', fontSize: '0.8rem' }}>(Invalid)</span>)}
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="xyz@iitp.ac.in" style={{ width: '100%', padding: '0.6rem', border: `1px solid ${formData.email ? (isEmailValid ? '#16a34a' : '#dc2626') : '#cbd5e1'}`, borderRadius: '6px', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.9rem' }}>
                            Mobile Number * {formData.mobile && (isMobileValid ? <span style={{ color: '#16a34a' }}>✓</span> : <span style={{ color: '#dc2626', fontSize: '0.8rem' }}>(10 digits)</span>)}
                        </label>
                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="9876543210" style={{ width: '100%', padding: '0.6rem', border: `1px solid ${formData.mobile ? (isMobileValid ? '#16a34a' : '#dc2626') : '#cbd5e1'}`, borderRadius: '6px', boxSizing: 'border-box' }} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.9rem' }}>Institute / College *</label>
                        <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="IIT Patna" style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.9rem' }}>City / State *</label>
                        <input type="text" name="cityState" value={formData.cityState} onChange={handleChange} placeholder="Patna, Bihar" style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.9rem' }}>Workshop Applying For *</label>
                    <select name="workshop" value={formData.workshop} onChange={handleChange} style={{ width: '100%', padding: '0.6rem', border: '1px solid #cbd5e1', borderRadius: '6px', backgroundColor: '#fff' }}>
                        <option value="">-- Choose a Technology track --</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Ethical Hacking">Ethical Hacking</option>
                        <option value="Drone Technology">Drone Technology</option>
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Arduino Course">Arduino Course</option>
                        <option value="Autonomous Robotics">Autonomous Robotics</option>
                        <option value="Generative AI">Generative AI</option>
                        <option value="Internet of Things">Internet of Things</option>
                    </select>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '0.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', fontSize: '0.9rem' }}>Are you an IIT Patna Student? *</label>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: formData.isIITP === 'yes' ? '0.75rem' : '0' }}>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <input type="radio" name="isIITP" value="yes" checked={formData.isIITP === 'yes'} onChange={handleChange} /> Yes, I am
                        </label>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <input type="radio" name="isIITP" value="no" checked={formData.isIITP === 'no'} onChange={handleChange} /> No, another college
                        </label>
                    </div>

                    {formData.isIITP === 'yes' && (
                        <div style={{ marginTop: '0.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: '600', fontSize: '0.85rem', color: '#1e3a8a' }}>Roll Number *</label>
                            <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="e.g., 2501es09" style={{ width: '100%', padding: '0.5rem', border: '1px solid #3b82f6', borderRadius: '6px', boxSizing: 'border-box', backgroundColor: '#fff' }} />
                        </div>
                    )}
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '700', fontSize: '0.9rem' }}>Accommodation</label>
                    {formData.isIITP === 'no' ? (
                        <div style={{ padding: '0.5rem 0' }}>
                            <span style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>Do you require accommodation on campus? (+₹500)</span>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <label style={{ cursor: 'pointer' }}><input type="radio" name="requireAccommodation" value="yes" checked={formData.requireAccommodation === 'yes'} onChange={handleChange} /> Yes</label>
                                <label style={{ cursor: 'pointer' }}><input type="radio" name="requireAccommodation" value="no" checked={formData.requireAccommodation === 'no'} onChange={handleChange} /> No</label>
                            </div>
                        </div>
                    ) : formData.isIITP === 'yes' ? (
                        <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '6px', color: '#1e40af', fontSize: '0.85rem', fontWeight: '500' }}>
                            ℹ Not Required (IIT Patna students receive automatic campus access)
                        </div>
                    ) : (
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>Please specify IIT Patna status to check housing configurations.</span>
                    )}
                </div>

            </div>
        </div>
    );
}
