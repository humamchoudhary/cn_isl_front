"use client";
import { getResData } from "@/functions/res";
import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
export default function Reservation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resData = await getResData();
      setData(resData);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-3xl py-30 sm:py-48 lg:py-52 flex flex-col justify-center items-center">
      <h1>Reservations</h1>
      <Flex flexWrap="wrap" gap={4}>
        {data.map((item) => (
          <Box
            key={item.id}
            p={4}
            borderWidth={1}
            borderRadius={8}
            boxShadow="md"
            maxW="sm"
          >
            <Text fontWeight="bold">
              Reservation Name: {item.reservationname}
            </Text>
            <Text>Date: {item.date}</Text>
            <Text>Start Time: {item.startTime}</Text>
            <Text>End Time: {item.endTime}</Text>
            <Text>Recursive: {item.recursive.toString()}</Text>
          </Box>
        ))}
      </Flex>

      <Link href="/teacher/login">Teacher login</Link>
    </div>
  );
}
