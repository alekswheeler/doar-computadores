import { ServerAliveUseCase } from "./ServerAliveUseCase"

describe("Server Alive", ()=>{
  it("Should be able to send server status information", ()=>{
    const serverAliveUseCase = new ServerAliveUseCase();

    const res = serverAliveUseCase.execute();

    expect(res).toHaveProperty("alive");
    expect(res.alive).toBe(true);
  });
})