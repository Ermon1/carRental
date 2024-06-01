import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import RenterDetail from "./page/RenterDetial";
import LoginPage from "./page/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./page/RegistrationPage";
import CarRegistrationPage from "./page/CarRegistrationPage";
import UpdateReservationAprove from "./page/UpdateReservationAprove";
import ReservationPage from "./page/ReservationPage";
import CarPage from "./page/CarPage";
import ProfilePage from "./page/ProfilePage";
import Aboutus from "./page/Aboutus";
// import Header from './component/Header'
import AproveRenter from './page/AproveRenter'
import Header from "./component/Header";
import CarDetailPage from "./page/CarDetailPage";
import About from "./component/About";
import AdminDashboard from "./page/AdminDashboard";
import Employeeapproval from "./page/Employeeapproval";
import DetailReservation from "./page/DetailReservation";
import UpdateReservation from "./page/UpdateReservation";
import PasswordResetPage from "./page/PasswordResetPage";
import RenterPage from "./page/RenterPage";
import AddEmployee from "./page/AddEmployee";
import EmployUpdate from "./page/EmployUpdate";
import EmplDalete from "./page/EmplDelete";
import RentedCarsPage from "./page/RentedCarsPage";
import CancelRequest from "./page/CancelRequest";
import Blog from "./page/Blog";
import BlogDetails from "./page/BlogDetails";
import Contact from "./page/Contact";
// const pageRender = function (role) {

//   if (role) {

//  }

// }

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/renterdetail" exact Component={RenterDetail} />
        <Route path="/renter" exact Component={RenterPage} />
        <Route path="/rented" exact Component={RentedCarsPage} />
        <Route path="/blogs" exact Component={Blog} />
        <Route path="/blogs/:slug" exact Component={BlogDetails} />
        <Route path="/aproverenter" exact Component={AproveRenter} />
        <Route path="/cancel" exact Component={CancelRequest} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/updatereservation" exact Component={UpdateReservation} />
        <Route path="/forgot-password" exact Component={PasswordResetPage} />
        <Route path="/updateaprove" exact Component={UpdateReservationAprove} />
        <Route path="/detialreservation" exact Component={DetailReservation} />
        <Route path="/aprove" exact Component={Employeeapproval} />
        <Route path="/register" exact Component={Register} />
        <Route path="/profilepage" exact Component={ProfilePage} />
        <Route path="/admin" exact Component={AdminDashboard} />
        <Route path="/about" exact Component={Aboutus} />
        <Route path="/profile" exact Component={CarDetailPage} />
        <Route path="/reservation" exact Component={ReservationPage} />
        <Route path="/cars" exact Component={CarPage} />
        <Route path="/addcars" exact Component={CarRegistrationPage} />
        <Route path="/login" exact Component={LoginPage} />
        <Route path="/aboutus" exact Component={Aboutus} />
        <Route path="/addemployee" exact Component={AddEmployee} />
        <Route path="/updateemployee" exact Component={EmployUpdate} />
        <Route path="/deleteemployee" exact Component={EmplDalete} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
