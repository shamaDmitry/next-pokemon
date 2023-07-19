import Ability from "./Ability";

const AbilityList = ({ list }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {list.map((item, index) => {
        return <Ability
          key={index}
          name={item.ability.name}
          url={item.ability.url}
        />
      })}
    </div>
  );
}

export default AbilityList;
