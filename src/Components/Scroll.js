import "./Scroll.css";

function Scroll() {
  return (
    <div>
      <div className="fade"></div>

      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1>Episode X</h1>
            <h1>A New Way To Search</h1>
          </div>

          <p>A long time ago in a galaxy far, far away... </p>

          <p>
            A farm boy on a desert planet dreamed of joining a rebellion and
            saving a princess from a dark lord. Thus, one of the most successful
            cinematic sagas of all time was born. So, In another galaxy, far,
            far away...{" "}
          </p>

          <p>
            an idea forms, by a simple man, to contain the information of the
            great worlds in a centralised location, for the Star Wars
            aficionado, Welcome to
          </p>

          <h1> Higher Ground! </h1>
        </div>
      </section>
    </div>
  );
}

export default Scroll;

/* 
Referenced:
https://css-tricks.com/snippets/css/star-wars-crawl-text/ */
