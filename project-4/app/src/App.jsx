import { useState, useEffect } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResults/SearchResult";
export const BASE_URL = "http://localhost:9000"

const App = () => {
  const [data, setData] = useState(null)
  const [filtered, setFiltered] = useState(null)
  const [selectedBtn, setSelectedBtn] = useState("all")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)




  // fetchFoodData()


  useEffect(() => {

    const fetchFoodData = async () => {
      setLoading(true)
      try {
        let response = await fetch(BASE_URL)
        const json = await response.json()
        setData(json)
        setFiltered(json)
        setLoading(false)
      } catch (error) {
        // console.log(error)
        setError("unable to fetch data")
      }
    };
    fetchFoodData()

  }, [])
  console.log(data)


  const SearchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue == "") {
      setFiltered(null)
    }
    const khojo = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFiltered(khojo)
  };


  const filterFood = (type) => {
    if (type == "all") {
      setFiltered(data)
      setSelectedBtn("all")
      return;
    }

    const khojo = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFiltered(khojo)
    setSelectedBtn(type)
  }


  const filterBtn = [
    {
      name: "all",
      type: "all"
    },

    {
      name: "Breakfast",
      type: "all"
    },

    {
      name: "Lunch",
      type: "lunch"
    },

    {
      name: "Dinner",
      type: "dinner"
    },
  ]


  if (error) return <div>{error}</div>
  if (loading) return <div>loading.....</div>
  return (
    <Container>

      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={SearchFood} type="text" placeholder="Search Food" />

        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtn.map((value) => (
          <Button key={value.name} onClick={() => filterFood(value.type)}>{value.name}
          </Button>
        ))};

        {/* <Button onClick={()=>filterFood("all")}>All</Button>
  <Button onClick={()=>filterFood("breakfast")}>BreakFast</Button>
  <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
  <Button onClick={()=>filterFood("dinner")}>Dinner</Button> */}


      </FilterContainer>
      <SearchResult data={filtered} />

    </Container>
  )
}
export default App;
const Container = styled.div`
max-width:1200px;
margin:0 auto
`;
const TopContainer = styled.section`
height:140px;
display:flex;
margin:0 auto;
justify-content:space-between;
align-item:center;
padding:16px;

.search{
  input{
    background-color:transparent;
    border:1px solid red;
    color:white;
    border-Radius:5px;
    height:45px;
    font-size:20px
    font-weight:400;
    padding:0 10px

  }
}
@ media(0< width <600px){
  flex-direction:column ;
  height:120px
}
`;

const FilterContainer = styled.section`
display:flex;
justify-content:center;
gap: 24px;
padding-bottom:40px
`;

export const Button = styled.button`
background:#ff4343;
border-radius:5px;
padding:6px 12px ;
border:none;
color:white
cursor:pointer;
&:hover{
  background-color:#f22f2f
}
`;

