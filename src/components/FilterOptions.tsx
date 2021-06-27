import { FC, ChangeEventHandler, MouseEventHandler } from "react";
import {
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import { TimeIcon, ChevronDownIcon, AddIcon } from "@chakra-ui/icons";

const timeSlots = [
  "All",
  "0830-0920",
  "0930-1020",
  "1030-1120",
  "1130-1220",
  "1230-1320",
  "1330-1420",
  "1430-1520",
  "1530-1620",
  "1630-1720",
  "1730-1820",
  "1830-1920",
  "1930-2020",
  "2030-2120",
  "2130-2220",
];

export const FilterOptions: FC<{
  searchText: string;
  handleSearchTextChange: ChangeEventHandler;
  timeSlot: string;
  handleTimeSlotChange: MouseEventHandler;
}> = ({
  searchText,
  handleSearchTextChange,
  timeSlot,
  handleTimeSlotChange,
}) => {
  return (
    <HStack p={["4", "8"]} align="center">
      <VStack w="full" align="center">
        <Input
          value={searchText}
          onChange={handleSearchTextChange}
          borderColor="#01A0DC"
          placeholder="Room name... AMDLAB | ART-01-19"
          colorScheme="linkedin"
          variant="filled"
        />
      </VStack>
      <AddIcon />
      <VStack w="full" align="center">
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="linkedin"
            size="md"
            width="full"
            leftIcon={<TimeIcon />}
            rightIcon={<ChevronDownIcon />}
          >
            {timeSlot}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Timeslot">
              {timeSlots.map((slot: string, i: number) => (
                <MenuItem
                  value={slot}
                  key={i}
                  icon={<TimeIcon />}
                  onClick={handleTimeSlotChange}
                >
                  {slot}
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
      </VStack>
    </HStack>
  );
};
