import React, { useRef, useState } from "react";
import axios from "axios";
import "./styles.css";
import footer_img from "../../Assets/img/footer-image.svg";

export default function ContactForm() {
  const [Message, setMessage] = useState();
  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    return false;
  }
  function ValidatePhone(number) {
    if (/^[0-9-]*$/.test(number)) {
      return true;
    }
    return false;
  }

  function SubmitNewEmail() {
    console.log(NewEmailAdress.current.value);
    if (!ValidateEmail(NewEmailAdress.current.value)) {
      setMessage("please enter an email adress");
      document.getElementById("lds-ring-id").style.display = "none";
    } else if (!ValidatePhone(NewPhoneNumber.current.value)) {
      setMessage("please enter a valid number");
      document.getElementById("lds-ring-id").style.display = "none";
    } else if (
      NewEmailAdress.current.value &&
      NewPhoneNumber.current.value &&
      NewName.current.value
    ) {
      document.getElementById("lds-ring-id").style.display = "inline-block";
      axios
        .post("/save_email", {
          email_adress: NewEmailAdress.current.value,
          phone_number: NewPhoneNumber.current.value,
          name: NewName.current.value,
        })
        .then((res) => {
          console.log(res);
          setMessage("Thank you!");
          document.getElementById("lds-ring-id").style.display = "none";
        })
        .catch((e) =>
          setMessage("oops something went wrong please try again...")
        );
    }
  }

  const NewEmailAdress = useRef();
  const NewName = useRef();
  const NewPhoneNumber = useRef();

  return (
    <>
      <div className="contact-form-main-container" data-aos="fade-up">
        <h4 className="service-provide-span">
          Would you like us to contact you? <br></br> leave us some details, we
          will get back to you as soon as possible
        </h4>
        <section>
          <label>Name</label>
          <input ref={NewName} type="text" placeholder="*name"></input>
          <label>Email</label>
          <input ref={NewEmailAdress} type="email" placeholder="*email"></input>
          <label>Phone</label>
          <input ref={NewPhoneNumber} type="text" placeholder="*phone"></input>
          <button action="#" onClick={SubmitNewEmail}>
            Submit
          </button>
          <div id="lds-ring-id" className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p id="form-response-message">{Message}</p>
        </section>
      </div>

      <img src={footer_img} className="footer-img" alt="footer-img"></img>
    </>
  );
}
