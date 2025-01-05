import TeamImage from "../../../assets/team/team-image.jpeg";

export const CardAbout = () => {
  return (
    <div>
      <img
        src={TeamImage}
        alt="imagem"
        className="rounded-md max-h-[300px] w-[500px] object-cover"
      />
    </div>
  );
};
