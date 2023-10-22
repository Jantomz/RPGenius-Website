import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const questions = [""];
const answers = [""];
let index = 0;

export default function Home() {
  const [level, setLevel] = useState(0);
  const [hours, setHours] = useState("");
  const [coins, setCoins] = useState(0);
  const [quizMode, setQuizMode] = useState(true);
  const [characterImg, setCharacterImg] = useState("base.gif");
  const [bar, setBar] = useState("h-4 w-[1px] rounded-sm bg-green-300");
  const [showSprites, setShowSprites] = useState(false);
  const mp3URL = "/underture.mp3";

  let coinsTemp = 0;
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

  const handleSubmit = () => {
    if (typeof document !== "undefined") {
      const audioElement0 = document.createElement("audio");
      audioElement0.setAttribute("src", mp3URL);
      audioElement0.setAttribute("autoplay", "autoplay");
      audioElement0.setAttribute("loop", "loop");
      audioElement0.play();
    }

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
                }
              }
              setLevel(levelTemp);
            } else {
              width = width + 0.05 / (levelTemp * 0.3 + 1);
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
        coinsTemp = coinsTemp + 30;
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
      alert("There are no more questions.");
      setQuestion("");
      setAnswer("");
      setReview(false);
      setQMode(true);
      setLevel(levelTemp);
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

  return (
    <>
      <Head>
        <title>RPGenius</title>
        <meta name="description" content="RPGenius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-ourBlue">
        <h1 className="p-24 text-center text-7xl font-bold">RPGenius</h1>
        <div className="flex items-center justify-center gap-24">
          <div className=" flex justify-center py-24">
            <img src={characterImg} className="w-96"></img>
            <div className="flex flex-col justify-center gap-8 text-3xl font-bold">
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
                    <button
                      onClick={handleSubmit}
                      className="fixed left-1/2 top-1/2 h-full w-full -translate-x-2/4 -translate-y-2/4 rounded-sm bg-green-500/50 text-9xl font-bold hover:bg-green-600/40 active:bg-green-900/40"
                    >
                      Start Study Session
                    </button>
                  ) : (
                    <div></div>
                  )}
                </section>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              className="bg-bone w-full rounded-md p-2 text-center text-2xl font-bold"
              onClick={(e) => setShowSprites(!showSprites)}
            >
              {showSprites ? "Hide Juniors" : "Show Juniors"}
            </button>
            <div
              className={
                showSprites
                  ? "min-w-72 flex max-h-80 flex-wrap justify-center overflow-auto p-24"
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
                <img className="h-48 w-44" src="base.gif"></img>
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
                <img className="h-48 w-44" src="koala.gif"></img>
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
                <img className="h-48 w-44 " src="helmet.gif"></img>
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
                <img className="h-48 w-44 " src="tophat.gif"></img>
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
                <img className="h-48 w-44 " src="buckethat.gif"></img>
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
                <img className="h-48 w-44 " src="blood.gif"></img>
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
                <img className="h-48 w-44 " src="beard.gif"></img>
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
                <img className="h-48 w-44 " src="knight.gif"></img>
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
                <img className="h-48 w-44 " src="ghost.gif"></img>
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
                <img className="h-48 w-44 " src="spooky.gif"></img>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-16">
          {!review ? (
            <div className="bg-mintWhite w-full pt-3">
              <div className="bg-darkGreen m-12 mt-32 flex rounded-2xl pb-20 pt-20 max-lg:flex-col">
                <div className="bg-minty mx-auto flex w-1/3 flex-col items-center justify-center rounded-xl p-10 max-xl:w-4/5 max-md:p-4">
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
                    className="bg-basWhite mt-8 h-32 w-5/6 rounded-md p-2"
                  ></textarea>
                </div>
                <div className="mx-auto flex h-full flex-col items-center justify-center py-48 text-center max-lg:py-8">
                  <div>
                    You have {answers.length - 1} questions in your deck
                  </div>

                  {question.length > 0 && answer.length > 0 ? (
                    <div>
                      <button
                        className="bg-veryLight hover:bg-greenish m-10 rounded-md p-4"
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
                        className="bg-veryLight hover:bg-greenish m-10 rounded-md p-4"
                      >
                        Review
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="bg-minty mx-auto flex w-1/3 flex-col items-center justify-center rounded-xl p-10 max-xl:w-4/5 max-md:p-4">
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
                    className="bg-basWhite mt-8 h-32 w-5/6 rounded-md p-2"
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
                  <div className="bg-midDarkGreen text-veryLight rounded-md p-8 text-center text-4xl max-md:text-base">
                    {questions[index]?.endsWith("?")
                      ? questions[index]
                      : `${questions[index]}?`}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleTurn}
                      className=" bg-darkGreen text-veryLight hover:bg-darkGreenTrans m-8 p-8"
                    >
                      Reveal Answer
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="p-8 text-center text-5xl ">Answer</div>
                  <div className="bg-midDarkGreen text-veryLight rounded-md p-8 text-center text-4xl max-md:text-base">
                    {answers[index]}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleNext}
                      className=" bg-darkGreen text-veryLight hover:bg-darkGreenTrans m-8 p-8"
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
    </>
  );
}
