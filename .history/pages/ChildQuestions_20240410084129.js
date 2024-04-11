import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ChildQuestions({question, onSelect}) {
  return (
    <>
      <Head>
        <title>CalmQuest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.mainContainer}>
                <Navbar />
                <div>
      <h2>{question}</h2>
      <button onClick={() => onSelect("Option A")}>Option A</button>
      <button onClick={() => onSelect("Option B")}>Option B</button>
      {/* Add more buttons for additional options as needed */}
    </div>
                <Tabbar />
        </div>
      </main>
    </>
  );
}