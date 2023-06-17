import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const PaymentHistory = () => {
  const [payment, SetPayment] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/payment").then(res => {
      SetPayment(res.data);
    });
  }, [axiosSecure]);
  console.log(payment);
  return (
    <div className="w-full p-8">
      <SectionTitle title="Payment History" />

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="table  w-full  text-lg">
          {/* head */}
          <thead className="uppercase  ">
            <tr>
              <th>sl</th>
              <th>class name</th>
              <th>transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payment?.map((myCourse, index) => {
              const { _id, className, transactionId } = myCourse;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>

                  <td>{className}</td>
                  <td>{transactionId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
