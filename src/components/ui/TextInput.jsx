import { Input } from "@chakra-ui/react";
import "./TextInput.css";

export const TextInput = ({ onChange, ...props }) => (
//    <input className="text-input" onChange={onChange}></input>

<Input
width={64}
height={16}
marginTop={4}            // 16px (1rem)
rounded="10px"           // Border radius of 10px
border="3px solid #9ed2c6"  // Border with 3px width and color #9ed2c6
padding={4}              // 16px (1rem) padding
color="#696969"          // Text color
fontSize="1.25rem"       // Font size of 1.25rem
bg="white"               // Background color
_focus={{
  borderColor: "black"
}}
onChange={onChange}
{...props}
/>
 
);
