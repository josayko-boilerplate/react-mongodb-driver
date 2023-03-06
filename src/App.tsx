import "./App.css";

function App() {
  const handleClick = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const author = e.target.author.value;

    try {
      await fetch("http://localhost:3000/createpost", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          author,
        }),
      });
    } catch (err: any) {
      console.log("Error: ", err);
    }
  };

  return (
    <div className="App">
      <h1>New post</h1>
      <form
        onSubmit={handleClick}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" />
        <label htmlFor="title">Content: </label>
        <input type="text" name="content" />
        <label htmlFor="title">Author: </label>
        <input type="text" name="author" />
        <button
          style={{ backgroundColor: "hsl(171, 100%, 41%)", marginTop: "1em" }}
          type="submit"
        >
          add
        </button>
      </form>
    </div>
  );
}

export default App;
