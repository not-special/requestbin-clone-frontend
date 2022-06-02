import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dbOps from '../services/db';
// import Body from './Body';

const BinPage = () => {
  const [requests, setRequests] = useState([]);
  const { path } = useParams();
  const ulStyle = {
    listStyleType: 'none',
    borderStyle: 'solid',
    marginLeft: '15px',
    width: '75%'
  };

  useEffect(() => {
    dbOps
      .getRequests(path)
      .then(data => {
        setRequests(data);
      })
      .catch(error => {
        throw new Error ('could not fetch requests')
      })
  }, [path])

  return (
    <div>
      <h3>Request History for: {path}</h3>
      <div>
        {
          requests.map(request => 
            <ul key={request.id} style={ulStyle}>
              <li>
                <p>Date: {"TEST DATE"}</p>
                <p>Type: {request.http_method}</p>
                <div>
                  <p>Headers: </p>
                  <ul>
                    <li>host: {JSON.parse(JSON.stringify(request.headers))["host"]}</li>
                    <li>accept: {JSON.parse(JSON.stringify(request.headers))["accept"]}</li>
                    <li>connection: {JSON.parse(JSON.stringify(request.headers))["connection"]}</li>
                    <li>user-agent: {JSON.parse(JSON.stringify(request.headers))["user-agent"]}</li>
                    <li>content-type: {JSON.parse(JSON.stringify(request.headers))["content-type"]}</li>
                  </ul>
                </div>
                <div>
                  <p>Body: </p>
                  {/* <Body json={request.payload}/> */}
                </div>
              </li>
            </ul>
            
          )
        }
      </div>
    </div>
  )
};

export default BinPage;