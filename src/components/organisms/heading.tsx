import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export function Heading() {
  return (
    <h1 className="text-6xl font-bold text-center text-primary underline flex gap-4 justify-center">
      <FontAwesomeIcon icon={faSquareCheck} />
      <a href="/">My Todo-s</a>
    </h1>
  );
}
