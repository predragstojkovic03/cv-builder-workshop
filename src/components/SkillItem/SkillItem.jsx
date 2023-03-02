import './SkillItem.css';

const SkillItem = ({ skill }) => {
  return (
    <div className='flex flex-column justify-content-center'>
      <div className='skillItemMain'>
        <span className='skillLabel'>{skill.item.name}</span>
        {skill.item.level && (
          <span className='levelLabel'>{' - ' + skill.item.level}</span>
        )}
      </div>
    </div>
  );
};

export default SkillItem;
