function ticketPricing(age){
    if(age<=12){
        return `price: $10`
    }
    else if(age>=13 && age<=17){
        return `price: $15`
    }
    else if(age>=18){
        return `price: $20`
    }
}