function AllData(){
    const [data, setData] = React.useState('');    

    // use the useEffect hook in order to call the route and then update the UI.
    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data)); // update the UI.           
            });

    }, []);

    return (<>
        <h5>All Data in Store:</h5>
        {data}
    </>);
}
