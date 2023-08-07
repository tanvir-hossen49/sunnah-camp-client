import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const PaymentHistory = () => {
  const [payment, setPayment] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await axiosSecure.get("/payment");
        setPayment(response.data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };
    fetchPaymentData();
  }, [axiosSecure]);

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
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {payment?.map((myCourse, index) => {
              const { _id, className, transactionId, date } = myCourse;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>

                  <td>{className}</td>
                  <td>{transactionId}</td>
                  <td>{date}</td>
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
