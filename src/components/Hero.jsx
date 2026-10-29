import tote1 from "../assets/tote-1.jpeg";
import tote2 from "../assets/tote-2.png";

function Hero() {
  const dots = [1, 2, 3, 4]; // 4 slider dots

  return (
    <section className="hidden md:block mx-auto mt-12 px-10 font-raleway">
      <h2 className="text-2xl font-semibold">Shop your favourite totebag.</h2>
      <p className="text-sm text-gray-600">
        Select the totebag that matches your fashion.
      </p>

      <div className="relative mt-4 h-72 overflow-hidden rounded-4xl border border-gray-300 bg-white">
        <div className="absolute left-12 top-8 flex gap-1">
          {dots.map((dot) => (
            <span
              key={dot}
              className={`h-3 rounded-full ${
                dot === 2 ? "w-10 bg-gray-300" : "w-5 bg-gray-800"
              }`}
            ></span>
          ))}
        </div>

        <div className="absolute bottom-10 left-12 max-w-xs">
          <p className="text-sm tracking-[4%]">TRENDING TOTEBAGS</p>
          <h3 className="text-3xl font-medium">Leather Totebags</h3>
          <p className="mt-2 text-sm">
            Totebag's made with leather fabric. This fabric is usually
            stronger than the others.
          </p>
        </div>

        <img
          src={tote1}
          alt="Woman carrying a leather totebag"
          className="absolute left-[27%] bottom-0 w-[400px]"
        />
        <img
          src={tote2}
          alt="Woman in a hat carrying a totebag"
          className="absolute bottom-0 right-12 h-9/10 w-[380px]"
        />
      </div>
    </section>
  );
}

export default Hero;