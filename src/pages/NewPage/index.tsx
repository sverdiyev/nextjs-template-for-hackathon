import React, { useState } from "react";
import { trpcRouter } from "../../utils/trpcRouter";

const Index: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const { data } = trpcRouter.example.exampleQuery.useQuery();

  const { data: allUsers } = trpcRouter.example.getAllUsers.useQuery();

  const createUserMutation =
    trpcRouter.example.exampleMutationWithDb.useMutation();

  return (
    <div>
      <h1>Hey from the new page at link `/NewPage` </h1>
      <h2>{data?.exampleOfNewQuery || "Loading"}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!inputValue) return;
          createUserMutation.mutate(inputValue);
        }}
      >
        add user
      </button>
      {!!allUsers?.length && (
        <ul>
          {allUsers.map((user) => (
            <li key={user.id}>
              {user.Name} with id {user.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Index;
