import "./contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = () => {
    toast.success("Message envoyé !");
  };

  return (
    <main className="contact-page">
      <section className="location-section">
        <h2>LOCALISATION</h2>
        <p>
          <FaMapMarkerAlt style={{ fontSize: "1.4rem" }} />
          Nord
        </p>
      </section>

      <section className="contact-form-section">
        <h2>FORMULAIRE DE CONTACT</h2>

        <form
          action="https://formspree.io/f/mqalqzkr"
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_redirect"
            value="https://github.com/NabilY-5"
          />
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required />
          </div>

          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="sujet">Sujet</label>
            <input type="text" id="sujet" name="sujet" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={8} required />
          </div>

          <button type="submit" className="contact-submit-button">
            ENVOYER
          </button>
        </form>
      </section>

      <ToastContainer position="bottom-right" theme="light" autoClose={2000} />
    </main>
  );
};

export default Contact;
