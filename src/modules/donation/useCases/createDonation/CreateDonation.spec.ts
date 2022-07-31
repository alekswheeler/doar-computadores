import request from "supertest";
import { router } from "../../../../routes";

describe("Create Donation", ()=>{

  test("Should not be able to creat donation with missing required fields", async() => {

    const userData = {
      //name: "alex",
      email: "alex44.123@gmail.com",
      phone: "55123456789",
      zip: "10001",
      //city: "Baltimore",
      state: "MD",
      streetAddress: "Delancey St",
      //number: 80,
      complement: "Apartment",
      neighborhood: "ashhjasj",
      deviceCount: 2,
      devices: [
        {
          type: "screen",
          condition: "broken"
        },
        {
          type: "scanner",
          condition: "working"
        }
      ]
    }

    await request(router).post("/donation").send(userData).then(response => {
      expect(response.status).toBe(400);
      expect(JSON.parse(response.text)).toHaveProperty("errorMessage");
    });
  });

  //A mesangem de erro do email muda para cada email recebido
  test("Should not be able to create donation with invalid email", async ()=>{

    //Os emails comentados não são aceitos

    const userData = {
      name: "alex",
      email: "alex@gmail",
      // "email": "alexgmail.com",
      //"email": "alexgmail.com.",
      phone: "55123456789",
      zip: "10001",
      city: "Baltimore",
      state: "MD",
      streetAddress: "Delancey St",
      number: 80,
      complement: "Apartment",
      neighborhood: "ashhjasj",
      deviceCount: 2,
      devices: [
        {
          type: "screen",
          condition: "broken"
        },
        {
          type: "scanner",
          condition: "working"
        }
      ]
    }

    await request(router).post("/donation").send(userData).then(response => {
      expect(response.status).toBe(400);
      const resObj = JSON.parse(response.text);
      expect(resObj.error).toBe(true);
      expect(resObj).toHaveProperty("errorMessage");
    });
  })

  test("Should not be able to create donation with deviceCount from number of devices sent", async ()=>{

    const userData = {
      name: "alex",
      email: "alex44.123@gmail.com",
      phone: "55123456789",
      zip: "10001",
      city: "Baltimore",
      state: "MD",
      streetAddress: "Delancey St",
      number: 80,
      complement: "Apartment",
      neighborhood: "ashhjasj",
      deviceCount: 4,
      devices: [
        {
          type: "screen",
          condition: "broken"
        },
        {
          type: "scanner",
          condition: "working"
        }
      ]
    }

    await request(router).post("/donation").send(userData).then(response => {
      expect(response.status).toBe(400);
      const resObj = JSON.parse(response.text);
      expect(resObj.error).toBe(true);
      expect(resObj).toHaveProperty("errorMessage");
    });
  });

  test("Should not be able to create Donation without devices", async ()=>{
    const userData = {
      name: "alex",
      email: "alex44.123@gmail.com",
      phone: "55123456789",
      zip: "10001",
      city: "Baltimore",
      state: "MD",
      streetAddress: "Delancey St",
      number: 80,
      complement: "Apartment",
      neighborhood: "ashhjasj",
      deviceCount: 2,
    }

    await request(router).post("/donation").send(userData).then(response => {
      expect(response.status).toBe(400);
      const resObj = JSON.parse(response.text);
      expect(resObj.error).toBe(true);
      expect(resObj).toHaveProperty("errorMessage");
    });
  });

  test("Should not be able to create Donation with wrong types", async ()=>{

    const userData = {
      name: "alex",
      email: "alex44.123@gmail.com",
      phone: "55123456789",
      zip: "10001",
      city: "Baltimore",
      state: "MD",
      streetAddress: "Delancey St",
      number: 80,
      complement: "Apartment",
      neighborhood: "ashhjasj",
      deviceCount: 2,
      devices: [
        {
          type: "screennn",
          condition: "broken"
        },
        {
          type: "scanner",
          condition: "working"
        }
      ]
    }

    await request(router).post("/donation").send(userData).then(response => {
      expect(response.status).toBe(400);
      const resObj = JSON.parse(response.text);
      expect(resObj.error).toBe(true);
      expect(resObj).toHaveProperty("errorMessage");
    });
  });

  test("Should not be able to create donation with wrong phone number", async ()=>{

    //Os emails comentados não são aceitos
    const userData = {
      name: "alex",
      email: "alex44.123@gmail.com",
      phone: "551234",
      zip: "10001",
      city: "Baltimore",
      state: "MD",
      streetAddress: "Delancey St",
      number: 80,
      complement: "Apartment",
      neighborhood: "ashhjasj",
      deviceCount: 2,
      devices: [
        {
          type: "screen",
          condition: "broken"
        },
        {
          type: "scanner",
          condition: "working"
        }
      ]
    }

    await request(router).post("/donation").send(userData).then(response => {
      expect(response.status).toBe(400);
      const resObj = JSON.parse(response.text);
      expect(resObj.error).toBe(true);
      expect(resObj).toHaveProperty("errorMessage");
    });
  });

  test("Should be able to create donation", async ()=>{

    //Os emails comentados não são aceitos
    const userData = {
      name: "alex",
      email: "alex44.123@gmail.com",
      phone: "55123456789",
      zip: "10001",
      city: "Baltimore",
      state: "MD",
      streetAddress: "Delancey St",
      number: 80,
      complement: "Apartment",
      neighborhood: "ashhjasj",
      deviceCount: 2,
      devices: [
        {
          type: "screen",
          condition: "broken"
        },
        {
          type: "scanner",
          condition: "working"
        }
      ]
    }

  await request(router).post("/donation").send(userData).then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
  
});