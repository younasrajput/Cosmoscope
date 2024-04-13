import { useParams } from "react-router-dom";

function BlockPage() {
  const { height } = useParams<{ height: string }>();
  return <>{height}</>;
}

export default BlockPage;
