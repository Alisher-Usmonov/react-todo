import React, { useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

// Interface Props for Components

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Hook interface
/* interface State {
    text: string
}
 */
const TextField: React.FC<Props> = ({ text, handleChange }) => {
    // const [count, setCount] = useState<State>({
    //     text: "TypeScript is Super"
    // });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input placeholder={text} ref={inputRef} onChange={handleChange} />
        </div>
    );
};

export default TextField;
