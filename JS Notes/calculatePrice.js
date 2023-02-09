const calculatePrice = (fullPrice, age) => {
        let price = fullPrice

        const tenth = () => {
            price = Math.ceil(fullPrice * 0.1) 
            return true
        }

        const halfPrice = thePrice => {
            price = Math.ceil(fullPrice * 0.5) 
            return true
        }

        const FullPrice = thePrice => {
            price = Math.ceil(fullPrice * 1)  
            return true
        }

        const a = (age >= 0 && age <= 5) && tenth()
        const b = (age >= 6 && age <= 17) && halfPrice()
        const c = (age >= 18 && age <= 66) && FullPrice()
        const d = age >= 67 && halfPrice()

        return price
    }

    console.log(calculatePrice(121 , 0));
    console.log(calculatePrice(161 , 5));
    console.log(calculatePrice(179 , 6));
    console.log(calculatePrice(200 , 17));
    console.log(calculatePrice(306 , 18));
    console.log(calculatePrice(158 , 66));
    console.log(calculatePrice(234 , 67));
    console.log(calculatePrice(451 , 117));


