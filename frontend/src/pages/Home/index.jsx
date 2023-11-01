const Home = () => {
<<<<<<< Updated upstream
  return(
    <>
      <p>Teste</p>
=======
  const [ola, setOla] = useState("");
  const [users, setUsers] = useState([]);
  
  const t = [];

  const getTeste = async () => {
    const response = await fetch("http://localhost:3000");
    const text = await response.text();
    setOla(text);
  }

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/user");
    const userList = await response.json();
    userList.users.forEach(element => {
      t.push(element)
    });
    setUsers(t);
  }

  useEffect(() => {
    getTeste();
    getUsers();
  },[]);
  
  return(
    <>
      <p>{ola}</p>
      <ul>
        {
          users.map((item) => <li key={item.id}>{item.email}</li>)
        }
      </ul>
        
>>>>>>> Stashed changes
    </>
  );
}

export default Home;