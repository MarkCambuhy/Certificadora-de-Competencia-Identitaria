import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./index.css";

const Profile = () => {
  return (
    <>
      <Header />
      <div>
        <div id="profile-container">
          <div id="profile-info">
            <h3>FirstName LastName</h3>
            <h4>Sobre</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Iaculis arcu risus tempor
              ipsum eget sapien in congue. Libero tristique et eu egestas.
              Penatibus et nisl in amet mauris id. Volutpat sem consectetur amet
              enim. Mattis urna eu volutpat sit. Pretium arcu elementum arcu
              morbi sollicitudin quis. Non rutrum lorem eu gravida euismod cras
              blandit orci.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
