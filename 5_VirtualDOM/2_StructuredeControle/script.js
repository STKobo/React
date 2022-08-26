//import './App.css';
function App() {
  const userStatus = 'admin';
  const orders = [
    {
      id: 1,
      client: 'Christina Dean',
      email: 'christina.dean@example.com',
      total: 49.87,
      createdAt: '2020-03-10'
    },
     {
       id: 2,
       client: 'Peter Gomez',
       email: 'peter.gomez@example.com',
       total: 23.64,
       createdAt: '2020-03-02'
     },
     {
       id: 3,
       client: 'Clarence Mitchelle',
       email: 'clarence.mitchelle@example.com',
       total: 107.20,
       createdAt: '2020-02-24'
     }
   ];
   let orderList = <h1>Il semblerait que vous ne soyez pas administrateur</h1>;
   
   if (userStatus === 'admin') {
     const listItems = orders.map((order) => {
       return (
         <li key={order.id}>
           <h2>#{order.id} - {order.total} €</h2>
           <p>{new Date(order.createdAt).toLocaleDateString()}</p>
           <p>{order.client} - {order.email}</p>
         </li>
       );
     });
     orderList = <ul>{listItems}</ul>;
   }
 
  return(
    <div className="wrapper">
      {orderList}
    </div>
  )
}
export default App;