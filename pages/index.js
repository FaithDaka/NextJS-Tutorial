import Head from 'next/head'
import { useState } from 'react'
import Form from '../components/Form'
import Layout from '../components/Layout'

export default function Home() {
  const [value, setValue] = useState('')

  const onSubmit = async(e) => {
    e.preventDefault();
    localStorage.setItem('Item', value);
    alert('Item added to to-do list :)');
    console.log('Triggered', value)
  }
  return (
    <Layout>
      <div>
        <Head>
          <title>To-do List</title>
          <meta name="description" content="A simple to-do list" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Form title='To-Do List' target={value} onHandleChange={(e)=>setValue(e.target.value)} handleSubmit={onSubmit} />
    </Layout>
  )
}
