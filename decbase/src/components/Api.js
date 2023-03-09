import React from "react";


const Bored = () => {
  const [activity, setActivity] = React.useState(null);

  const fetchActivity = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();
    setActivity(data.activity);
  };

  React.useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <h3>What to do after subscribe? Try: {activity}.</h3>
  );
};

export default Bored;

