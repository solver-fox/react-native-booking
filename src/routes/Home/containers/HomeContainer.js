import { connect } from "react-redux";
import Home from "../components/Home";
import {
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
  getAddressPredictions,
  getSelectedAddress,
  bookCar,
  getNearByDrivers
} from "../modules/home";

const mapStateToProps = (state) => ({
  region: state.home.region,
  predictions: state.home.predictions || [],
  inputData: state.home.inputData || {},
  resultTypes: state.home.resultTypes || {},
  selectedAddress: state.home.selectedAddress || {},
  fare: state.home.fare,
  nearByDrivers: state.home.nearByDrivers || {},
  booking: state.home.booking || {},
});

const mapActionCreators = {
  getCurrentLocation,
  toggleSearchResultModal,
  getInputData,
  getSelectedAddress,
  bookCar,
  getAddressPredictions,
  getNearByDrivers
};
export default connect(mapStateToProps, mapActionCreators)(Home);
