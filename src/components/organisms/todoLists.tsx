import { List } from '../molecules/list';

export function TodoLists() {
  return (
    <ul className="flex flex-col gap-5">
      <List
        todo={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempora'
        }
      />
      <List todo={'Lorem ipsum dolor sit '} />
      <List
        todo={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis eius ex consectetur amet? Voluptatum rem laudantium nobis nihil vitae quae, reiciendis nulla adipisci dignissimos eum iste minima harum quaerat nostrum autem assumenda perspiciatis id obcaecati iure qui dolor, nam, maiores perferendis! Vero libero amet esse eos odit, saepe impedit!'
        }
      />
    </ul>
  );
}
