function CreateAccount(){
  const [show, setShow]     = React.useState(true); // setShow is to decide whether we show the createForm / CreateMsg
  const [status, setStatus] = React.useState(''); // setStatus to keep track of the message that we are setting within our user component

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

// Component - create message (when we submit a new user that is created, we will show the create message)
// Show a message and display a button to create another user account.
// if the user click on the create a new account we setShow=true, means that we'll load the create form component.
function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

// Component - create form
function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  // push a new user into the context.
  function handle(){
    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
    })();
    props.setShow(false); // setShow to be false will then trigger the create message component.
  }    

  return (<>

    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>

  </>);
}