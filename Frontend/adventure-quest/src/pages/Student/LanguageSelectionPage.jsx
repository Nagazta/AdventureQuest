import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSelectionCard from '../../components/language/LanguageSelectionCard';
import ErrorNotification from '../../components/ErrorNotification';
import IllustrationPanel from '../../components/language/IllustrationPanel'
import Button from '../../components/Button';
import '../student/styles/LanguageSelectionPage.css'


const LanguageSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [error, setError] = useState(null);
  
  const handleBack = () => {
    navigate("/dashboard")
    // Add your navigation logic here
  };
  
  const handleNext = async () => {
    try {
      // Simulate API call to save language preference
      const response = await fetch('/api/save-language', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: selectedLanguage })
      });
      
      if (!response.ok) {
        throw new Error('Failed to save language preference');
      }
      
      console.log('Language saved:', selectedLanguage);
      // Navigate to next screen (Save Progress Detection)
      
    } catch (err) {
      setError('Your language preference could not be saved. A session default will be used temporarily.');
      console.error('Error saving language:', err);
    }
  };
  
  return (
    <>
      <div className="language-selection-page">
        <div className="back-button">
          <Button onClick={handleBack} variant="back" className='back-button language'>
            ← Back
          </Button>
        </div>
        
        <div className="content-container">
          <LanguageSelectionCard 
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            onNext={handleNext}
          />
          <IllustrationPanel />
        </div>
        
        <ErrorNotification 
          message={error}
          onClose={() => setError(null)}
        />
      </div>
    </>
  );
};

export default LanguageSelectionPage;