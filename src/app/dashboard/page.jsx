"use client"
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/button/Button'





const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() =>{
    const getData = async() => {
      setIsLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 }
      });
  
      if (!res.ok) {
        setErr(true)
      }
      const data = await res.json();
  
      setData(data);
      setIsLoading(false);
    }

    getData(); 
  }, [])

  console.log(data);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard