import React from "react";
import { trpcRouter } from "../../utils/trpcRouter";

const Index: React.FC = () => {
  const { data } = trpcRouter.example.exampleQuery.useQuery();

  return (
    <div>
      <h1>Hey from the new page at link `/NewPage` </h1>
      <h2>{data?.exampleOfNewQuery || "Loading"}</h2>
    </div>
  );
};

export default Index;
