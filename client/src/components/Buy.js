import { ethers } from "ethers";
const Buy = ({ state, account }) => {
  const buyChai = async (event) => {
    event.preventDefault();

    const { contract } = state;

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name);
    console.log(message);
    const coffeeTxn = await contract.buyCoffee(name, message, {
      value: ethers.utils.parseEther("0.001"),
    });

    await coffeeTxn.wait();

    console.log("mined ", coffeeTxn.hash);

    console.log("coffee purchased!");
  };
  return (
    <>
      <div class="container-md" style={{ width: "50%" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default Buy;
