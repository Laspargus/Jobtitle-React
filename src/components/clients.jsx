import React from "react";
import faker from "faker";
import Client from "./Client/client";
import pango from "../assets/img/pangolin.jpg";

class Clients extends React.Component {
  render() {
    let clientList = [];
    let i = 0;
    for (i; i < 10; i++) {
      let data = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        avatarImage: pango,
        job: faker.name.jobTitle(),
        id: faker.random.number(),
      };

      clientList.push(data);
    }

    let clients = clientList.map((client) => (
      <Client
        key={client.id}
        firstName={client.firstName}
        lastName={client.lastName}
        phoneNumber={client.phoneNumber}
        avatarImage={client.avatarImage}
        job={client.job}
      />
    ));

    return <>{clients}</>;
  }
}

export default Clients;
