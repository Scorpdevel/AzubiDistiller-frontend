import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Header from './components/header';
import ClientInput from './components/clientInput'
import RatingInput from './components/RatingInput';

export default function Home() {

  const getRequest = () => {
    fetch('http://localhost:8080/kunden/getAll')
        .then(response => response.json())
        .then(data => console.log(data))
  }

  const getRatingRequest = () => {
    fetch('http://localhost:8080/rating/getAll')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div className="container__bouth">
      <ClientInput getRequest={() => getRequest()}/>
      <RatingInput getRequest={() => getRatingRequest()} />
      </div>
    </div>
  )
}
