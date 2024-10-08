import image from "../../../assets/ArchitecturalProjects/RENDER POSTAGEM 4.jpg";

export const CardAbout = () => {
  return (
    <div className="my-8">
      <img src={image} alt="imagem" className="rounded-md" />
      <p className="mt-2 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        ducimus assumenda exercitationem nobis ea cum laudantium, iure ipsam
        recusandae voluptatem repellendus aliquam nisi quis at temporibus,
        numquam quo aperiam porro. Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
    </div>
  );
};
