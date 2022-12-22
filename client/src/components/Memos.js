import { useState, useEffect } from "react";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
      console.log(memos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <>
      <p>Messages</p>
      {memos.map((memo) => {
        return (
          <div className="container-fluid" style={{ width: "100%" }}>
            <table
              key={memo.message}
              style={{
                "margin-bottom": "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      "background-color": "#96D4D4",
                      border: "1px solid white",
                      "border-collapse": "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      "background-color": "#96D4D4",
                      border: "1px solid white",
                      "border-collapse": "collapse",
                      padding: "7px",
                      width: "800px",
                    }}
                  >
                    {Date(memo.timestamp)}
                  </td>
                  <td
                    style={{
                      "background-color": "#96D4D4",
                      border: "1px solid white",
                      "border-collapse": "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {String(memo.message)}
                  </td>
                  <td
                    style={{
                      "background-color": "#96D4D4",
                      border: "1px solid white",
                      "border-collapse": "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {String(memo.from)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
export default Memos;
