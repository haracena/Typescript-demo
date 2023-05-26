type PersonsListProps = {
  nameList: {
    firstName: string;
    lastName: string;
  }[];
};

export const PersonsList = (props: PersonsListProps) => {
  return (
    <div>
      {props.nameList.map((person) => (
        <h2>
          {person.firstName} {person.lastName}
        </h2>
      ))}
    </div>
  );
};
