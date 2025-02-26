"use client";
import React, { useEffect, useState } from "react";

const DisplayAge = () => {
  const [age, setAge] = useState<number>();
  useEffect(() => {
    const getAge = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if ((day < 27 && month === 3) || month < 3) {
        setAge(year - 2003 - 1);
      } else {
        setAge(year - 2003);
      }
    };

    getAge();
  }, []);
  return <span>{age}</span>;
};

export default DisplayAge;
