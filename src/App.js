import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log(data[1].address.street);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="font-serif">
      {data.map((user) => (
        <div
          key={user.id}
          className="border rounded-lg m-5 shadow-lg px-10 py-5 text-xl"
        >
          <div className="flex justify-between my-3">
            <h1>Name: {user.name}</h1>
            <p>Phone: {user.phone}</p>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.street}</p>
          </div>

          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content w-60  rounded-2xl min-h-0 py-2 pl-2 m-auto text-center">
              Show details/Hide details
            </div>
            <div className="collapse-content  ">
              <div className="flex justify-evenly">
                <div>
                  <p className="underline underline-offset-4">Personal Info</p>
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Website: {user.website}</p>
                </div>
                <div>
                  <p className="underline underline-offset-4">Address</p>
                  <p>City: {user.address.city}</p>
                  <p>Street: {user.address.street}</p>
                  <p>Suite: {user.address.suite}</p>
                  <p>Zip Code: {user.address.zipcode}</p>
                  <p>
                    Geo: lat:{user.address.geo.lat}, lng: {user.address.geo.lng}
                  </p>
                </div>
                <div>
                  <p className="underline underline-offset-4">Company</p>
                  <p>Name: {user.company.name}</p>
                  <p>BS: {user.company.bs}</p>
                  <p>Catch Phrase: {user.company.catchPhrase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
