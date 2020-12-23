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
}));

export default useStyles;
