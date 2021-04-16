import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Book = () => {
    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <h3>Please Pay</h3>
                    <ProcessPayment></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default Book;