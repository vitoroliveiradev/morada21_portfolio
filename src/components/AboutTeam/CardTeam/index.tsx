import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

export type CardTeam = {
  image: string;
  position: string;
  name: string;
  description: string;
};

export const CardTeam = ({ image, position, name, description }: CardTeam) => {
  return (
    <div className="flex flex-col items-center gap-8 max-w-[40%] h-fit p-2 shadow-lg">
      <img
        src={image}
        alt=""
        className="w-[150px] h-[150px] rounded-full object-cover"
      />
      <div className="w-[300px] h-auto flex flex-col px-2">
        <h3 className="text-[25px]">{position}</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{name}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
