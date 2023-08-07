"use client"; // This is a client component 

import { SimpleUI } from '../components/SimpleUI'
// import styles from './page.module.css'

export default function Home() {
  return (
    <SimpleUI rpcUrl="https://rpc.sentry-02.theta-testnet.polypore.xyz" />
  )
}

// rpcUrl="https://rpc.testnet.cudos.org/"