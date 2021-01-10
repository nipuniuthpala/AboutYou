cy.logIn={}
    cy.logIn.logIn =()=>{
       cy.visit('https://www.aboutyou.de/');
 
    }


cy.email={}
cy.email.email=()=>{
    let email="nn@gmail.com"
    return email
}

cy.password={}
cy.password.password=()=>{
    let password="test1234"
    return password
}



cy.address={}
cy.address.address=()=>{
    let address="Domstrasse 10 Hamburg"
    return address
}

cy.zip={}
cy.zip.zip=()=>{
    let zip=20095
    return zip
}
cy.city={}
cy.city.city=()=>{
    let city="Hamburg"
    return city
}
cy.bdate={}
cy.bdate.bdate=()=>{
    let bdate="22021990"
    return bdate
}


cy.newEmail={}
cy.newEmail.newEmail=()=>{
        let random_string = '';
        let random_ascii;
        for(let i = 0; i < 10; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string+"@gmail.com"
              
     
}

cy.name={}
cy.name.name=()=>{
    let name="test"
    return name
}

cy.search={}
cy.search.search=()=>{
    let search="Shirt"
    return search
}