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
                <div className={styles.questionOne}>
                <div className="Mascot1" style={{width: 144.39, height: 213.54, paddingLeft: 0.65, paddingRight: 0.65, left: 143, top: 689, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Mascot1" style={{width: 143.09, height: 213.55, position: 'relative'}}>
                <div className="Vector" style={{width: 74.17, height: 42.24, left: 68.92, top: 119.41, position: 'absolute', background: '#49962E', border: '1.79px black solid'}}></div>
                <div className="Vector" style={{width: 74.19, height: 42.24, left: 0, top: 119.40, position: 'absolute', background: '#49962E', border: '1.79px black solid'}}></div>
                <div className="Group" style={{width: 8.36, height: 104.49, left: 67.95, top: 83.73, position: 'absolute'}}>
                        <div className="Vector" style={{width: 6.65, height: 102.78, left: 0.85, top: 0.86, position: 'absolute', background: '#49962E'}}></div>
                        <div className="Vector" style={{width: 8.36, height: 104.49, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                </div>
                <div className="Group" style={{width: 121.31, height: 127.38, left: 10.91, top: 0, position: 'absolute'}}>
                        <div className="Group" style={{width: 27.07, height: 52.72, left: 48.32, top: 74.66, position: 'absolute'}}>
                        <div className="Vector" style={{width: 24.70, height: 49.70, left: 1.18, top: 1.51, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 27.07, height: 52.72, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 35.02, height: 41.54, left: 22.17, top: 73.83, position: 'absolute'}}>
                        <div className="Vector" style={{width: 32.62, height: 39.15, left: 1.20, top: 1.20, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 35.02, height: 41.54, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 50.73, height: 28.51, left: 0.16, top: 62.11, position: 'absolute'}}>
                        <div className="Vector" style={{width: 47.82, height: 26.12, left: 1.44, top: 1.21, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 50.73, height: 28.51, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 49.55, height: 29.33, left: 0, top: 38.64, position: 'absolute'}}>
                        <div className="Vector" style={{width: 46.72, height: 26.94, left: 1.40, top: 1.20, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 49.55, height: 29.33, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 33.45, height: 43.75, left: 20.99, top: 12.33, position: 'absolute'}}>
                        <div className="Vector" style={{width: 31.04, height: 41.26, left: 1.21, top: 1.24, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 33.45, height: 43.75, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 27.07, height: 52.72, left: 45.89, top: 0, position: 'absolute'}}>
                        <div className="Vector" style={{width: 24.70, height: 49.70, left: 1.19, top: 1.51, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 27.07, height: 52.72, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 35.01, height: 41.54, left: 64.08, top: 12, position: 'absolute'}}>
                        <div className="Vector" style={{width: 32.62, height: 39.15, left: 1.21, top: 1.20, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 35.01, height: 41.54, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 50.73, height: 28.51, left: 70.41, top: 36.74, position: 'absolute'}}>
                        <div className="Vector" style={{width: 47.82, height: 26.12, left: 1.45, top: 1.20, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 50.73, height: 28.51, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 49.55, height: 29.33, left: 71.76, top: 59.41, position: 'absolute'}}>
                        <div className="Vector" style={{width: 46.72, height: 26.94, left: 1.40, top: 1.19, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 49.55, height: 29.33, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 33.45, height: 43.75, left: 66.84, top: 71.31, position: 'absolute'}}>
                        <div className="Vector" style={{width: 31.04, height: 41.26, left: 1.21, top: 1.24, position: 'absolute', background: '#FAE033'}}></div>
                        <div className="Vector" style={{width: 33.45, height: 43.75, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                </div>
                <div className="Group" style={{width: 61.12, height: 61.12, left: 40.99, top: 33.13, position: 'absolute'}}>
                        <div className="Group" style={{width: 61.12, height: 61.12, left: 0, top: 0, position: 'absolute'}}>
                        <div className="Vector" style={{width: 58.96, height: 58.96, left: 1.08, top: 1.08, position: 'absolute', background: '#C4996C'}}></div>
                        <div className="Vector" style={{width: 61.12, height: 61.12, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 40.30, height: 16.05, left: 9.88, top: 27.49, position: 'absolute'}}>
                        <div className="Group" style={{width: 40.30, height: 11.74, left: 0, top: 0, position: 'absolute'}}>
                        <div className="Vector" style={{width: 8.14, height: 8.14, left: 3.94, top: 0, position: 'absolute', background: 'black'}}></div>
                        <div className="Vector" style={{width: 5.76, height: 2.94, left: 0, top: 8.80, position: 'absolute', background: '#B37F4D'}}></div>
                        <div className="Vector" style={{width: 5.76, height: 2.94, left: 34.54, top: 8.80, position: 'absolute', background: '#B37F4D'}}></div>
                        <div className="Vector" style={{width: 8.14, height: 8.14, left: 29.28, top: 0, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Vector" style={{width: 9.91, height: 4.91, left: 15.73, top: 11.14, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div className="Group" style={{width: 21.93, height: 24.76, left: 5.87, top: 6.48, position: 'absolute'}}>
                        <div className="Vector" style={{width: 18.83, height: 15.78, left: 3.10, top: 0, position: 'absolute', background: '#FFDFC0'}}></div>
                        <div className="Vector" style={{width: 3.88, height: 6.38, left: 0, top: 18.38, position: 'absolute', background: '#FFDFC0'}}></div>
                        </div>
                </div>
                <div className="HowAreYouToday" style={{left: 68, top: 279, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Merriweather', fontWeight: '400', wordWrap: 'break-word'}}>How are you today?</div>
                <div className="ButtonLarge" style={{width: 160, height: 48, paddingLeft: 37, paddingRight: 37, paddingTop: 12, paddingBottom: 12, left: 134, top: 598, position: 'absolute', background: '#006075', borderRadius: 20, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div className="Next" style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>Next</div>
                </div>
                <div className="ProgressBar4" style={{width: 44, height: 8, left: 193, top: 574, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                <div className="Circle" style={{width: 8, height: 8, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="Ellipse2" style={{width: 8, height: 8, background: '#006075', borderRadius: 9999}} />
                </div>
                <div className="Circle" style={{width: 8, height: 8, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="Ellipse2" style={{width: 8, height: 8, background: '#D9D9D9', borderRadius: 9999}} />
                </div>
                <div className="Circle" style={{width: 8, height: 8, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="Ellipse2" style={{width: 8, height: 8, background: '#D9D9D9', borderRadius: 9999}} />
                </div>
                <div className="Circle" style={{width: 8, height: 8, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="Ellipse2" style={{width: 8, height: 8, background: '#D9D9D9', borderRadius: 9999}} />
                </div>
                </div>
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

      </main>
    </>
  );
}