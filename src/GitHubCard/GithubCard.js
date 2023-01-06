import React from 'react'
import Card from "react-bootstrap/Card"
import Potato from 'potato.jpg'
function GithubCard() {
  return (
    <div className="card">
      <Card style={{ width:'18rem'}}>
            <Card.Img variant="top" src={Potato} />
          <Card.body>
              <Card.Title>Amanda</Card.Title>
              <Card.Text>
                I don't know.
              </Card.Text>
          </Card.body>
      </Card>
      </div>
  );
}
export default GithubCard;