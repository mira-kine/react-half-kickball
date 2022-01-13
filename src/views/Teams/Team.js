import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loading from '../../components/loading/Loading';
import { getTeamById } from '../../services/teams';

function Team() {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getTeamById(params.id);
      setTeam(resp);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Link to="/teams">Teams</Link> &raquo; <span>{team.name}</span>
      <h1>{team.name}</h1>
      <p>
        {team.city}, {team.state}
      </p>
      <p>
        <Link to={`/teams/${params.id}/edit`}>Edit Team</Link>
      </p>
    </>
  );
}

export default Team;
