const numbas = [1,2,3,4,5,6,7,8,9,10]

const evens = numbas.filter(function (number) {

    return number % 2 === 0

})

console.log(evens)

const evens2 = numbers.filter((number) => number % 2 === 0)

console.log(evens2)

const evens3 = []

numbas.forEach((number) => {

    if (number % 2 === 0){

        evens3.push(number)

    }

})

console.log(evens3)

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

const ayy = companies.filter(

    (company) => company.start >= 1980 && company.start <= 1989

)



