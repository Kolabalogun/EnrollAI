import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Icon,
} from "@chakra-ui/react";
import { CircleMinus, CirclePlus } from "lucide-react";

const CustomAccordion = ({
  data,
}: {
  data: { title: string; content: string };
}) => {
  return (
    <Accordion allowToggle>
      <AccordionItem className="border-2 py-1 rounded-xl">
        {({ isExpanded }) => (
          <>
            <h2 className="font-semibold text-base raleway">
              <AccordionButton>
                {isExpanded ? (
                  <Icon as={CircleMinus} boxSize={4} />
                ) : (
                  <Icon as={CirclePlus} boxSize={4} />
                )}
                <Box flex="1" marginLeft={5} textAlign="left">
                  <p>{data.title}</p>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel
              fontFamily={"raleway"}
              fontWeight={500}
              fontSize={14}
              pb={4}
            >
              {data.content}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
export default CustomAccordion;
