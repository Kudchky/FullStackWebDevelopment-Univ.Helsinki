import React from "react";

const Anecdotes = ({ selected, setSelected, vote, setVote }) => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const clickAnecdotesRandom = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0)) + 0);
  };

  const clickVote = () => {
    setVote((prev) => {
      const newVote = [...prev];
      newVote[selected] += 1;
      return newVote;
    });
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
        {anecdotes[selected]}
      </p>
      <p style={{ fontSize: "20px" }}>has {vote[selected]} votes</p>

      <button
        onClick={clickVote}
        style={{
          fontSize: "17px",
          width: "150px",
          height: "30px",
          backgroundColor: "orange",
          borderRadius: "5px",
          border: "2px solid blue",
          cursor: "pointer",
          margin: "20px 20px 0 0",
        }}
      >
        vote
      </button>
      <button
        onClick={clickAnecdotesRandom}
        style={{
          fontSize: "17px",
          width: "150px",
          height: "30px",
          backgroundColor: "orange",
          borderRadius: "5px",
          border: "2px solid blue",
          cursor: "pointer",
        }}
      >
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <span>{anecdotes[vote.indexOf(Math.max(...vote))]}</span>
    </div>
  );
};

export default Anecdotes;
