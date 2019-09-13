import React from 'react';
import { Card } from 'semantic-ui-react';

export const SmurfCard = (props) => {
    const {name, age, height } = props.data;
    // console.log("SmurfCard Props: ", props)
    return(
    <>


     <Card className="smurf_card">
        <Card.Content>
            <Card.Header className="smurf_name" >
                <h2>{name}</h2>
            </Card.Header>

            <Card.Description className="smurf_info">age: {age}, height: {height}
            </Card.Description> 

        </Card.Content>
     </Card>
    </>
    )
}