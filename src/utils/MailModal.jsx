import MailchimpSubscribe from "react-mailchimp-subscribe";
import { BsArrowRight } from "react-icons/bs";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };


    if (status === "success") {
        
    }

  return (
    <>
      <form
        style={{
          borderRadius: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          position: "relative"
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          style={{ width: "100%", borderRadius: "10px" }}
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          value={email}
          placeholder="Enter your email address"
          isRequired
        />
        {status === "error" && (
        <div
        style={{color: "black"}}
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <h3 style={{color: "green", display: "flex", alignSelf: "center"}}>{status === "success" ? "Success!" : null}</h3>
      )}
        <button
          type="submit"
          formValues={[email]}
          style={{ marginLeft: "auto", color: "black", padding: "10px", fontSize: "16pt" }}
        >
          <BsArrowRight />
        </button>
      </form>
      
      
    </>
  );
};

const MailModal = () => {
  const theme = useTheme();
  const mailchimpURL =
    "https://xyz.us17.list-manage.com/subscribe/post?u=54af6646f38c112ee787028bd&amp;id=d946eb9dbf&amp;f_id=00924fe0f0";
  return (
    <Box
      className="rounded-md"
      sx={{
        background: "white",
        marginTop: "24px",
        marginBottom: "30px",
        margin: "auto",
        width: "40%",
        maxWidth: "600px",
        [theme.breakpoints.down("lg")]: {
          width: "50%",
          
        },
        [theme.breakpoints.down("md")]: {
          width: "60%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "80%",
        },
        display: "flex",
        flexDirection: "row",
        "& input": {
          position: "relative",
          zIndex: 2,
          padding: "10px",
          width: "100%",
          outline: "none",
          color: "black",
          fontSize: "16pt",
        },
      }}
    >
      <MailchimpSubscribe
        url={mailchimpURL}
        placeholder="Enter your email address"
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      ></MailchimpSubscribe>
    </Box>
  );
};

export default MailModal;
