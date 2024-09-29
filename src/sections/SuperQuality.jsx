import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You</span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Super Quality</span> Shoes
          </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit adipisci itaque excepturi consequuntur, tenetur aperiam assumenda ratione nihil, amet quaerat alias dolorum. </p>
        <Button
          label='Show More'
        />
      </div>
    </section>
  )
}

export default SuperQuality