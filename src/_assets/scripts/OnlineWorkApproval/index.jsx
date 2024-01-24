import React, { useState } from 'react';
import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom';

//Routes
import Index from './Routes/Index';
import SummaryOfWork from './Routes/SummaryOfWork';
import ReviewWork from './Routes/ReviewWork';
import ReviewAndConfirm from './Routes/ReviewAndConfirm';
import PaymentOptions from './Routes/PaymentOptions';
import ThankYou from './Routes/ThankYou';
import WhatsChecked from './Routes/WhatsChecked';
//Routes

class OnlineWorkApproval extends React.Component {
  state = {
    vehicle: {
      reg: "BK66AFO",
      manufacturer: "DS",
      model: "DS 3",
      spec: "DS3 ELEGANCE PURETECH S/S"
    },
    work: [
      {
        id: 1,     
        area: "Underside",
        group: "Suspension",
        subGroup: "Front suspension",
        componentDescription: "Shock absorber",
        action: "Remove and Install",
        cause: "Leak",
        reportCategory: "essential",
        multipart: false,
        partDescriptions: [],
        parts: {
          manufacturer: {
            price: 190.07,
            inStock: true,
            parts: []
          },
          autoparts: {
            price: 141.38,
            inStock: true,
            parts: []
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 2,
        area: "Brakes",
        group: "Brakes",
        subGroup: "Footbrakes",
        componentDescription: "Front Brakes (pads & discs)",
        action: "Remove and Install",
        cause: "Worn",
        reportCategory: "essential",
        multipart: true,
        partDescriptions: [
          "Brake pads (front)",
          "Brake discs (front)",
          "Brake calipers"
        ],
        parts: {
          manufacturer: {
            price: 210.00,
            inStock: true,
            parts:  [
              {
                description: "Brake pads (front)",
                price: 98.00
              }, 
              {
                description: "Brake discs (front)",
                price: 51.00
              },
              {
                description: "Brake calipers",
                price: 70.00
              }
            ],
          },
          autoparts: {
            price: 174.00,
            inStock: true,
            parts:  [
              {
                description: "Brake pads (front)",
                price: 80.00
              }, 
              {
                description: "Brake discs (front)",
                price: 44.00
              },
              {
                description: "Brake calipers",
                price: 50.00
              }
            ],
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      }
    ]
  }

  setCustomerChoice = (id, choice, price) => {
    const foundWork = this.state.work.findIndex((work) => work.id === id);
    const updatedWork = Object.assign({}, this.state.work[foundWork]);
    updatedWork.customerChoice = choice;
    updatedWork.customerChoicePrice = price;

    const newWork = this.state.work.slice();
    newWork[foundWork] = updatedWork;

    this.setState({
      work: newWork
    })
  }

  render() {
    const totalPrice = this.state.work.reduce((n, {customerChoicePrice}) => n + customerChoicePrice, 0)

    const router = createBrowserRouter([
      {
        path: "/",
        element: <SummaryOfWork progress={16.7} vehicle={this.state.vehicle} work={this.state.work} />
      },
      {
        path: "/summary-of-work/whats-checked",
        element: <WhatsChecked />
      },
      {
        path: "/review-work/1",
        element: <ReviewWork 
          progress={33.4}
          vehicle={this.state.vehicle} 
          work={this.state.work[0]}
          parts={this.state.work[0].parts}
          partDescriptions={this.state.work[0].partDescriptions}
          multiline={this.state.work[0].multiline}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/2"
          nextPageDescription={this.state.work[1].subGroup} />
      },
      {
        path: "/review-work/2",
        element: <ReviewWork 
          progress={50.1}
          vehicle={this.state.vehicle} 
          work={this.state.work[1]}
          parts={this.state.work[1].parts}
          partDescriptions={this.state.work[1].partDescriptions}
          multiline={this.state.work[1].multiline}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-and-confirm/"
          nextPageDescription="Next: Review and confirm" />
      },
      {
        path: "/review-and-confirm",
        element: <ReviewAndConfirm
          progress={66.8}
          work={this.state.work}
          totalPrice={totalPrice}
          nextPage="/payment-options"
          nextPageDescription="Payment options" />
      },
      {
        path: "/payment-options",
        element: <PaymentOptions
          progress={83.5}
          nextPage="/thank-you"
          />
      },
      {
        path: "/thank-you",
        element: <ThankYou
          progress={100} />
      }
    ]);

    return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  }
}

export default OnlineWorkApproval;