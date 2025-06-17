let getStoredData = () => {
    let getStoredData = localStorage.getItem('read-books');
    if(getStoredData)
    {   
        let storedData = JSON.parse(getStoredData);
        return storedData; 
    }
    else 
    {
      return []; 
    }
}

let addToLS = (id) => {
    let storedData = getStoredData();
    if(storedData.includes(id))
    {
        //already exist
        console.log('already exist');
    }
    else 
    {
        // Add to LS
        storedData.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedData));
    }
}

export {addToLS, getStoredData}
