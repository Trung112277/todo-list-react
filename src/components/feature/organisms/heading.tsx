import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export function Heading() {
  return (
    <header>
      <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-center text-primary underline flex gap-4 justify-center items-center">
        <FontAwesomeIcon icon={faSquareCheck} />
        <a href="todo-list-react/">My Todo-s</a>
      </h1>
    </header>
  );
}
