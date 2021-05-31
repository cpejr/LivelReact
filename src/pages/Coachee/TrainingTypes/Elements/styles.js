import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    width: "69%",
    height: "68%",
    backgroundColor: "#F7F6F6",
    border: "0px",
    padding: "20px",
  },

  container: {
    height: "100%",
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  yellowPopUpButton: {
    margin: "5px",
    fontSize: "150%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8vh",
    height: "56%",
    fontWeight: "700",
    color: "black",
    backgroundColor: "#FFBA2F",
    borderRadius: "0 40% 0 0",
    border: "0px",
  },

  orangePopUpButton: {
    margin: "5px",
    fontSize: "150%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8vh",
    height: "56%",
    fontWeight: "700",
    color: "black",
    backgroundColor: "#F5821F",
    borderRadius: "0 40% 0 0",
    border: "0px",
  },

  purplePopUpButton: {
    margin: "5px",
    fontSize: "150%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8vh",
    height: "56%",
    fontWeight: "700",
    color: "white",
    backgroundColor: "#632467",
    borderRadius: "0 40% 0 0",
    border: "0px",
  },

  popUpHeader: {
    color: "#717171",
    fontSize: "140%",
    fontWeight: "300",
  },

  purpleSymbol: {
    margin: "5px",
    fontSize: "150%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10vh",
    height: "29%",
    fontWeight: "700",
    color: "white",
    backgroundColor: "#632467",
    borderRadius: "0 40% 0 0",
    border: "0px",
  },

  yellowSymbol: {
    margin: "5px",
    fontSize: "150%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10vh",
    height: "56%",
    fontWeight: "700",
    color: "black",
    backgroundColor: "#FFBA2F",
    borderRadius: "0 40% 0 0",
    border: "0px",
  },

  orangeSymbol: {
    margin: "5px",
    fontSize: "150%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "9vh",
    height: "56%",
    fontWeight: "700",
    color: "black",
    backgroundColor: "#F5821F",
    borderRadius: "0 40% 0 0",
    border: "0px",
  },

  estimuloDoMesContainer: {
    height: "30%",
    display: "flex",
    alignItems: "center",
  },

  divider: {
    border: "1px solid #DEDEDE",
    marginBottom: "20px",
  },

  descriptionText: {
    fontSize: "0.7rem",
    color: "#231F20",
    marginLeft: "7%",
  },

  descriptionTitleYellow: {
    fontSize: "2vh",
    color: "#FFBA2F",
    fontWeight: "800",
  },

  descriptionTitleOrange: {
    fontSize: "2vh",
    color: "#F5821F",
    fontWeight: "800",
  },

  CadeiaContainer: {
    height: "60%",
    display: "flex",
    justifyContent: "space-around",
  },

  setasContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },

  CadeiaRow: {
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  descriptionTitlePurple: {
    fontSize: "2vh",
    color: "#632467",
    fontWeight: "800",
  },
}));

export default useStyles;
