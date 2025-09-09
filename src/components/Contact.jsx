const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
      alert("Thanks! I will reach out soon.");
  };
  return (
    <div className="section">
      <h1>Contact</h1>
      <form className="form" onSubmit={onSubmit}>
        <input placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows="5" required />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
