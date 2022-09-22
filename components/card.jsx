import React from 'react';

const card = () => {
  return <>
    <h1>Recently closed deals</h1>
    <div className="container">
      <div className="row">
        <div className="col-3">    
          <div className="card" style={{width: '18rem', margin: '2rem'}}>
            <img className="card-img-top" src="/images/farm1.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Patil Farms</h5>
                <p className="card-text">Ratnagiri, Maharashtra</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">See more available farms</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{width: '18rem', margin: '2rem'}}>
            <img className="card-img-top" src="/images/farm2.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Patil Farms</h5>
                <p className="card-text">Ratnagiri, Maharashtra</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">See more available farms</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{width: '18rem', margin: '2rem'}}>
            <img className="card-img-top" src="/images/farm5.webp" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Patil Farms</h5>
                <p className="card-text">Ratnagiri, Maharashtra</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Location</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">See more available farms</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{width: '18rem', margin: '2rem'}}>
            <img className="card-img-top" src="/images/farm6.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Jayant Farms</h5>
                <p className="card-text">Lonaval, Maharashtra</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">See more available farms</a>
            </div>
          </div>
        </div>
      </div>
    </div>



  </>;
};

export default card;
