// import emailjs from "emailjs-com";
import "./IletisimDesktop.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./contactAnm";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function IletisimComponentDesktop() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  /*function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ih46s2",
        "template_7y8bzgk",
        e.target,
        "user_Sw7iCTZasWjkASkWLAs3s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  }*/
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <div className="momDivContectDesktop">
      <div className="cerceve">
        <h1 id="iletisim">İLETİŞİM</h1>
        <p id="aciklama">
          Bizimle iletişime geçmek için
          <Mailto email="info@resumeshiners.com">
            <label className="resumeMail"> info@resumeshiners.com </label>
          </Mailto>{" "}
          adresine mail atabilirsiniz. Bilgilendirici yazılarımızdan,
          fırsatlarımızdan ve paketlerimizden haberdar olmak için aşağıdaki
          forma mail adresinizi bırakabilirsiniz.
          <div className="instagramIletisimDiv">
            <p id="aciklamaInsta">
              Ayrıca instagram hesabımızı da ziyaret edebilirsiniz.
              <a
                href="https://instagram.com/resumeshiners?utm_medium=copy_link"
                className="iletisimSocial"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="instaBut"
                  size="1.5x"
                />
              </a>
              <br></br>
              <br></br>
              Adresimiz: vlkdjfgkljdfrgvfdlmvkldfkömvldfkövldkldfkgvlfkdlv??
            </p>
          </div>
        </p>
        <div className="animationIletisimDesktop">
          <Lottie options={defaultOptions} height={400} width={350} />
        </div>

        <Box
          id="boxDesktop"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h2 id="iletisimHeader">İLETİŞİM FORMU</h2>
          <div className="input">
            <TextField
              fullWidth
              label="fullWidth"
              id="fullWidth"
              // id="standard-required"
              label="Adınızı ve Soyadınızı giriniz."
              variant="standard"
            />
          </div>
          <div className="input">
            <TextField
              fullWidth
              label="fullWidth"
              id="fullWidth"
              // id="standard-required"
              label="Email adresinizi giriniz."
              variant="standard"
            />
            <sub>ornek@ornek.com</sub>
          </div>
          <p id="kvkk">
            Formu gönderdiğiniz takdirde, KVKK Metnini onaylamış olacaksınız.
          </p>
          <input id="buton" type="submit" value="Gönder" />
        </Box>
      </div>
    </div>
  );
}