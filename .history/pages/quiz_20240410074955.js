import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Quiz() {
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
                <div className={styles.questionOne} style={{left: 68, top: 279, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Merriweather', fontWeight: '400', wordWrap: 'break-word'}}>How are you today?</div>
                <div className="ButtonLarge" style={{width: 160, height: 48, paddingLeft: 37, paddingRight: 37, paddingTop: 12, paddingBottom: 12, left: 134, top: 598, position: 'absolute', background: '#006075', borderRadius: 20, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div className="Next" style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>Next</div>
                <div className="Group36" style={{height: 85, left: 268, top: 393, position: 'absolute'}}>
                <div className="Good" style={{left: 11, top: 63, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Good</div>
                <div className="SentimentSatisfied" style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="BoundingBox" style={{width: 60, height: 60, background: '#D9D9D9'}} />
                <div className="SentimentSatisfied" style={{width: 50, height: 50, background: '#3EC276'}}></div>
                </div>
                </div>
                <div className="Group37" style={{left: 353, top: 393, position: 'absolute'}}>
                <div className="Amazing" style={{left: 0, top: 63, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Amazing</div>
                <div className="SentimentExcited" style={{width: 60, height: 60, left: 2, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="BoundingBox" style={{width: 60, height: 60, background: '#D9D9D9'}} />
                <div className="SentimentExcited" style={{width: 50, height: 50, background: '#339967'}}></div>
                </div>
                </div>
                <div className="Group34" style={{height: 85, left: 98, top: 393, position: 'absolute'}}>
                <div className="Bad" style={{left: 16, top: 63, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Bad</div>
                <div className="SentimentDissatisfied" style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="BoundingBox" style={{width: 60, height: 60, background: '#D9D9D9'}} />
                <div className="SentimentDissatisfied" style={{width: 50, height: 50, background: '#FF7105'}}></div>
                </div>
                </div>
                <div className="Group33" style={{height: 85, left: 13, top: 393, position: 'absolute'}}>
                <div className="Awful" style={{left: 8, top: 63, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Awful</div>
                <div className="SentimentStressed" style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="BoundingBox" style={{width: 60, height: 60, background: '#D9D9D9'}} />
                <div className="SentimentStressed" style={{width: 50, height: 50, background: '#FF493B'}}></div>
                </div>
                </div>
                <div className="Group35" style={{height: 85, left: 183, top: 393, position: 'absolute'}}>
                <div className="Decent" style={{left: 5, top: 63, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Decent</div>
                <div className="SentimentNeutral" style={{width: 60, height: 60, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="Group31" style={{width: 415, height: 27, position: 'relative'}}>
                        <div className="Awful" style={{left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Awful</div>
                        <div className="Bad" style={{left: 96, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Bad</div>
                        <div className="Decent" style={{left: 169, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Decent</div>
                        <div className="Good" style={{left: 264, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Good</div>
                        <div className="Amazing" style={{left: 335, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Nunito', fontWeight: '400', wordWrap: 'break-word'}}>Amazing</div>
                </div>
                <div className="BoundingBox" style={{width: 60, height: 60, background: '#D9D9D9'}} />
                <div className="SentimentNeutral" style={{width: 50, height: 50, background: '#FFB023'}}></div>
                </div>
                </div>
           
                
                <Tabbar />
        </div>
      </main>
    </>
  );
}