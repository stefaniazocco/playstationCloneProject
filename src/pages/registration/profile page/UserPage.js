import React from "react";
import sonyBar from "../../../assets/images/homepage/SalesPlay/sony bar.jpg";
import iconUser from "../../../assets/images/homepage/SalesPlay/user icon.jpg";
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
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

const UserPage = () => {
    return (
        <section style={{ backgroundColor: '#eee' }}>
        <picture srcset={sonyBar} alt=""/>    
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='/'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
  
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={iconUser}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <h4 className="text-muted mb-1">Riccardo Priolo</h4>
                  <hr/>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Edit your Information</MDBBtn>
                    <MDBBtn outline className="ms-1">Logout</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-5">
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText><a href="#">Privacy settings</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                      <MDBCardText><a href="#">Payment Method</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                      <MDBCardText><a href="#">Transaction history</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                      <MDBCardText><a href="#">Subscriptions</a></MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                      <MDBCardText><a href="#">Family pack</a></MDBCardText>
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
                      <MDBCardText className="text-muted">Riccardo Priolo</MDBCardText>
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
      </section>
  );
}
 
export default UserPage;