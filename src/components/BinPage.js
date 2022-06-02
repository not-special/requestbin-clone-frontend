import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dbOps from '../services/db';

const BinPage = () => {
  const [requests, setRequests] = useState([]);
  const { path } = useParams();
  const ulStyle = {
    listStyleType: 'none',
    borderStyle: 'solid',
    marginLeft: '25px',
    marginRight: '25px'
  };

  useEffect(() => {
    dbOps
      .getRequests(path)
      .then(data => {
        setRequests(data.requests);
      })
      .catch(error => {
        throw new Error ('could not fetch requests')
      })
  }, [path])

  if (requests.length === 0) {
    return (
      <div>
      <h2>Bin URL: </h2>
      <h3>{ path }</h3>
      <h4>Make a request to get started</h4>
      <h5>cURL</h5>
      <pre>
        curl -X POST -d &quot;fizz=buzz&quot; http://v1.requestbin.net/r/fot5ok5r
      </pre>
      <h5>PowerShell</h5>
      <pre>
      powershell -NoLogo -Command &quot;(New-Object System.Net.WebClient).DownloadFile(&apos;http://v1.requestbin.net/r/fot5ok5r&apos;, &apos;C:\Windows\Temp\fot5ok5r.txt&apos;)&quot;
      </pre>
    </div>
    )
  }

  return (
    <div>
      <h3>Request History for: {path}</h3>
      <div>
        { requests.map(request => 
            <ul key={request.id} style={ulStyle}>
              <li>
                <p><strong>HTTP:</strong> {request.http_method}</p>
                <div>
                  <p><strong>Headers:</strong></p>
                  <ul>
                    <li>host: {JSON.parse(JSON.stringify(request.headers))["host"]}</li>
                    <li>accept: {JSON.parse(JSON.stringify(request.headers))["accept"]}</li>
                    <li>connection: {JSON.parse(JSON.stringify(request.headers))["connection"]}</li>
                    <li>user-agent: {JSON.parse(JSON.stringify(request.headers))["user-agent"]}</li>
                    <li>content-type: {JSON.parse(JSON.stringify(request.headers))["content-type"]}</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Body:</strong></p>
                  <div><pre>{JSON.stringify(request.payload, null, 5)}</pre></div>
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