import React from "react";
import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { links } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
    <NavContainer >
      <div >

      <ul className="nav-center">
        {links.map((link, index) => {
          if (link.text === "Brands") {
            return (
              <li className="nav-item brands" key={link.id}>
                <div className="sub-menu_container">
                  <p>{link.text}</p>
                  <MdArrowDropDown className="dropdown-icon" />
                </div>

                <ul>
                  {link.types.map((type) => {
                    return (
                      <li key={Math.random() * Math.random()}>
                        <Link to={type.url}>{type.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
          if (link.text === "đăng nhập")
            return <React.Fragment key="fragment-key-1"></React.Fragment>;
          return (
            <li className="nav-item" key={link.id}>
              <NavLink
                exact={true}
                to={link.url}
                activeStyle={{
                  color: "var(--primary-color)",
                }}
                className="nav-item--link"
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #0a0a0a;
  height: 74px;
  display: none;
  .sub-menu_container {
    position: relative;
    cursor: pointer;
  }
  .dropdown-icon {
    color: #747474;
    font-size: 2rem;
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    .nav-item {
      position: relative;
      
    
      p {
        color: white;
        font-weight: 500;
        font-size: 0.9rem;
        letter-spacing: 1px;
        line-height: 1.6rem;
        text-transform: uppercase;
        padding: 25px 0;
        :hover{
        color: var(--primary-color);
      }
      }
    }
    .brands {
      position: relative;
      
      ul {
        position: absolute;
        top: 100%;
        left: -40%;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease-in-out;
        z-index: 2;
        border-radius: 2px;
        border: 1px solid #ccc;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        ::after {
          position: absolute;
          content: "";
          height: 30px;
          width: 200px;
          background-color: transparent;
          top: -15%;
          left: 0;
        }
        ::before {
          position: absolute;
          content: "";
          border-color: transparent transparent white transparent;
          border-width: 15px;
          border-style: solid;
          top: -17%;
          left: 23%;
        }
        li {
          a {
            display: block;
            padding: 20px 150px 20px 20px;
            color: var(--primary-color);
            background-color: white;
            font-size: 0.8rem;
            :hover {
              color: black;
            }
          }
        }
      }
      :hover ul {
        opacity: 1;
        visibility: visible;
        z-index: 2;
      }
    }
    .nav-item--link {
      color: white;
      font-weight: 500;
      font-size: 0.9rem;
      letter-spacing: 1px;
      line-height: 1.6rem;
      display: block;
      padding: 25px 0;
    }

    .nav-item--link:hover {
      color: var(--primary-color);
    }
  }
  @media (min-width: 992px) {
    display: block;
  }
`;

export default Navbar;
