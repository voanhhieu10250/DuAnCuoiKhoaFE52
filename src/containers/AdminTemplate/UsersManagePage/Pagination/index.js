import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getListUserPerPageApi } from "../../../../redux/actions/actGetListUserPerPage";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
    margin: "0 auto 10px",
    textAlign: "center",
    "& > *": {
      marginTop: theme.spacing(2),
      margin: "auto",
      width: "fit-content",
      "& .MuiPagination-ul .MuiPaginationItem-root:focus": {
        outline: "none",
      },
    },
  },
}));

const PaginationBar = () => {
  const usersearch = JSON.parse(localStorage.getItem("usersearch"));
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.ListUserPerPageReducer.data);
  const classes = useStyles();

  const handleChangePage = (_, pageSelect) => {
    let search = usersearch;
    search.soTrang = pageSelect;
    dispatch(getListUserPerPageApi(search));
  };

  return (
    <div className={classes.root}>
      <Pagination
        color="primary"
        count={listUser?.totalPages || 10}
        variant="outlined"
        disabled={!listUser}
        page={listUser?.currentPage || 1}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default PaginationBar;
