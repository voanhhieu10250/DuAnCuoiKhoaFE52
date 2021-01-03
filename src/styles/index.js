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
}));

export default useStyles;
