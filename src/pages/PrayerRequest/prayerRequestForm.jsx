

export default function PrayerRequestForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
   
    <form className="prayer-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">First Name ( पहला नाम )</label>
          <input type="text" id="firstName" name="firstName"  required />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name ( अंतिम नाम )</label>
          <input type="text" id="lastName" name="lastName"  />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="gender">Gender ( लिंग )</label>
         <select id="genderType" name="genderType">
            <option value="">Select </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
         <div className="form-field">
          <label htmlFor="lastName">Last Name ( अंतिम नाम )</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
      </div>

      <div className="form-row">
         <div className="form-field">
          <label htmlFor="age">Age ( आयु )</label>
          <input type="text" id="age" name="age"  />
        </div>
        <div className="form-field">
          <label htmlFor="nationality">Nationality ( राष्ट्रीयता )</label>
          <input type="text" id="nationality" name="nationality"  />
        </div>
      </div>
         <div className="form-row">
         <div className="form-field">
          <label htmlFor="profession">Profession ( व्यवसाय )</label>
          <input type="text" id="profession" name="profession"  />
        </div>
        <div className="form-field">
          <label htmlFor="email">Your Email ( ईमेल )</label>
          <input type="email" id="email" name="email"  />
        </div>
      </div>

       <div className="form-row">
         <div className="form-field">
          <label htmlFor="phone">Phone ( फ़ोन )</label>
          <input type="text" id="phone" name="phone"  />
        </div>
        <div className="form-field">
          <label htmlFor="relativesname">Relatives Name ( रिश्तेदार का नाम )</label>
          <input type="text" id="relativesname" name="relativesname"  />
        </div>
      </div>


       <div className="form-row">
         <div className="form-field">
          <label htmlFor="relativesphone">Relatives Phone ( रिश्तेदार का फोन )</label>
          <input type="text" id="relativesphone" name="relativesphone"  />
        </div>
        <div className="form-field">
          <label htmlFor="relativesemail">Relatives Email ( रिश्तेदार का ईमेल )</label>
          <input type="email" id="relativesemail" name="relativesemail"  />
        </div>
      </div>


      <div className="form-row">
         <div className="form-field">
          <label htmlFor="sickness">Are you having any sickness?</label>
           <select id="sicknessType" name="sicknessType">
            <option value="">Select </option>
            <option value="healing">Healing</option>
            <option value="family">Family</option>
            <option value="finances">Finances</option>
            <option value="relationships">Relationships</option>
            <option value="spiritual">Spiritual Growth</option>
            <option value="other">Other</option>
          </select>
          
        </div>
        <div className="form-field">
          <label htmlFor="relativesemail">Relative's Email</label>
          <input type="email" id="relativesemail" name="relativesemail" />
        </div>
      </div>

      

    

      <div className="form-field">
        <label htmlFor="address">Address ( पता )</label>
        <textarea id="address" name="address" rows={5} required />
      </div>

       <div className="form-field">
        <label htmlFor="problem">Please state the nature of the problem you are having and all the symptoms. Please specify in detail ( कृपया आपको होने वाली समस्या और सभी लक्षणों की प्रकृति
के बारे में बताएं। कृपया विस्तार से बताएं )</label>
        <textarea id="problem" name="problem" rows={5} required />
      </div>


       <div className="form-field">
        <label htmlFor="duration">For how long have you been experiencing this problem?
( आप कब से इस समस्या का सामना कर रहे हैं? )</label>
        <textarea id="duration" name="duration" rows={5} required />
      </div>


      <div className="form-field">
        <label htmlFor="medications">List all the medications you are taking, have taken due to this problem/condition (इस समस्या / स्थिति के 
कारण आपके द्वारा ली जा रही सभी दवाओं की सूची बनाएं )</label>
        <textarea id="medications" name="medications" rows={5} required />
      </div>

           <div className="form-field">
        <label htmlFor="living">How has the problem, condition affected your daily living? 
(समस्या / स्थिति ने आपके दैनिक जीवन को कैसे प्रभावित किया है? )</label>
        <textarea id="living" name="living" rows={5} required />
      </div>


      <div className="form-field">
        <label htmlFor="hospitalized">Have you ever been hospitalized? If so when?
( क्या आप कभी अस्पताल में भर्ती हुए हैं? अगर ऐसा हैं तोह कब? )</label>
        <textarea id="hospitalized" name="hospitalized" rows={5} required />
      </div>
   

       <div className="form-field">
          <label htmlFor="brace">Are you using any form of brace? (क्या आप ब्रेस के किसी भी रूप का उपयोग कर रहे हैं? )</label>
          <select id="brace" name="brace">
            <option value="">Select </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

       <div className="form-field">
          <label htmlFor="walkingAid">Are you using any form of walking aid (crutch, stick, etc.) or wheelchair? 
( क्या आप पैदल चलने की सहायता (बैसाखी, छड़ी आदि) या व्हीलचेयर के किसी भी रूप का उपयोग कर रहे हैं? )</label>
          <select id="walkingAid" name="walkingAid">
            <option value="">Select </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

       <div className="form-field">
          <label htmlFor="medicalDevice"> Are you using any medical device to support your health condition?
( क्या आप अपनी स्वास्थ्य स्थिति का समर्थन करने के लिए किसी चिकित्सा उपकरण का उपयोग कर रहे हैं? )</label>
          <select id="medicalDevice" name="medicalDevice">
            <option value="">Select </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>


       <div className="form-field">
        <label htmlFor="photograph">Your current Full Photograph* ( आपकी वर्तमान की पुरी फ़ोटोग्राफ़)</label>
        <div className="photo-upload" onClick={() => document.getElementById('photograph').click()}>
          <input type="file" id="photograph" name="photograph" accept="image/*" required style={{ display: 'none' }} />
          <img src="/img/Icon.png" alt="Upload Icon" style={{ width: '24px', height: '24px' }} />
          <span>Browse and chose the files you want to upload from your Device</span>
          <img src="/img/CTA.png" alt="Upload" style={{ Width: '32px', height: '32px', objectFit: 'contain' }} />
        </div>
      </div>
       <div className="form-field">
          <label htmlFor="dailyActivities">Do you still go about your daily activities normally without using any aids or assistance from other people?
( क्या आप अभी भी अन्य लोगों से किसी भी सहायता या सहायता का उपयोग किए बिना अपनी दैनिक गतिविधियों के बारे में सामान्य रूप से जाते हैं? )</label>
          <select id="dailyActivities" name="dailyActivities">
            <option value="">Select </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>


       <div className="form-field">
          <label htmlFor="surgery">Have you had any surgery or other therapy as a result of the problem/condition? If so, please give details. 
(क्या आपने समस्या / स्थिति के परिणामस्वरूप कोई सर्जरी या अन्य उपचार किया है? यदि हां, तो जानकारी दें। )</label>
          <input type="text" id="surgery" name="surgery"  />
        </div>

       <div className="form-field">
          <label htmlFor="source">How did you hear about us?
( आपको हमारे बारे में कैसे पता चला ?)</label>
          <input type="text" id="source" name="source"  />
        </div>

       <div className="form-field">
          <label htmlFor="comments">Comments
( टिप्पणियाँ )</label>
           <input type="text" id="comments" name="comments" style={{ height: '118px' }} />
        </div>





     


      <button type="submit">Submit Prayer Request</button>
    </form>
    
  );
}