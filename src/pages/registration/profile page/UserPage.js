import React from "react";
import sonyBar from "../../../assets/images/homepage/SalesPlay/sony bar.jpg";
import iconUser from "../../../assets/images/homepage/SalesPlay/user icon.jpg";
import { FooterMain } from "../../../components/footer/FooterMain";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import axios from "axios";
import { useNavigate } from "react-router";
import { MdFamilyRestroom } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";
import { AiOutlineTransaction} from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";


const UserPage = () => {
  const nav = useNavigate()
    async function logout(){
      try {
        localStorage.removeItem("persist:root")
        const res = await axios.post("http://localhost:5000/api/auth/logout");
        console.log(res)
        
    }catch(err){
      console.log(err)
    }
  }


    return (
        <section style={{ backgroundColor: '#eee' }}>
        <img src={sonyBar} alt=""/>
        <MDBContainer className="py-5 px-5" style={{ width: '1020px', color:'black'}}>
              
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4" >
                <MDBBreadcrumbItem>
                  <a href='/' style={{textDecoration: "none", borderColor:'black', color:'black'}}>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
  
          <MDBRow className="d-flex justify-content-center ">
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={iconUser}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <h4 className="text-muted mb-1">User Name</h4>
                  <hr/>
                  <div className="d-flex justify-content-center ">
                  <button type="button" class="btn btn-dark"><a href="/" onClick={()=>logout()} style={{textDecoration:'none', color:'white'}}>Logout</a></button>
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-5">
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3 list-group-item list-group-item-action">
                    <MdPrivacyTip style={{marginRight: 8}}/>
                      <MDBCardText><a href="#" style={{textDecoration: "none", borderColor:'black', color:'black'}}>Privacy settings</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3 list-group-item list-group-item-action">
                    <MdPayments style={{marginRight: 8}}/>
                      <MDBCardText><a href="#" style={{textDecoration: "none", borderColor:'black', color:'black'}}>Payment Method</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3 list-group-item list-group-item-action">
                    <AiOutlineTransaction style={{marginRight: 8}}/>
                      <MDBCardText><a href="#" style={{textDecoration: "none", borderColor:'black', color:'black'}}>Transaction history</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3 list-group-item list-group-item-action">
                    <MdUnsubscribe style={{marginRight: 7}}/>
                      <MDBCardText><a href="#" style={{textDecoration: "none", borderColor:'black', color:'black'}}>Subscriptions</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3 list-group-item list-group-item-action">
                    <MdFamilyRestroom style={{marginRight: 8}}/>
                      <MDBCardText><a href="#"  style={{textDecoration: "none", borderColor:'black', color:'black'}}>Family pack</a></MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">User Name</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">example@example.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(089) 234-5678</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(+39) 765-4321</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Address...</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
  
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <FooterMain />
      </section>
  );
}
 
export default UserPage;