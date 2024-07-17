import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  console.log();

  useEffect(() => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
      const formData = new FormData(form);
      e.preventDefault();

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
          } else {
            console.log(response);
            result.innerHTML = json.message;
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 3000);
        });
    });
  }, []);

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">{t("contact.title")}</h1>
      <form id="form" action="">
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env["VITE_FORM_KEY"]}
        />
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("contact.name")}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder={t("contact.email")}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder={t("contact.message")}
            required
          />
        </div>
        <input
          type="submit"
          value={t("contact.button")}
          className="hover btn"
        />
        <div id="result" className={styles.result}></div>
      </form>
    </section>
  );
};

export default Contact;
