

export default function PrayerRequestForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
   
    <form className="prayer-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First name" required />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last name" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email address" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Phone number" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="prayerType">Category</label>
          <select id="prayerType" name="prayerType">
            <option value="">Select a category</option>
            <option value="healing">Healing</option>
            <option value="family">Family</option>
            <option value="finances">Finances</option>
            <option value="relationships">Relationships</option>
            <option value="spiritual">Spiritual Growth</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field form-field--checkbox">
          <label>
            <input type="checkbox" name="confidential" />
            Keep this request confidential
          </label>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="prayerRequest">Prayer Request</label>
        <textarea id="prayerRequest" name="prayerRequest" rows={5} placeholder="Share what's on your heart…" required />
      </div>

      <button type="submit">Submit Prayer Request</button>
    </form>
    
  );
}