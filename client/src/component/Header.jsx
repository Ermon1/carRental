import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { logoutSuccess } from "../redux/actions/loginAction";
import "./header.css";

const commonNavLinks = [
  {
    path: "/",
    display: "Home",
  },
];

const customerNavLinks = [
  {
    path: "/updatereservation",
    display: "resereved",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/profilepage",
    display: "profile",
  },
  {
    path: "/about",
    display: "About",
  },
];

const renterNavLinks = [
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/profilepage",
    display: "profile",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/renter",
    display: "RentPage",
  },
];

const ADD = [
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/about",
    display: "About",
  },
];

const employeeNavLinks = [
  {
    path: "/admin",
    display: "AdminPage",
  },
  // {
  //   path: "/aprove",
  //   display: "AproveRequest",
  // },
  // {
  //   path: "/cancel",
  //   display: "CancelRequest",
  // },
  // {
  //   path: "/rented",
  //   display: "viewRented",
  // },
  // {
  //   path: "/updateaprove",
  //   display: "updateAprove",
  // },
  {
    path: "/addcars",
    display: "ADD CAR",
  },
];
const admin = [
  {
    path: "/addemployee",
    display: "ADD employee",
  },
  {
    path: "/updateemployee",
    display: "update employee",
  },
  {
    path: "/deleteemployee",
    display: "DELETE employee",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  //const [isAuthenticated, setIsAuthenticated] = useState(true);

  const { reserve } = useSelector((state) => state.reservationReducer);
  // console.log(reserve);
  //   const hasReservation = reserve && reserve.lengh > 1
  //   const updateReservationList=
  const isAuthenticated = useSelector(
    (state) => state.loginReducer.isAuthenticated
  );

  const { user = {} } = useSelector((state) => state.loginReducer);
  const role = user?.role;
  console.log(role);

  let roleBasedNavLinks = commonNavLinks;
  switch (role) {
    case "customer":
      roleBasedNavLinks = [...commonNavLinks, ...customerNavLinks];
      break;
    case "renter":
      roleBasedNavLinks = [...commonNavLinks, ...renterNavLinks];
      break;
    case "employee":
      roleBasedNavLinks = [...commonNavLinks, ...employeeNavLinks];
      break;
    case "admin":
      roleBasedNavLinks = [...admin];
      break;
    default:
      // Use the default navLinks (commonNavLinks) if the role is not recognized
      roleBasedNavLinks = [...commonNavLinks, ...ADD];
  }

  // console.log(isAuthenticated);
  const handleLogout = () => {
    dispatch(logoutSuccess());
    // if (navLinks.length === 7) {
    //   navLinks.pop();
    //// }
  };

  // if (resered && navLinks.length === 6 && isAuthenticated) {
  //   navLinks.push({
  //     path: "/updatereservation",
  //     display: "resereved",
  //   });
  // }

  // const handleLogout = () => {
  //   token = localStorage.removeItem("token");

  // };
  // const handleLogin = () => {
  //   if (user) {
  //     setIsAuthenticated(true);
  //   }
  // };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +251-963742979
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {isAuthenticated ? (
                  <Link
                    to="login"
                    onClick={handleLogout}
                    className=" d-flex align-items-center gap-1"
                  >
                    <i class="ri-login-circle-line"></i> Logout
                  </Link>
                ) : (
                  <Link to="login" className=" d-flex align-items-center gap-1">
                    <i class="ri-login-circle-line"></i> Login
                  </Link>
                )}
                <Link
                  to="register"
                  className=" d-flex align-items-center gap-1"
                >
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Ethiopia</h4>
                  <h6>Adiss Abeba, Arada</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Friday</h4>
                  <h6>8am - 5pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {roleBasedNavLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
