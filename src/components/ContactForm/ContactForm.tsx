import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
       await axios.post(
        "http://52.65.35.114:4002/submit-message",
        { message }
      );
  
      setMessageSent(true);
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <div className="col-md-6 col-lg-5 col-xl-6 mb-md-6 mb-4">
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
          {messageSent && (
            <div className="mt-3 text-success">Message sent successfully!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
