// MUI
import { Container } from "@mui/material";
import TeamItem from "./TeamItem";

const TeamList = ({ teams }) => {
  const teamList = teams.map((team) => <TeamItem team={team} key={team.id} />);
  console.log(
    "🚀 ~ file: TeamList.js ~ line 7 ~ TeamList ~ teamList",
    teamList
  );
  return <Container>{teamList}</Container>;
};

export default TeamList;
