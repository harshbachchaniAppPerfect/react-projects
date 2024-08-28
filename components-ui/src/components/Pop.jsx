import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import "../styles/Pop.css";
function Pop() {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">
        <a href="https://www.radix-ui.com/">Radix UI</a>
      </Popover.Trigger>
      <Popover.Trigger className="PopoverTrigger">More Info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          Some more info…
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Pop;
