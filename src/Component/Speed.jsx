import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Speed() {
  const arr = [
    "the soft rustling of leaves in the tranquil forest creates a soothing melody that resonates deep within one's soul as you walk along the winding paths surrounded by towering trees you can't help but feel a profound connection to nature the cool earth beneath your feet the dappled sunlight filtering through the dense foliage it's a place where time seems to stand still a sanctuary of serenity and wonder where you can escape the chaos of the modern world and find solace in the embrace of the natural world",
    "the distant howl of a lone wolf echoes through the vast wilderness a haunting reminder of the untamed beauty that surrounds you as you gaze up at the night sky the stars twinkle like distant diamonds scattered across an endless expanse of velvet darkness a celestial masterpiece that has captivated humanity for millennia in this remote corner of the world you feel small and insignificant yet strangely connected to the cosmos a mere speck in the grand tapestry of the universe but a part of it nonetheless",
    "as you stand on the edge of a windswept cliff the roaring ocean stretches out before you as far as the eye can see the waves crash against the rugged coastline with a relentless and awe-inspiring power the salt spray stings your skin and the wind tugs at your hair as you take in the sheer force of nature on display it's a reminder of the vast and untamed world that exists beyond the boundaries of human civilization a world that is both beautiful and unforgiving a world that demands respect and humility",
    "the flickering flames of a campfire dance in the cool night air their warm glow casting flickering shadows on the faces of those gathered around the fire the crackling of burning wood is a comforting soundtrack to the night's conversations and laughter as friends share stories and dreams the stars above twinkle in approval as if they too are part of this intimate circle of companionship it's a moment of pure and unfiltered joy where the troubles of the everyday world seem to fade away and all that matters is the here and now",
    "the first light of dawn breaks over the horizon painting the sky in shades of pink and orange as the world awakens from its slumber the birds begin to sing their morning songs and the world stirs to life the air is crisp and filled with the scent of dew-covered grass it's a moment of new beginnings and endless possibilities a reminder that each day is a fresh canvas waiting to be painted with the brushstrokes of our actions and choices as you watch the sun rise you can't help but feel a sense of hope and wonder for the day ahead",
  ];
  const [text, setText] = useState(arr[1]);
  const [text2, setText2] = useState("");
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [flag,setFlag] = useState(false);
  var flagTimer ="";
  useEffect(() => {
    function incrementSeconds() {
      setSeconds((prev) => ((prev > 0 && flagTimer === "sm") ? prev - 1 : prev));
      if(seconds===0){
        return (
          <>
            <h2>your Score is 0</h2>
          </>
        );
      }
    }
    const intervalID = setInterval(incrementSeconds, 1000);
    return () => clearInterval(intervalID);
  }, []);

  let arr1 = text.split(" ");
  let arr2 = text2.split(" ");

  const handleClick = () => {
    let random = Math.floor(Math.random() * arr.length);
    setText(arr[random]);
  };

  const handleOnChange = (e) => {
    if(seconds>0 && flag===true){
      setText2(e.target.value);
    }
    arr2 = text2.split(" ");
    var c = 0;
    for (let index = 0; index < arr2.length; index++) {
      if (arr2[index] === arr1[index]) {
        c = c + 1;
      }
    }
    setCount(c);
  };

  const handleClickStart = ()=>{
    flagTimer="sm"
    setFlag(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ marginTop: "2vh", padding: "2vh", fontSize: "large" }}>
        {text}
      </h4>
      <div className="mb-3 mx-2">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          
          <h1>Time Left:{seconds}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={12}
          value={text2}
          onChange={handleOnChange}
          placeholder="Enter Text Here"
          style={{ border: "1px solid black", fontSize: "1.1rem" }}
        />
      </div>
        <h1>Correct words: {count}</h1>
      <button
        type="button"
        onClick={handleClickStart}
        className="btn btn-secondary mx-2 my-2"
      >
        Start
      </button>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-secondary mx-2 my-2"
      >
        Reset
      </button>
    </div>
  );
}
