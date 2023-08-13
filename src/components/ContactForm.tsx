import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://3.27.140.194:4002/submit-message', { message });
      console.log('Message sent successfully', response.data);
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-4 mb-4">
      <div className="p-4">
        <div className="mb-3">
          <h5 className="card-title">Reach Out to Me!!</h5>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control"
              id="textAreaExample"
              rows={4}
              placeholder="Enter your message here..."
              value={message}
              onChange={handleTextareaChange}
            ></textarea>
            <button type="submit" className="btn btn-primary mt-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
