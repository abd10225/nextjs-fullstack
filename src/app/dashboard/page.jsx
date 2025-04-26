"use client"
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/button/Button'
import useSWR from 'swr'





const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setErr] = useState(false);

  // useEffect(() =>{
  //   const getData = async() => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       next: { revalidate: 60 }
  //     });
  
  //     if (!res.ok) {
  //       setErr(true)
  //     }
  //     const data = await res.json();
  
  //     setData(data);
  //     setIsLoading(false);
  //   }

  //   getData(); 
  // }, [])

  const fetcher = (...args)=> fetch(...args).then(res =>res.json())

  const {data, error, idLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher) 

  console.log(data);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard