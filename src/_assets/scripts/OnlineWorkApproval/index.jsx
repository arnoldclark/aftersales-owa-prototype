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
        parts: {
          manufacturer: {
            price: 190.07,
            inStock: true
          },
          autoparts: {
            price: 141.38,
            inStock: true
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 2,
        area: "Underside",
        group: "Steering",
        subGroup: "Steering mechanism",
        componentDescription: "Track rod end joint",
        action: "Remove and Install",
        cause: "Worn",
        reportCategory: "essential",
        parts: {
          manufacturer: {
            price: 84.99,
            inStock: true
          },
          autoparts: {
            price: 51.49,
            inStock: true
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 3,
        area: "Underside",
        group: "Suspension",
        subGroup: "Front suspension",
        componentDescription: "Suspension lower arm, front",
        action: "Remove and Install",
        cause: "Split",
        reportCategory: "essential",
        parts: {
          manufacturer: null,
          autoparts: {
            price: 145.73,
            inStock: true
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 4,
        area: "Underside",
        group: "Suspension",
        subGroup: "Front suspension",
        componentDescription: "Anti-roll bar link - outer",
        action: "Remove and Install",
        cause: "Worn",
        reportCategory: "essential",
        parts: {
        manufacturer: null,
        autoparts: {
          price: 32.15,
          inStock: true
        }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 5,
        area: "Brakes",
        group: "Brakes",
        subGroup: "Footbrakes",
        componentDescription: "Front brake pads (all)",
        action: "Remove and Install",
        cause: "Worn",
        reportCategory: "advisory",
        parts: {
          manufacturer: {
            price: 90.59,
            inStock: true
          },
          autoparts: {
            price: 49.09,
            inStock: false,
            inStockDate: "6th December"
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 6,
        area: "Brakes",
        group: "Brakes",
        subGroup: "Footbrakes",
        componentDescription: "Front brake disc (both)",
        action: "Remove and Install",
        cause: "Worn",
        reportCategory: "advisory",
        parts: {
          manufacturer: {
            price: 65.99,
            inStock: true
          },
          autoparts: {
            price: 35.91,
            inStock: true
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 7,
        area: "Brakes",
        group: "Brakes",
        subGroup: "Footbrakes",
        componentDescription: "Rear brake pads (all)",
        action: "Remove and Install",
        cause: "Worn",
        reportCategory: "advisory",
        parts: {
          manufacturer: {
            price: 65.49,
            inStock: true
          },
          autoparts: {
            price: 62.49,
            inStock: true
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 8,
        area: "Brakes",
        group: "Brakes",
        subGroup: "Footbrakes",
        componentDescription: "Rear brake disc (both)",
        action: "Remove and Install",
        cause: "Worn",
        reportCategory: "advisory",
        parts: {
          manufacturer: {
            price: 109.99,
            inStock: true
          },
          autoparts: {
            price: 73.88,
            inStock: true
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 9,
        area: "Underside",
        group: "Suspension",
        subGroup: "Front suspension",
        componentDescription: "Road spring",
        action: "Remove and Install",
        cause: "Broken",
        reportCategory: "essential",
        parts: {
          manufacturer: {
            price: 148.19,
            inStock: true
          },
          autoparts: {
            price: 128.18,
            inStock: false,
            inStockDate: "12th December"
          }
        },
        customerChoice: null,
        customerChoicePrice: 0
      },
      {
        id: 10,
        area: "Underside",
        group: "Suspension",
        subGroup: "Rear suspension",
        componentDescription: "Road spring",
        action: "Remove and Install",
        cause: "Broken",
        reportCategory: "essential",
        parts: {
          manufacturer: {
            price: 91.93,
            inStock: true
          },
          autoparts: {
            price: 85,
            inStock: false,
            inStockDate: "12th December"
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
        element: <Index />
      },
      {
        path: "/summary-of-work",
        element: <SummaryOfWork progress={7.14} vehicle={this.state.vehicle} work={this.state.work} />
      },
      {
        path: "/summary-of-work/whats-checked",
        element: <WhatsChecked />
      },
      {
        path: "/review-work/1",
        element: <ReviewWork 
          progress={14.28}
          vehicle={this.state.vehicle} 
          work={this.state.work[0]}
          parts={this.state.work[0].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/2"
          nextPageDescription={this.state.work[1].subGroup} />
      },
      {
        path: "/review-work/2",
        element: <ReviewWork 
          progress={21.42}
          vehicle={this.state.vehicle} 
          work={this.state.work[1]}
          parts={this.state.work[1].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/3"
          nextPageDescription={this.state.work[2].subGroup} />
      },
      {
        path: "/review-work/3",
        element: <ReviewWork 
          progress={28.56}
          vehicle={this.state.vehicle} 
          work={this.state.work[2]}
          parts={this.state.work[2].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/4"
          nextPageDescription={this.state.work[3].subGroup} />
      },
      {
        path: "/review-work/4",
        element: <ReviewWork
          progress={35.70}
          vehicle={this.state.vehicle} 
          work={this.state.work[3]}
          parts={this.state.work[3].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/5"
          nextPageDescription={this.state.work[4].subGroup} />
      },
      {
        path: "/review-work/5",
        element: <ReviewWork 
          progress={42.84}
          vehicle={this.state.vehicle} 
          work={this.state.work[4]}
          parts={this.state.work[4].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/6"
          nextPageDescription={this.state.work[5].subGroup} />
      },
      {
        path: "/review-work/6",
        element: <ReviewWork 
          progress={49.98}
          vehicle={this.state.vehicle} 
          work={this.state.work[5]}
          parts={this.state.work[5].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/7"
          nextPageDescription={this.state.work[6].subGroup} />
      },
      {
        path: "/review-work/7",
        element: <ReviewWork 
          progress={57.12}
          vehicle={this.state.vehicle} 
          work={this.state.work[6]}
          parts={this.state.work[6].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/8"
          nextPageDescription={this.state.work[7].subGroup} />
      },
      {
        path: "/review-work/8",
        element: <ReviewWork 
          progress={64.26}
          vehicle={this.state.vehicle} 
          work={this.state.work[7]}
          parts={this.state.work[7].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/9"
          nextPageDescription={this.state.work[8].subGroup} />
      },
      {
        path: "/review-work/9",
        element: <ReviewWork 
          progress={71.40}
          vehicle={this.state.vehicle} 
          work={this.state.work[8]}
          parts={this.state.work[8].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-work/10"
          nextPageDescription={this.state.work[9].subGroup} />
      },
      {
        path: "/review-work/10",
        element: <ReviewWork 
          progress={78.54}
          vehicle={this.state.vehicle} 
          work={this.state.work[9]}
          parts={this.state.work[9].parts}
          setCustomerChoice={this.setCustomerChoice}  
          totalPrice={totalPrice} 
          nextPage="/review-and-confirm/"
          nextPageDescription="Next: Review and confirm" />
      },
      {
        path: "/review-and-confirm",
        element: <ReviewAndConfirm
          progress={85.68}
          work={this.state.work}
          totalPrice={totalPrice}
          nextPage="/payment-options"
          nextPageDescription="Payment options" />
      },
      {
        path: "/payment-options",
        element: <PaymentOptions
          progress={92.84}
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