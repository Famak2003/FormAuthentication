import Header from "./../shared/Header";

// const data = [
//     {},
// ]

export default function Summary() {
  return (
    <section className=" text-sm flex flex-col gap-[2rem] pt-[2rem] pr-[5rem] h-[100%] w-[100%] ">
      <Header
        head={"Finishing up"}
        subHead={"Double-check everythong looks OK before confirming."}
      />
      <main>
        <ul></ul>
      </main>
    </section>
  );
}
