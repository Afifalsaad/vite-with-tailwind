import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data Processing
  const studentsData = marksData.map((studentData) => {
    const data = {
      id: studentData.id,
      name: studentData.name,
      class: studentData.class,
      physics: studentData.results.physics,
      chemistry: studentData.results.chemistry,
      math: studentData.results.math,
    };

    const avg =
      (studentData.results.physics + studentData.results.chemistry + studentData.results.math) / 3;
    data.avg = avg;

    return data;
  });
;

  return <div>
    <BarChart width={500} height={400} data={studentsData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={'avg'} fill='yellow'></Bar>
        <Bar dataKey={'chemistry'} fill='red'></Bar>
    </BarChart>
  </div>;
};

export default MarksChart;
