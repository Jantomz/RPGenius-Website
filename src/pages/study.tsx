import Head from "next/head";
import { useState } from "react";
import React from "react";
import jsPDF from "jspdf";
import Link from "next/link";

let questions = [""];
let answers = [""];
let index = 0;
let coinsTemp = 0;

let stardew = false;
let lofi = false;
let lofi2 = false;
let beach = false;
let forest = false;
let space = false;
let home = false;

export default function Study() {
  const [level, setLevel] = useState(0);
  const [coins, setCoins] = useState(0);
  const [quizMode, setQuizMode] = useState(true);
  const [characterImg, setCharacterImg] = useState("base.gif");
  const [bar, setBar] = useState("h-4 w-[1px] rounded-sm bg-green-300");
  const [showSprites, setShowSprites] = useState(false);
  const [mp3URL, setMp3URL] = useState("/underture.mp3");
  const [name, setName] = useState("Junior");
  const [officiate, setOfficiate] = useState(false);
  const [mainBg, setMainBg] = useState("beach.png");

  let levelTemp = 0;
  let workLength = 0;
  let number = workLength;
  const [timer, setTimer] = useState(convertSeconds(workLength));
  const [timerRunning, setTimerRunning] = useState(false);
  const [onWork, setOnWork] = useState(true);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [review, setReview] = useState(false);
  const [qMode, setQMode] = useState(true);

  const handleQ = (event: any) => {
    setQuestion(event.target.value);
  };

  const handleA = (event: any) => {
    setAnswer(event.target.value);
  };

  const handleMusic = (url: any) => {
    if (typeof document !== "undefined") {
      let audioElement0 = document.getElementById("backtrack");
      if (audioElement0 != null) {
        audioElement0.setAttribute("id", "backtrack");
        audioElement0.setAttribute("src", url);
        audioElement0.setAttribute("autoplay", "autoplay");
        audioElement0.setAttribute("loop", "loop");
      }
    }
  };

  const handleSubmit = () => {
    handleMusic(mp3URL);
    const timerInterval = setInterval(changeTime, 1000);
    setTimerRunning(true);
    setOnWork(false);

    let i = 0;
    function move() {
      if (i == 0) {
        i = 1;
        if (typeof document !== "undefined") {
          let elem = document.getElementById("myBar");

          let width = 1;
          let id = setInterval(frame, 1);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
              levelTemp++;
              if (
                levelTemp == 3 ||
                levelTemp == 5 ||
                levelTemp == 8 ||
                levelTemp == 10 ||
                levelTemp == 15 ||
                levelTemp == 20 ||
                levelTemp == 30 ||
                levelTemp == 40 ||
                levelTemp == 50
              ) {
                if (typeof document !== "undefined") {
                  const audioElement0 = document.createElement("audio");
                  audioElement0.setAttribute("src", "gain.mp3");
                  audioElement0.setAttribute("volume", "0.4");
                  audioElement0.play();
                  setShowSprites(true);
                }
              }
              setLevel(levelTemp);
            } else {
              width = width + 0.05 / (levelTemp * 0.1 + 1);
              if (elem != null) {
                elem.style.width = width + "%";
              }
            }
          }
        }
      }
    }
    function changeTime() {
      number++;
      let stringNum = convertSeconds(number);
      setTimer(stringNum);
      move();
      if (number % 10 == 0) {
        console.log(coinsTemp);
        coinsTemp = coinsTemp + 80; //CHANGE
        setCoins(coinsTemp);
      }
    }
  };

  function convertSeconds(seconds: number) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60);
    let secondsOnTimer = seconds % 60;
    let formatted =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      secondsOnTimer.toString().padStart(2, "0");
    return formatted;
  }

  function handleQuizSubmit() {
    answers.push(answer);
    questions.push(question);
    console.log(questions);
    console.log(answers);
    setAnswer("");
    setQuestion("");
    console.log(answers.length);
  }

  function handleReview() {
    setReview(!review);
    questions.shift();
    answers.shift();
    shuffle(answers, questions);
    console.log(questions);
    console.log(answers);
  }

  function handleTurn() {
    setQMode(false);
  }

  function handleNext() {
    if (index < answers.length - 1) {
      index++;
      setQMode(true);
    } else {
      alert(
        "There are no more questions. You gained " +
          answers.length * 100 +
          " coins!",
      );
      console.log(answers.length);
      coinsTemp = coinsTemp + answers.length * 100;
      setCoins(coinsTemp);
      setQuestion("");
      setAnswer("");
      setReview(false);
      setQMode(true);
      answers = [""];
      questions = [""];
      index = 0;
    }
  }

  function shuffle(obj1: any, obj2: any) {
    let index = obj1.length;
    let rnd, tmp1, tmp2;

    while (index) {
      rnd = Math.floor(Math.random() * index);
      index -= 1;
      tmp1 = obj1[index];
      tmp2 = obj2[index];
      obj1[index] = obj1[rnd];
      obj2[index] = obj2[rnd];
      obj1[rnd] = tmp1;
      obj2[rnd] = tmp2;
    }
  }

  function endSession() {
    let doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [12, 8],
    });

    if (typeof document !== "undefined") {
      let imgData = document.createElement("img");
      imgData.setAttribute("src", characterImg);
      doc.addImage(imgData, "JPEG", 4, 3, 4, 4);
    }

    doc.setFont("times");
    doc.setTextColor(255, 0, 0);
    doc.setFontSize(30);
    doc.text("This Certificate from RPGenius is Presented to", 6, 1, {
      align: "center",
    });

    doc.setTextColor(133, 0, 0);
    doc.setFont("times", "bold");

    doc.text(name + " and You!", 6, 1.5, {
      align: "center",
    });

    doc.setFont("times", "normal");

    doc.setTextColor(0, 0, 0);

    doc.setFontSize(10);

    doc.setLineWidth(0.01);

    doc.line(4, 1.7, 8, 1.7, "S");

    doc.text(" You and " + name + " studied for " + timer + "!", 6, 2, {
      align: "center",
    });
    doc.text("You got " + coins + " coins and got to level " + level, 6, 2.2, {
      align: "center",
    });
    doc.setFontSize(16);
    doc.text("This is one of " + name + "'s favourite outfits!", 6, 2.8, {
      align: "center",
    });

    doc.setFontSize(10);
    doc.text("\u00A9RPGenius", 11, 7.5, {
      align: "center",
    });

    doc.save(name + ".pdf");
    location.reload();
  }

  return (
    <>
      <Head>
        <title>RPGenius</title>
        <meta name="description" content="RPGenius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-sky bg-black">
        <audio id="backtrack" autoPlay></audio>
        <button
          className="p-3"
          onClick={(e) => {
            if (typeof document !== "undefined") {
              let audioElement0 = document.getElementById("backtrack");
              if (audioElement0 != null) {
                audioElement0.setAttribute("id", "backtrack");
                audioElement0.setAttribute("src", "");
              }
            }
          }}
        >
          Disable Audio
        </button>
        <button
          className="fixed right-4 top-4 rounded-md bg-bone p-2 text-ourBlue drop-shadow-md hover:bg-white active:text-black"
          onClick={(e) => {
            endSession();
          }}
        >
          End Session
        </button>
        <h1 className="p-12 text-center text-9xl font-bold text-green-500 drop-shadow-md max-md:text-6xl">
          RPGenius
        </h1>

        <div className="flex items-center justify-center gap-24 max-md:gap-4 max-sm:block">
          <div className=" flex justify-center py-24 max-sm:py-6">
            <div>
              <div className="flex justify-center">
                {officiate ? (
                  <div className="border-b-2 text-2xl font-bold max-lg:text-sm">
                    {name}
                  </div>
                ) : (
                  <div className="max-xl:flex max-xl:flex-col max-xl:justify-center">
                    <input
                      placeholder="Junior"
                      className="w-1/3 border-b-2 bg-transparent text-center text-xl max-xl:m-auto max-xl:w-1/2 max-md:text-sm"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                    <button
                      onClick={(e) => {
                        setOfficiate(true);
                      }}
                      className="active:bg-blue m-2 rounded-md bg-bone p-2 drop-shadow-md hover:bg-white active:text-black"
                    >
                      Officiate Name
                    </button>
                  </div>
                )}
              </div>
              <div id="mainImg" className={mainBg}>
                <img src={characterImg} className="w-96"></img>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 text-3xl font-bold max-md:p-4 max-md:text-xl">
              <div>Level: {level}</div>
              <div id="myProgress">
                <div id="myBar"></div>
              </div>
              <div>Coins: {coins}</div>
              <div className="flex">
                <section className="">
                  <div id="timer-elem" className="text-1xl font-bold">
                    Study Time: {timer}
                  </div>
                  {onWork ? (
                    <div>
                      <button className="fixed top-10 z-10 rounded-md bg-blue-400/80 p-2 text-xl font-bold drop-shadow-md hover:bg-green-300/90 active:bg-green-900/40">
                        <Link href="/">Go to Homepage</Link>
                      </button>

                      <button
                        onClick={handleSubmit}
                        className="fixed left-1/2 top-1/2 z-0 h-full w-full -translate-x-2/4 -translate-y-2/4 rounded-sm bg-green-200/80 text-9xl font-bold hover:bg-green-300/90 active:bg-green-900/40 max-md:text-6xl"
                      >
                        Click to Start Study Session
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </section>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 bg-base max-lg:m-4">
            <button
              className="w-full rounded-md bg-bone p-2 text-center text-2xl font-bold hover:bg-beige active:bg-white"
              onClick={(e) => setShowSprites(!showSprites)}
            >
              {showSprites ? "Hide Juniors" : "Show Juniors"}
            </button>
            <div
              className={
                showSprites
                  ? "min-w-72 flex max-h-80 flex-wrap justify-center overflow-auto p-24 max-md:p-6"
                  : "hidden"
              }
            >
              <a
                onClick={(e) => {
                  setCharacterImg("base.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level >= 0 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44  max-md:h-12 max-md:w-12"
                  src="base.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("koala.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 2 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12"
                  src="koala.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("helmet.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 4 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="helmet.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("tophat.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 7 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="tophat.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("buckethat.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 9 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="buckethat.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("blood.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 14 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="blood.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("beard.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 19 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="beard.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("knight.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 29 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="knight.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("ghost.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 39 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="ghost.gif"
                ></img>
              </a>
              <a
                onClick={(e) => {
                  setCharacterImg("spooky.gif");
                  if (typeof document !== "undefined") {
                    const audioElement0 = document.createElement("audio");
                    audioElement0.setAttribute("src", "select.mp3");
                    audioElement0.play();
                  }
                }}
                className={level > 49 ? "show" : "hidden"}
              >
                <img
                  className="h-48 w-44 max-md:h-12 max-md:w-12 "
                  src="spooky.gif"
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 text-center text-6xl">Shop</div>
        <div className="m-auto flex w-3/4 flex-wrap justify-center gap-8 font-bold">
          <button
            className="rounded-md bg-green-200 p-2"
            onClick={(e) => {
              handleMusic("underture.mp3");
              if (typeof document !== "undefined") {
                const audioElement0 = document.createElement("audio");
                audioElement0.setAttribute("src", "switch.mp3");
                audioElement0.play();
              }
            }}
          >
            Play Underture Backtrack
          </button>
          {stardew ? (
            <button
              className="rounded-md bg-green-200 p-2"
              onClick={(e) => {
                if (typeof document !== "undefined") {
                  const audioElement0 = document.createElement("audio");
                  audioElement0.setAttribute("src", "switch.mp3");
                  audioElement0.play();
                }
                handleMusic("stardewremix.mp3");
              }}
            >
              Play Stardew Backtrack
            </button>
          ) : (
            <button
              className="rounded-md bg-beige p-2"
              onClick={(e) => {
                if (coins >= 800) {
                  handleMusic("stardewremix.mp3");
                  coinsTemp = coinsTemp - 800;
                  setCoins(coinsTemp);
                  stardew = true;
                }
              }}
            >
              Purchase Stardew Valley Remix Backtrack: 800c
            </button>
          )}

          {lofi ? (
            <button
              className="rounded-md bg-green-200 p-2"
              onClick={(e) => {
                if (typeof document !== "undefined") {
                  const audioElement0 = document.createElement("audio");
                  audioElement0.setAttribute("src", "switch.mp3");
                  audioElement0.play();
                }
                handleMusic("lofi.mp3");
              }}
            >
              Play Lofi Backtrack
            </button>
          ) : (
            <button
              className="rounded-md bg-beige p-2"
              onClick={(e) => {
                if (coins >= 1000) {
                  handleMusic("lofi.mp3");
                  coinsTemp = coinsTemp - 1000;
                  setCoins(coinsTemp);
                  lofi = true;
                }
              }}
            >
              Purchase Lofi Backtrack: 1000c
            </button>
          )}
          {lofi2 ? (
            <button
              className="rounded-md bg-green-200 p-2"
              onClick={(e) => {
                if (typeof document !== "undefined") {
                  const audioElement0 = document.createElement("audio");
                  audioElement0.setAttribute("src", "switch.mp3");
                  audioElement0.play();
                }
                handleMusic("lofi2.mp3");
              }}
            >
              Play Lofi 2 Backtrack
            </button>
          ) : (
            <button
              className="rounded-md bg-beige p-2 "
              onClick={(e) => {
                if (coins >= 1000) {
                  handleMusic("lofi2.mp3");
                  coinsTemp = coinsTemp - 1000;
                  setCoins(coinsTemp);
                  lofi2 = true;
                }
              }}
            >
              Purchase Lofi 2 Backtrack: 1000c
            </button>
          )}
          {beach ? (
            <button
              className="rounded-md bg-green-200 p-2"
              onClick={(e) => {
                setMainBg(
                  "bg-beach no-repeat bg-center bg-origin-border m-8 bg-cover",
                );
              }}
            >
              Use Beach Backdrop
            </button>
          ) : (
            <button
              className="rounded-md bg-beige p-2"
              onClick={(e) => {
                if (coins >= 1000) {
                  setMainBg(
                    "bg-beach no-repeat bg-center bg-origin-border m-8 bg-cover",
                  );
                  coinsTemp = coinsTemp - 1000;
                  setCoins(coinsTemp);
                  beach = true;
                }
              }}
            >
              Purchase Beach Backdrop: 1000c
            </button>
          )}
          {space ? (
            <button
              className="rounded-md bg-green-200 p-2"
              onClick={(e) => {
                setMainBg(
                  "bg-space no-repeat bg-center bg-origin-border m-8 bg-cover",
                );
              }}
            >
              Use Space Backdrop
            </button>
          ) : (
            <button
              className="rounded-md bg-beige p-2"
              onClick={(e) => {
                if (coins >= 1000) {
                  setMainBg(
                    "bg-space no-repeat bg-center bg-origin-border m-8 bg-cover",
                  );
                  coinsTemp = coinsTemp - 1000;
                  setCoins(coinsTemp);
                  space = true;
                }
              }}
            >
              Purchase Space Backdrop: 1000c
            </button>
          )}
          {forest ? (
            <button
              className="rounded-md bg-green-200 p-2"
              onClick={(e) => {
                setMainBg(
                  "bg-forest no-repeat bg-center bg-origin-border m-8 bg-cover",
                );
              }}
            >
              Use Forest Backdrop
            </button>
          ) : (
            <button
              className="rounded-md bg-beige p-2 "
              onClick={(e) => {
                if (coins >= 1000) {
                  setMainBg(
                    "bg-forest no-repeat bg-center bg-origin-border m-8 bg-cover",
                  );
                  coinsTemp = coinsTemp - 1000;
                  setCoins(coinsTemp);
                  forest = true;
                }
              }}
            >
              Purchase Forest Backdrop: 1000c
            </button>
          )}
          {home ? (
            <button
              className="rounded-md bg-green-200 p-2 "
              onClick={(e) => {
                setMainBg(
                  "bg-home no-repeat bg-center bg-origin-border m-8 bg-cover",
                );
              }}
            >
              Use Home Backdrop
            </button>
          ) : (
            <button
              className="rounded-md bg-beige p-2 "
              onClick={(e) => {
                if (coins >= 1000) {
                  setMainBg(
                    "bg-home no-repeat bg-center bg-origin-border m-8 bg-cover",
                  );
                  coinsTemp = coinsTemp - 1000;
                  setCoins(coinsTemp);
                  home = true;
                }
              }}
            >
              Purchase Home Backdrop: 1000c
            </button>
          )}
        </div>

        <div className="pt-16">
          <div className="bg-green-100/20 p-8 text-center text-7xl font-bold">
            Self Quiz
          </div>

          {!review ? (
            <div className="w-full pt-3">
              <div className="flex bg-green-100/20 pb-20 pt-20 max-lg:flex-col">
                <div className="mx-auto flex w-1/3 flex-col items-center justify-center rounded-xl bg-ourBlue p-10 max-xl:w-4/5 max-md:p-4">
                  <label
                    htmlFor="question"
                    className="text-4xl max-sm:text-xl lg:text-5xl"
                  >
                    Question:
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    value={question}
                    onChange={handleQ}
                    className="mt-8 h-32 w-5/6 rounded-md bg-bone p-2"
                  ></textarea>
                </div>
                <div className="mx-auto flex h-full flex-col items-center justify-center py-48 text-center max-lg:py-8">
                  <div>
                    You have {answers.length - 1} questions in your deck
                  </div>

                  {question.length > 0 && answer.length > 0 ? (
                    <div>
                      <button
                        className="m-10 rounded-md bg-bone p-4 drop-shadow-md hover:bg-green-400"
                        onClick={handleQuizSubmit}
                        id="submitButton"
                      >
                        Submit Card
                      </button>
                    </div>
                  ) : null}
                  {answers.length > 1 ? (
                    <div>
                      <button
                        onClick={handleReview}
                        className="m-10 rounded-md bg-bone p-4 drop-shadow-md hover:bg-green-400"
                      >
                        Review
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="mx-auto flex w-1/3 flex-col items-center justify-center rounded-xl bg-ourBlue p-10 max-xl:w-4/5 max-md:p-4">
                  <label
                    htmlFor="answer"
                    className="pb-3 text-4xl max-sm:text-xl lg:text-5xl"
                  >
                    Answer:
                  </label>
                  <textarea
                    id="answer"
                    name="answer"
                    value={answer}
                    onChange={handleA}
                    className="mt-8 h-32 w-5/6 rounded-md bg-bone p-2"
                  ></textarea>
                </div>
              </div>
              <p id="questionUpload"></p>
              <p id="answerUpload"></p>
            </div>
          ) : (
            <div className="bg-greenish m-auto mt-32 w-3/4">
              {qMode ? (
                <div>
                  <div className="p-8 text-center text-5xl">Question</div>
                  <div className="rounded-md bg-blue-200/30 p-8 text-center text-4xl font-bold text-bone max-md:text-bone">
                    {questions[index]?.endsWith("?")
                      ? questions[index]
                      : `${questions[index]}?`}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleTurn}
                      className=" m-8 bg-bone p-8 text-ourBlue drop-shadow-md hover:bg-green-400"
                    >
                      Reveal Answer
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="p-8 text-center text-5xl ">Answer</div>
                  <div className="rounded-md bg-blue-200/30 p-8 text-center text-4xl font-bold text-bone max-md:text-bone">
                    {answers[index]}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleNext}
                      className=" m-8 bg-bone p-8 text-ourBlue drop-shadow-md hover:bg-green-400"
                    >
                      Next Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <footer className="bg-black p-12 text-center text-bone">
        Made With &#10084; by the JARTH JR Team
      </footer>
    </>
  );
}
