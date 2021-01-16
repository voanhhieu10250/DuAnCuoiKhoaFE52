import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "900px",
    height: "530px",
    [theme.breakpoints.down("sm")]: {
      width: "0px",
      height: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "600px",
      height: "363px",
    },
    [theme.breakpoints.up("md")]: {
      width: "900px",
      height: "530px",
    },
  },
  loginPaper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    border: "#9b9b9b solid 1px",
    borderRadius: "6px",
    fontSize: "16px",
    width: "350px",
    textAlign: "center",
    "& .title": {
      margin: "4% 0",
    },
  },
  btnLogin: {
    width: "90%",
    margin: "5% auto",
    "&::after": {
      content: "",
      display: "table",
      clear: "both",
    },
    "& .login": {
      display: "inline-block",
      color: "#000",
      padding: "1px 6px",
      borderRadius: "4px",
      border: "1px solid gray",
      "&:hover": {
        backgroundColor: "rgba(128,128,128,0.25)",
      },
      "&:focus": {
        outline: "none",
      },
      "& p": {
        margin: "0 0 10px",
      },
    },
  },
  postPaper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    border: "#9b9b9b solid 1px",
    borderRadius: "6px",
    fontSize: "16px",
    width: "auto",
    "& .core": {
      fontSize: "40px",
      color: "#7ed321",
      textAlign: "center",
      margin: "10px 0 -15px 0",
      "& p": {
        margin: "0 0 10px",
      },
    },
    "& .starSelect": {
      position: "relative",
      margin: "auto",
      width: "160px",
      height: "32px",
      "& .defaultListStar": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundRepeat: "repeat-x",
        overflow: "hidden",
        backgroundSize: "32px",
        backgroundPosition: "0px 0px",
      },
      "& .starSelectList": {
        position: "absolute",
        top: 0,
        left: 0,
        height: "31px",
        "&:hover span:hover ~ span": {
          opacity: "0!important",
        },
        "&:hover span": {
          opacity: "1!important",
        },
        "& span": {
          display: "inline-block",
          cursor: "pointer",
        },
        "& .halfLeft": {
          height: "32px",
          width: "16px",
          backgroundPosition: "0px 0px",
          backgroundSize: "32px",
          backgroundRepeat: "repeat-x",
          overflow: "hidden",
        },
        "& .halfRight": {
          height: "32px",
          width: "16px",
          backgroundPosition: "-16px 0px",
          backgroundSize: "32px",
          backgroundRepeat: "repeat-x",
          overflow: "hidden",
        },
      },
    },
    "& .inputComment": {
      padding: "20px",
      margin: "20px",
      borderRadius: "4px",
      width: "740px",
      border: "1px solid #e8e8e9",
      background: "#fff",
      fontSize: "16px",
      resize: "none",
      transition: "all .2s",
      "&:focus": {
        outline: "none",
        borderColor: "#fb4226",
        boxShadow:
          "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(251,66,38,.6)",
      },
    },
    "& .errorPost": {
      marginBottom: "20px",
      textAlign: "center",
      color: "red",
      fontSize: "14px",
    },
  },
  postBtn: {
    position: "relative",
    margin: "0",
    "& .postBtn": {
      float: "right",
      margin: "0 20px 25px 0",
      padding: "7px 29px",
      backgroundColor: "#fb4226",
      border: "1px solid #fb4226",
      borderRadius: " 4px",
      color: "#fff",
      backgroundImage: "linear-gradient(-226deg,#fb4226 11%,#be2912 100%)",
      transition: "all .2s",
      fontSize: "14px",
      "&:focus": {
        outline: "none",
      },
    },
  },
}));

export default useStyles;
