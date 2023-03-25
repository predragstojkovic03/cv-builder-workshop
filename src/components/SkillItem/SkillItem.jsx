import './SkillItem.css';

const SkillItem = ({ skill }) => {
  const levelText = () => {
    switch (Number(skill.item.level)) {
      case 1:
        return ' - Beginner';

      case 2:
        return ' - Intermediate';

      case 3:
        return ' - Expert';

      default:
        return '';
    }
  };

  return (
    <div className='flex flex-column justify-content-center'>
      <div className='skillItemMain'>
        <span className='skillLabel'>{skill.item.name}</span>
        {skill.item.level && skill.item.doesWantDisplay && (
          <span className='levelLabel'>{levelText()}</span>
        )}
      </div>
    </div>
  );
};

export default SkillItem;
