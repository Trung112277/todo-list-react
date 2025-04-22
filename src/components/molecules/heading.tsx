import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export function Heading() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center text-primary underline flex gap-4">
      <FontAwesomeIcon
        icon={faSquareCheck}
      /> 
      <a href="/">Design System</a>
      </h1>
     
    </div>
  );
}
