import { Java } from '@career/icons';
import { Button, ProgressCard } from '@career/ui';

import {
  SkillFilters,
  SkillsList,
  SkillWrapper,
  Tag,
  TagLegendColor,
  Test1,
  Title,
} from './skill.styles';
import { useNavigate } from 'react-router-dom';

const Skill = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('add');
  };

  return (
    <SkillWrapper>
      <SkillFilters>
        <Title>Skills</Title>

        <Test1>
          <Tag>
            <TagLegendColor color="#4cbc9a" />
            de 70% até 100%
          </Tag>
          <Tag>
            <TagLegendColor color="#FEC64F" />
            de 40% até 69%
          </Tag>
          <Tag>
            <TagLegendColor color="#FC6B57" />
            de 0% até 39%
          </Tag>
        </Test1>

        <Button
          variant="primary"
          width="40rem"
          fontWeight="bold"
          onClick={handleAdd}
        >
          Adicionar Skill
        </Button>
      </SkillFilters>

      <SkillsList>
        <ProgressCard progress={80} test={23}>
          <Java />
        </ProgressCard>
        <ProgressCard progress={50} test={23}>
          <Java />
        </ProgressCard>
        <ProgressCard progress={30} test={23}>
          <Java />
        </ProgressCard>
      </SkillsList>
    </SkillWrapper>
  );
};

export default Skill;
