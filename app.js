// this function will manage all tickets calculation
function bookingFlightsManagement(ticketType, isIncrease) {
    const ticketQuantity = document.getElementById(ticketType);
    if (isIncrease) ticketQuantity.value++;
    else {
        // this condition is for that ticket number doesn't go in a negative value.
        if (ticketQuantity.value <= 0) return;
        else ticketQuantity.value--;
    }

    let firstClassTicketAmount = document.getElementById('firstClass').value;
    let economyTicketAmount = document.getElementById('economy').value;
    let subTotal = document.getElementById('subTotal');
    let vat = document.getElementById('vat');
    let total = document.getElementById('total');

    // here will be calculated subtotal, vat and total amount.
    subTotal.innerText = (firstClassTicketAmount * 150) + (economyTicketAmount * 100);
    vat.innerText = subTotal.innerText * 0.1;
    total.innerText = Number(subTotal.innerText) + Number(vat.innerText);
}

// this function will show all details about booking tickets
function bookingDetails(isOpen) {
    document.querySelector('.flyingFrom').innerText = document.getElementsByName('flyingFrom')[0].value;

    document.querySelector('.flyingTo').innerText = document.getElementsByName('flyingTo')[0].value;

    document.querySelector('.departureDate').innerText = document.getElementsByName('departureDate')[0].value;

    document.querySelector('.returnDate').innerText = document.getElementsByName('returnDate')[0].value;

    document.querySelector('.firstClassTicketNumber').innerText = document.getElementById('firstClass').value;

    document.querySelector('.economyTicketNumber').innerText = document.getElementById('economy').value;

    document.querySelector('.bookingAmountCalculations .subTotal').innerText = document.getElementById('subTotal').innerText;

    document.querySelector('.bookingAmountCalculations .vat').innerText = document.getElementById('vat').innerText;

    document.querySelector('.bookingAmountCalculations .total').innerText = document.getElementById('total').innerText;
    // it will control open and close bookingDetails section
    if (isOpen) {
        document.getElementById('ticketBookingDetails').style.width = '100%';
        document.getElementById('ticketBookingDetails').style.height = '100%';
        document.getElementById('ticketBookingDetails').style.opacity = '1';
    }
    else {
        document.getElementById('ticketBookingDetails').style.width = '0';
        document.getElementById('ticketBookingDetails').style.height = '0';
        document.getElementById('ticketBookingDetails').style.opacity = '0';
    }
}