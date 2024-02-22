export function parose(szam){

    let psE = false
    /* csak akkor fusson le ha a szam erteke egesz szam */
    if (!Number.isNaN(szam)){
        return "ez nem szám" 
    }
    if (Number.isInteger(szam)){
        if (szam%2===0)
        psE = true;
    }
    

    return psE
}