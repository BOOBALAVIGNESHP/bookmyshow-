import React from "react";

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_OIZ4t8UMXs4ETr",
        amount: 500,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}

    };
    let rzp = new window.Razorpay(options);
    rzp.open();

};

export default launchRazorPay;